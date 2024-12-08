import { Col } from "reactstrap";
import { CreateNewInstructors } from "@/Constant";
import Link from "next/link";
import SvgIcon from "@/CommonComponent/SVG/SvgIcon";

const CreateNewInstructor = () => {
  return (
    <Col md="6" className="d-md-block">
      <Link className="btn btn-primary" href={`/instructor/createnew`}>
        <SvgIcon className="feather" iconId="plus-square" />
        {CreateNewInstructors}
      </Link>
    </Col>
  );
};

export default CreateNewInstructor;
