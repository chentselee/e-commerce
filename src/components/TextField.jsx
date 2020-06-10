import React from "react";
import Form from "react-bootstrap/Form";
import { useField } from "formik";

const TextField = ({
  label = "",
  helperText = "",
  required = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <Form.Group>
      <Form.Label htmlFor={props.id || props.name}>
        {label}
        {required ? "*" : ""}
      </Form.Label>
      <Form.Control size="sm" {...field} {...props} />
      <Form.Text>
        {helperText}
        {meta.touched && meta.error ? meta.error : ""}
      </Form.Text>
    </Form.Group>
  );
};

export default TextField;
