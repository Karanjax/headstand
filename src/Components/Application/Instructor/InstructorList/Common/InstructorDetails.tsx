import { Col, Row } from "reactstrap";
import { Comment, Issues, Resolved } from "@/Constant";
import { CommonInstructorInterFace } from "@/Type/Application/InstructorList/InstructorList";

const InstructorDetails:React.FC<CommonInstructorInterFace> = ({ item }) => {
  return (
    <Row className="details">
      <Col xs="6">
        <span>{Issues} </span>
      </Col>
      <Col xs="6" className={item.badge === "Done" ? "font-success" : "font-danger"}>
        {item.issue}
      </Col>
      <Col xs="6">
        <span>{Resolved}</span>
      </Col>
      <Col xs="6" className={item.badge === "Done" ? "font-success" : "font-danger"}>
        {item.resolved}
      </Col>
      <Col xs="6">
        <span>{Comment}</span>
      </Col>
      <Col xs="6" className={item.badge === "Done" ? "font-success" : "font-danger"}>
        {item.comment}
      </Col>
    </Row>
  );
};

export default InstructorDetails;
