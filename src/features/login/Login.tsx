import {
  Field,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Mail, User, UserShield } from "lucide-react"

export const Login = () => {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
      <form>
        <FieldGroup>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field className="gap-1">
              <FieldLabel htmlFor="name">
                Nombre(s)
              </FieldLabel>
              <InputGroup>
                <InputGroupInput id="name"
                  placeholder="Ej. Carlos"
                  required />
                <InputGroupAddon>
                  <User />
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field className="gap-1">
              <FieldLabel htmlFor="last-name">
                Apellidos
              </FieldLabel>
              <InputGroup>
                <InputGroupInput id="last-name"
                  placeholder="Ej. Hérnandez"
                  required />
                <InputGroupAddon>
                  <UserShield />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
          <div className="grid">
            <Field className="gap-1">
              <FieldLabel htmlFor="email">
                Correo electrónico
              </FieldLabel>
              <InputGroup>
                <InputGroupInput id="email"
                  placeholder="nombre@empresa.com"
                  required />
                <InputGroupAddon>
                  <Mail />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
        </FieldGroup>
      </form>
    </div>
  )
}
