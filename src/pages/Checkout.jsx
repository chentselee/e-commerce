import React, { useRef, useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import {
  useRouteMatch,
  useLocation,
  useHistory,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import BsForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TextField from "../components/TextField";
import SelectField from "../components/SelectField";
import Checkbox from "../components/Checkbox";
import "./Checkout.css";

const fields = {
  sender: {
    initialValue: "",
    validation: Yup.string().max(10, "不能超過10個字元").required("必填項目"),
    props: {
      id: "sender",
      name: "sender",
      type: "text",
      label: "姓名",
      required: true,
    },
  },
  senderPhone: {
    initialValue: "",
    validation: Yup.string()
      .matches(/([0-9])/)
      .max(10, "不能超過10個字元")
      .required("必填項目"),
    props: {
      id: "senderPhone",
      name: "senderPhone",
      type: "text",
      label: "電話",
      required: true,
    },
  },
  senderEmail: {
    initialValue: "",
    validation: Yup.string().email("請輸入正確的email格式"),
    props: {
      id: "senderEmail",
      name: "senderEmail",
      type: "email",
      label: "電子郵件",
    },
  },
  senderAddress: {
    initialValue: "",
    validation: Yup.string().max(100, "不能超過100個字元").required("必填項目"),
    props: {
      id: "senderAddress",
      name: "senderAddress",
      type: "text",
      label: "地址",
      required: true,
    },
  },
  receiver: {
    initialValue: "",
    validation: Yup.string().max(10, "不能超過10個字元").required("必填項目"),
    props: {
      id: "receiver",
      name: "receiver",
      type: "text",
      label: "姓名",
      required: true,
    },
  },
  receiverPhone: {
    initialValue: "",
    validation: Yup.string()
      .matches(/([0-9])/, "請輸入電話號碼")
      .min(8, "請輸入電話號碼")
      .max(10, "不能超過10個字元")
      .required("必填項目"),
    props: {
      id: "receiverPhone",
      name: "receiverPhone",
      type: "text",
      label: "電話",
      required: true,
    },
  },
  receiverEmail: {
    initialValue: "",
    validation: Yup.string().email("請輸入正確的email格式"),
    props: {
      id: "receiverEmail",
      name: "receiverEmail",
      type: "email",
      label: "電子郵件",
    },
  },
  receiverAddress: {
    initialValue: "",
    validation: Yup.string().max(100, "不能超過100個字元").required("必填項目"),
    props: {
      id: "receiverAddress",
      name: "receiverAddress",
      type: "text",
      label: "地址",
      required: true,
    },
  },
  payment: {
    initialValue: "",
    validation: Yup.string()
      .matches(/(creditCard|convenient|payOnDelivery)/, "請選擇付款方式")
      .required("請選擇付款方式"),
    props: {
      id: "payment",
      name: "payment",
      label: "付款方式",
      required: true,
      options: [
        { name: "信用卡", value: "creditCard" },
        { name: "超商取貨", value: "convenient" },
        { name: "貨到付款", value: "payOnDelivery" },
      ],
    },
  },
  creditCard: {
    initialValue: "",
    validation: Yup.string().matches(
      /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/,
      "請輸入正確的卡號格式"
    ),
    dependency: "payment",
    props: {
      id: "creditCard",
      name: "creditCard",
      type: "text",
      label: "卡號",
      required: true,
    },
  },
  convenient: {
    initialValue: "",
    validation: Yup.string().matches(
      /(myHome|yourHome|someonesHome)/,
      "請選擇門市"
    ),
    dependency: "payment",
    props: {
      id: "convenient",
      name: "convenient",
      label: "超商門市",
      required: true,
      options: [
        { name: "我家", value: "myHome" },
        { name: "你家", value: "yourHome" },
        { name: "他家", value: "someonesHome" },
      ],
    },
  },
};

const Step1 = () => {
  return (
    <>
      <h1>購買人</h1>
      <TextField {...fields.sender.props} />
      <TextField {...fields.senderPhone.props} />
      <TextField {...fields.senderAddress.props} />
      <TextField {...fields.senderEmail.props} />
    </>
  );
};

const Step2 = () => {
  const { values, setFieldValue } = useFormikContext();
  const handleApplySender = (e) => {
    const senderFields = [
      "sender",
      "senderPhone",
      "senderAddress",
      "senderEmail",
    ];
    const receiverFields = [
      "receiver",
      "receiverPhone",
      "receiverAddress",
      "receiverEmail",
    ];
    receiverFields.forEach((field, index) => {
      setFieldValue(field, values[senderFields[index]]);
    });
  };
  return (
    <>
      <h1>收件人</h1>
      <TextField {...fields.receiver.props} />
      <TextField {...fields.receiverPhone.props} />
      <TextField {...fields.receiverAddress.props} />
      <TextField {...fields.receiverEmail.props} />
      <Checkbox
        id="applySender"
        name="applySender"
        label="同購買人"
        onClick={handleApplySender}
      />
    </>
  );
};
const Step3 = () => {
  const { values } = useFormikContext();
  return (
    <>
      <h1>付款資訊</h1>
      <SelectField {...fields.payment.props} />
      {values[fields.creditCard.dependency] === fields.creditCard.props.id ? (
        <TextField {...fields.creditCard.props} />
      ) : (
        ""
      )}
      {values[fields.convenient.dependency] === fields.convenient.props.id ? (
        <SelectField {...fields.convenient.props} />
      ) : (
        ""
      )}
    </>
  );
};

const Step4 = () => {
  const { values } = useFormikContext();
  return (
    <dl className="__checkout-confirm">
      {Object.entries(fields).map(([key, field]) => {
        if (!values[key]) return null;
        if (field.dependency && values[field.dependency] !== field.props.id)
          return null;
        return (
          <div key={key} className="__checkout-confirm-field">
            <dt>{field.props.label}</dt>
            <dd>
              {field.props.options
                ? field.props.options.find(
                    (option) => option.value === values[key]
                  ).name
                : values[key]}
            </dd>
          </div>
        );
      })}
    </dl>
  );
};

const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

const initialValues = {};
const validationSchema = {};
for (const key in fields) {
  initialValues[key] = fields[key].initialValue;
  validationSchema[key] = fields[key].validation;
}

const Checkout = () => {
  const { path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [helperText, setHelperText] = useState("");
  const step = useRef(+location.pathname.split("/").pop());
  const maxStep = steps.length - 1;
  const success = useRef(false);
  return (
    <main className="__checkout">
      <Switch>
        <Route path={`${path}/success`}>
          {success.current ? (
            <article className="__checkout-success">
              訂購完成！將儘速完成您的訂單
            </article>
          ) : (
            <Redirect to="/cart" />
          )}
        </Route>
        <Route path={`${path}/`}>
          <Breadcrumb>
            {steps.map((_step, index) => {
              if (index === maxStep) {
                return null;
              } else if (index === step.current) {
                return (
                  <Breadcrumb.Item key={index} active>
                    {index + 1}
                  </Breadcrumb.Item>
                );
              } else {
                return (
                  <Breadcrumb.Item
                    linkAs="span"
                    key={index}
                    onClick={() => (step.current = index)}
                  >
                    <Link to={`${path}/${index}`}>{index + 1}</Link>
                  </Breadcrumb.Item>
                );
              }
            })}
          </Breadcrumb>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object(validationSchema)}
            onSubmit={(values) => {
              alert(values);
            }}
          >
            {(formik) => (
              <Form>
                <Switch>
                  {steps.map((step, index) => (
                    <Route key={index} path={`${path}/${index}`}>
                      {step}
                    </Route>
                  ))}
                </Switch>
                {helperText ? <BsForm.Text>{helperText}</BsForm.Text> : null}
                <nav className="__checkout-nav mt-2">
                  {step.current !== 0 ? (
                    <Link to={`${path}/${step.current - 1}`}>
                      <Button
                        variant="primary"
                        onClick={() => (step.current -= 1)}
                      >
                        上一步
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/cart">
                      <Button variant="secondary">←購物車</Button>
                    </Link>
                  )}
                  {step.current !== maxStep ? (
                    <>
                      {step.current === maxStep - 1 ? (
                        <Button
                          variant="success"
                          disabled={formik.isValidating}
                          onClick={() => {
                            formik.validateForm().then(() => {
                              let message = "";
                              if (formik.isValid) {
                                step.current += 1;
                                history.push(`${path}/${step.current}`);
                              } else {
                                message = "請確認所有資料都填寫正確";
                              }
                              setHelperText(message);
                            });
                          }}
                        >
                          確認
                        </Button>
                      ) : (
                        <Link to={`${path}/${step.current + 1}`}>
                          <Button
                            variant="primary"
                            onClick={() => (step.current += 1)}
                          >
                            下一步
                          </Button>
                        </Link>
                      )}
                    </>
                  ) : (
                    <Link to={`${path}/success`}>
                      <Button
                        variant="success"
                        onClick={() => (success.current = true)}
                      >
                        確認並送出
                      </Button>
                    </Link>
                  )}
                </nav>
              </Form>
            )}
          </Formik>
        </Route>
      </Switch>
    </main>
  );
};

export default Checkout;
