import React from "react";
import Form from "react-bootstrap/Form";
import { useField } from "formik";

const SelectField = ({
  label = "",
  helperText = "",
  required,
  options = [],
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <Form.Group>
      <Form.Label>
        {label}
        {required ? "*" : ""}
      </Form.Label>
      <Form.Control
        {...field}
        {...props}
        as="select"
        isValid={meta.touched && !meta.error}
        isInvalid={meta.touched && meta.error}
        className="custom-select"
      >
        <option value="">請選擇</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Form.Control>
      <Form.Text>{helperText}</Form.Text>
      <Form.Control.Feedback type="invalid">
        {meta.touched && meta.error ? meta.error : ""}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default SelectField;
