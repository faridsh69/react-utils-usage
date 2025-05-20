import { useState } from "react";
import {
  Form,
  FormSchemaType,
  Modal,
  IconsEnum,
  SCHEMAS,
} from "@faridsh69/react-utils";
import * as yup from "yup";

import { SMART_FORM_INPUTS } from "./extra/storiesData";
import styles from "./Story.module.scss";

const USERS_ROLE_ENUM = ["Admin"];
const USERS_GENDER_ENUM = ["male"];

const TEST_SCHEMA: FormSchemaType = yup.object({
  // first_name: SCHEMAS.requiredString.min(2, 'Name must have atleast 2 characters.'),
  last_name: SCHEMAS.requiredString.min(
    2,
    "Last name must have atleast 2 characters."
  ),
  gender: SCHEMAS.mixed(USERS_GENDER_ENUM),
  bio: SCHEMAS.requiredString,
  main_role: SCHEMAS.mixed(USERS_ROLE_ENUM),
  roles: yup
    .array()
    .of(
      yup.object({
        value: yup.string(),
      })
    )
    .min(2)
    .required(),
});

export const FormStory = () => {
  const FORM_ID = "FORM_ID";

  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    last_name: "test",
    gender: "female",
    chart_account_id: 1,
  });

  // console.log('1 formValues', formValues)
  const onChangeInput = (_: any, finalFormData: any) => {
    setFormValues(finalFormData);
  };

  return (
    <div className={styles.story}>
      <h4>A) Form Generator {`<Form inputs={[{name: 'email'}]} />`}</h4>
      <pre>
        - This is a component that is automatically generate all kind of fields
        <br />
        - Also we can have all type of validations for each inputs
        <br />- Also it will give you the current data of inputs and validity of
        form
      </pre>
      <Form
        inputs={SMART_FORM_INPUTS}
        values={formValues}
        onChangeInput={onChangeInput}
        schema={TEST_SCHEMA}
        label="Register User Form"
        icon={IconsEnum.Ok}
        hiddenSubmitButtonId={FORM_ID}
        background={true}
        collapsable={true}
      />
      {/* <br /> */}
      {/* <Button label='save' onClick={() => submitFormId(FORM_ID)} /> */}
      {/* <br /> */}
      {/* <Button
        variant={VariantsEnum.Dark}
        label='show form in a modal'
        onClick={() => setIsOpen(true)}
      /> */}
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Register User Form"
        body={
          <Form
            width={1400}
            inputs={SMART_FORM_INPUTS}
            schema={TEST_SCHEMA}
            background={false}
          />
        }
      />
    </div>
  );
};
