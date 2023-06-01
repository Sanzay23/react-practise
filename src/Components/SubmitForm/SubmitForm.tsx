import axios from "axios";
import { FormData } from "./SubmitForm.model";
import { FormContainer, InputField, SubmitButton, TitleDiv , DesciptionDiv } from "./Submitform.styled";
import { useForm, SubmitHandler } from "react-hook-form";



const SubmitForms = () => {
  const { handleSubmit, register } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    axios
      .post("http://localhost:3000/forms", formData)
      .then((forms) => {
        console.log("Form submitted successfully", forms.data);
      })
      .catch((error) => {
        
        console.error("Error submitting form", error);
      });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleDiv> TITLE </TitleDiv>
        <InputField type="text" placeholder="TITLE" {...register("title", { required: true })} />
<DesciptionDiv></DesciptionDiv>
        <InputField
          type="text"
          placeholder="DESCRIPTION"
          {...register("title", { required: true })}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default SubmitForms;
