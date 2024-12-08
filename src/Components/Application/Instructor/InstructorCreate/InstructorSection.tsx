import { ErrorMessage, Field } from "formik";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { FixPrice, High, Hourly, Low, Medium, Priority, PriorityPlaceholder, InstructorProgress, InstructorProgressPlaceholder, InstructorStatus, Urgent } from "@/Constant";

const InstructorSection = () => {
  return (
    <Row>
      <Col sm="4">
        <FormGroup>
          <Label check>{InstructorProgress}</Label>
          <Field name="progress" className="form-control" type="number" placeholder={InstructorProgressPlaceholder} />
          <ErrorMessage name="progress" component="span" className="text-danger" />
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <Label check>{InstructorStatus}</Label>
          <Field name="type" as="select" className="form-select">
            <option>{Hourly}</option>
            <option>{FixPrice}</option>
          </Field>
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <Label check>{Priority}</Label>
          <Field name="priority" as="select" placeholder={PriorityPlaceholder} className="form-select">
            <option>{Low}</option>
            <option>{Medium}</option>
            <option>{High}</option>
            <option>{Urgent}</option>
          </Field>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default InstructorSection;
