import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import type { App } from "vue";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  integer,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

interface IContext {
  // this is equivalent to VeeValidate - FieldValidationMetaInfo interface
  field: string;
  name: string;
  label?: string;
  value: unknown;
  form: Record<string, unknown>;
  rule?: {
    name: string;
    params?: Record<string, unknown> | unknown[];
  };
}

export default {
  install(app: App) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("integer", integer);
    defineRule("min_value", minValue);
    defineRule("max_value", maxValue);
    defineRule("confirmed", confirmed);
    defineRule("passwords_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);

    configure({
      generateMessage: (ctx: IContext) => {
        const messages: { [key: string]: string } = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} may contain only letters and spaces.`,
          email: `The field ${ctx.field} must be a vaild email.`,
          integer: `The field ${ctx.field} must be integer.`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          confirmed: `The field ${ctx.field} does not match value.`,
          passwords_mismatch: `The passwords don't match.`,
          excluded: `The field ${ctx.field} cannot be set to this value.`,
          country_excluded: `Due to restrictions, we do not accept users from this location`,
          tos: `You must accept the Terms of Serevice`,
        };

        const message = messages[ctx.rule?.name ?? ""]
          ? messages[ctx.rule?.name ?? ""]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
