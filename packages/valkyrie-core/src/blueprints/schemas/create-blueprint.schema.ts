import * as yup from 'yup';

export const createBlueprintSchema = yup.object({
  name: yup.string().required('The name is required'),
  published: yup.boolean().default(false),
  fields: yup.array().of(yup.object({
    name: yup.string().required("The field's name is required"),
    type: yup.string().oneOf(['BIGINT', 'STRING'], 'Value not in the enum'),
  })),
});

export interface CreateBlueprint extends yup.InferType<typeof createBlueprintSchema> {}
