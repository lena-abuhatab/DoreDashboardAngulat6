const Validator = require("validator");
const isEmpty = require("./is-empty");

const isDateFormat = require("is-date-format");
module.exports = function validateToDoInput(data) {
  let errors = {};

  data.todo_date = !isEmpty(data.todo_date) ? data.todo_date : "";
  data.todo_name = !isEmpty(data.todo_name) ? data.todo_name : "";
  // data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.todo_name, { min: 2, max: 30 })) {
    errors.todo_name = "must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.todo_name)) {
    errors.todo_name = "field is required";
  }

  if (!isDateFormat(data.todo_date, "mm/dd/yyyy")) {
    errors.todo_date = "date sholud be in format mm/dd/yyyy";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
