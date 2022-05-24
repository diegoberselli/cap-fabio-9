import * as yup from "yup";

const createStoretValidation = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        branch: yup.string().required("branch name is required"),
        city: yup.string().required("city name is required"),
        street: yup.number().required("street name is required"),
        district: yup.number().required("district name is required"),
        number: yup.number().required("number is required"),
        zipCode: yup.number().required("zipCode number is required"),
        phone: yup.number().required("phone number is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};
export default createStoretValidation;
