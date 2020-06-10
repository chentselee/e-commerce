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
      <Form.Control
        {...field}
        {...props}
        size="sm"
        isValid={meta.touched && !meta.error}
        isInvalid={meta.touched && meta.error}
      />
      <Form.Text>{helperText}</Form.Text>
      <Form.Control.Feedback type="invalid">
        {meta.touched && meta.error ? meta.error : ""}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default TextField;
