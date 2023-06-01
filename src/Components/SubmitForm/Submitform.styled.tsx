import styled from "styled-components";

const FormContainer = styled.div`
  background-color: #eeeeee;
  width: 50vw;
  height: 30vh;
  display: flex;
  flex-direction: column ;
`;
const TitleDiv = styled.div`
margin : 10px;

`;
const InputField = styled.input`
  width: 50%;
  height: 30px;
`;
const DesciptionDiv = styled.div`
margin : 10px;

`;
const SubmitButton = styled.button`
  width: 20%;
  margin-left: 30px;
  text-align: center;
  padding: 0 0;
  heignt: 10%;
`;

export { FormContainer, InputField, SubmitButton, TitleDiv,DesciptionDiv };
