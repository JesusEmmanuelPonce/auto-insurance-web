import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Controller, useFormContext } from "react-hook-form";
import type { QuotationFormData } from "@/features/quotations/schemas/quotation.schema";
import { Input } from "@/components/ui/input";

export const IdentityFields = () => {
  const { control } = useFormContext<QuotationFormData>();

  return (
    <FieldGroup>
      <p className="font-medium">
        Personal information
      </p>

      <Controller
        name="identity.legalName"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>
              Legal name
            </FieldLabel>

            <Input
              {...field}
              id={field.name}
              placeholder="Ada Lovelace"
              autoComplete="name"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.invalid && (
              <FieldError
                errors={[fieldState.error]}
              />
            )}
          </Field>
        )}
      />

      <Controller
        name="identity.dob"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>
              Date of birth
            </FieldLabel>

            <Input
              {...field}
              id={field.name}
              placeholder="1990-12-10"
              autoComplete="bday"
              aria-invalid={fieldState.invalid}
            />

            {fieldState.invalid && (
              <FieldError
                errors={[fieldState.error]}
              />
            )}
          </Field>
        )}
      />
    </FieldGroup>
  );
}