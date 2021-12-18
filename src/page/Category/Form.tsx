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
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../api/category";
import { useState } from "react";
import Spinner from "../../components/atoms/spinners";

export default function FormCategory() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schemaCategory) });

  const onSubmit = async (form: any) => {
    try {
      setLoading(!isLoading);
      const data: any = await createCategory(form);
      navigate("/category", { state: data.message, replace: true });
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
