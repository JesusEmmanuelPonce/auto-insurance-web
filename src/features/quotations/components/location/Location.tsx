import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Controller, useFormContext } from "react-hook-form";
import type { QuotationFormData } from "@/features/quotations/schemas/quotation.schema";
import { Input } from "@/components/ui/input";

export const Location = () => {
  const { control } = useFormContext<QuotationFormData>();

  return (
    <FieldGroup>
      <p className="font-medium">
        Location
      </p>

      <Controller
        name="location.city"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>
              Location
            </FieldLabel>

            <Input
              {...field}
              id={field.name}
              placeholder="City"
              autoComplete="city"
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