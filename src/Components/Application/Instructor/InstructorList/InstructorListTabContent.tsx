import { Card, CardBody, Row, TabContent, TabPane } from "reactstrap";
import { useAppSelector } from "@/Redux/Hooks";
import InstructorCommon from "./Common/InstructorCommon";

const InstructorListTabContent = () => {
  const { activeTab, createdFormData } = useAppSelector((state) => state.instructor);
  return (
    <Card>
      <CardBody>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1"><Row>{createdFormData.map((item, i) => (<InstructorCommon item={item} key={i} />))}</Row></TabPane>
          <TabPane tabId="2"><Row>{createdFormData.map((item, i) => (item.badge === "Doing" ? <InstructorCommon item={item} key={i} /> : " "))}</Row></TabPane>
          <TabPane tabId="3"><Row>{createdFormData.map((item, i) => (item.badge === "Done" ? <InstructorCommon item={item} key={i} /> : " "))}</Row></TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
};

export default InstructorListTabContent;
