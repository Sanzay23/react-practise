import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SubmitForm } from "./SubmitForm.model";

const useSubmitForm = () => {
  const postSubmitreq = () =>
    axios
      .post<SubmitForm[]>("http://localhost:3000/form")
      .then((forms) => forms.data);

  return useQuery<SubmitForm[], Error>({
    queryKey: ["SubmitForm"],
    queryFn: postSubmitreq,
  });
};
export {useSubmitForm};
