import React from "react";
import Form from "react-bootstrap/Form";
import { useField } from "formik";
import "./Checkbox.css";

const Checkbox = ({ label, helperText = "", required = false, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Form.Group>
      <section className="__checkbox-row">
        <Form.Control
          {...field}
          {...props}
          type="checkbox"
          className="__checkbox-input"
          isValid={meta.touched && !meta.error}
          isInvalid={meta.touched && meta.error}
        />
        <Form.Text
          htmlFor={props.id || props.name}
          className="__checkbox-label"
        >
          {label}
          {required ? "*" : ""}
        </Form.Text>
      </section>
      <Form.Text>{helperText}</Form.Text>
      <Form.Control.Feedback type="invalid">
        {meta.touched && meta.error ? meta.error : ""}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Checkbox;
