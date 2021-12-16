import FormGroup from "../../components/atoms/form-group";
import Label from "../../components/atoms/label";
import Input from "../../components/atoms/input";
import Button from "../../components/atoms/button";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { schemaCategory } from "../../helper/validation";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../api/category";

export default function FormCategory() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schemaCategory) });

  const onSubmit = async (form: any) => {
    await createCategory(form);
    navigate("/category");
  };
  return (
    <>
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
                  onClick={() => navigate("/category")}
                >
                  Back
                </Button>
              </div>
              <Button type="submit" btnColor="primary">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
