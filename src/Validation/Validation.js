import * as yup from "yup";

export const CheckEmpty = (data) => {
  if (data.trim() === "" || data.trim() === null) {
    return true;
  } else {
    return false;
  }
};
