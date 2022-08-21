const validatePassword = (value: string) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(value)) {
    error =
      "Password must be minumum of eight characters, at least one letter and one number";
  }

  return error;
};

export default validatePassword;
