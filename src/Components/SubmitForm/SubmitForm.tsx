import React from "react";
import { SubmitForm } from "./SubmitForm.model";
import { useSubmitForm  } from "./SubmitForm.service" ;
import { FormContainer } from "./Submitform.styled";
const SubmitForms = ()=> {

const {data:submit , error , isLoading } = useSubmitForm();

if( isLoading){
    return <div>Loading Please wait</div>
}
if (error) {
    return<div> {error.message} </div>
}
    return (
       <>
       <FormContainer></FormContainer>
       </>

    )
}

export default SubmitForms;
