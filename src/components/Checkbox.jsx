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
          type="checkbox"
          {...field}
          {...props}
          className="__checkbox-input"
        />
        <Form.Text
          htmlFor={props.id || props.name}
          className="__checkbox-label"
        >
          {label}
          {required ? "*" : ""}
        </Form.Text>
      </section>
      <Form.Text>
        {helperText}
        {meta.touched && meta.error ? meta.error : ""}
      </Form.Text>
    </Form.Group>
  );
};

export default Checkbox;
