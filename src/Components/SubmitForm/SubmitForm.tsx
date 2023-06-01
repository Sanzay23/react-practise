import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import {
  FormContainer,
  InputField,
  SubmitButton,
  TitleDiv,
  DesciptionDiv,
} from "./Submitform.styled";

interface FormData {
  title: string;
  description: string;
}

const SubmitForms = () => {
  const { handleSubmit, register, reset } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    axios
      .post("http://localhost:3000/form", formData)
      .then((response) => {
        console.log("Form submitted successfully", response.data);
        reset(); 
      })
      .catch((error) => {
        console.error("Error submitting form", error);
      });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleDiv> TITLE </TitleDiv>
        <InputField
          type="text"
          placeholder="TITLE"
          {...register("title", { required: true })}
        />
        <DesciptionDiv>DESCRIPTION</DesciptionDiv>
        <InputField
          type="text"
          placeholder="DESCRIPTION"
          {...register("description", { required: true })}
        />

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default SubmitForms;
