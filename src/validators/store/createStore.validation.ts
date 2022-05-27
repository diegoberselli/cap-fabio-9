import * as yup from "yup";

const createStoretValidation = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        password: yup.string().required("password is required"),
        branch: yup.string().required("branch name is required"),
        state: yup.string().required("state name is required"),
        city: yup.string().required("city name is required"),
        street: yup.string().required("street name is required"),
        district: yup.string().required("district name is required"),
        number: yup.string().required("number is required"),
        zipcode: yup.string().required("zipCode number is required"),
        phone: yup.string().required("phone number is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};
export default createStoretValidation;
