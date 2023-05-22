import { SubmitForm } from '../SubmitForm.model';
import { FormContainer  } from '../Submitform.styled';
interface SubmitProps{
    forms: SubmitForm[];
}

const SubmitForms : React.FunctionComponent<SubmitProps> = ({ forms }) => {
    return(
        <FormContainer>
            <header>FORM</header>
        </FormContainer>
    )
}

export default SubmitForms; 