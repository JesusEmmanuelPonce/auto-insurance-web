import { useState } from "react";
import { useQuotationForm, type QuotationFormData } from "../schemas/quotation.schema";

export const Wizard = () => {
  const [submitted, setSubmitted] = useState(false);

  const methods = useQuotationForm()

  const onSubmit = (data: QuotationFormData) => {
    console.log("Datos enviados al servidor:", data);

    setSubmitted(true);
  };

  return (

    <form onSubmit={() => methods.handleSubmit(onSubmit)}>
      <fieldset disabled={submitted}>
        <input placeholder="Name" type="text" />
      </fieldset>
    </form>
  )
}
