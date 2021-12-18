import Sidebar from "../../components/organisms/sidebar";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import FormGroup from "../../components/atoms/form-group";
import Label from "../../components/atoms/label";
import Input from "../../components/atoms/input";
import Button from "../../components/atoms/button";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { schemaCategory } from "../../helper/validation";
import { useNavigate, useParams } from "react-router-dom";
import {
  createCategory,
  editCategory,
  singleCategory,
} from "../../api/category";
import { useEffect, useState } from "react";
import Spinner from "../../components/atoms/spinners";

export default function FormCategory() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schemaCategory) });

  async function getSingleCategory() {
    const { data }: any = await singleCategory(categoryId);
    setValue("category", data.name);
  }

  useEffect(() => {
    if (!categoryId) return;
    getSingleCategory();
  }, [getSingleCategory]);

  const onSubmit = async (form: any) => {
    try {
      setLoading(!isLoading);
      if (categoryId) {
        await editCategory(categoryId, form);
        navigate("/category", {
          state: { success: "1", message: "editing" },
          replace: true,
        });
        return setLoading(false);
      }
      await createCategory(form);
      navigate("/category", {
        state: { success: "1", message: "adding" },
        replace: true,
      });
      setLoading(false);
    } catch (err: any) {
      if (err.response.status === 406) setLoading(false);
      return setError("category", { message: "Category already exists" });
    }
  };
  return (
    <>
      <div id="wrapper">
        <Sidebar active="/category" />
        <div id="content-wrapper" className="d-flex flex-column content">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <div className="d-sm-flex mb-4">
                <h1 className="h3 mb-0 text-gray-800">Form</h1>
              </div>
              <div className="row">
                <div className="col-sm-4 col-md-6 col-lg-4">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup err={errors.category}>
                      <Label title="Category Name" />
                      <Input type="text" name="category" register={register} />
                    </FormGroup>
                    <div className="d-flex justify-content-end">
                      <div className="pr-2">
                        <Button
                          type="button"
                          btnColor="danger"
                          onClick={() =>
                            navigate("/category", { replace: true })
                          }
                        >
                          Back
                        </Button>
                      </div>
                      <Button
                        type="submit"
                        btnColor="primary"
                        disabled={isLoading}
                      >
                        {isLoading ? <Spinner size="sm" /> : "save"}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
