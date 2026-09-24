import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const quotationSchema = z.object({
  identity: z.object({
    legalName: z.string().min(2, "Enter your legal name"),
    dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD"),
  }),

  location: z.object({
    city: z.string().min(2, "Enter your city"),
  }),

  packages: z.object({
    name: z.string().min(2, "Enter your package name"),
  }),
})

export type QuotationFormData = z.infer<typeof quotationSchema>

export const useQuotationForm = () => {
  return useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
    mode: "all",

    defaultValues: {
      identity: {
        legalName: "",
        dob: "",
      },
      location: {
        city: "",
      },
      packages: {
        name: "",
      },
    },
  })
}
