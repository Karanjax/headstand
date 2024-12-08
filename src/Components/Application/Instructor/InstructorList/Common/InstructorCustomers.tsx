import { ImagePath } from "@/Constant";
import { CommonInstructorInterFace } from "@/Type/Application/InstructorList/InstructorList";
import Image from "next/image";

const InstructorCustomers: React.FC<CommonInstructorInterFace> = ({ item }) => {
  console.log('test');
  console.log(item);
  return (
    <div className="customers">
      <ul>
        <li className="d-inline-block">
          <Image width={30} height={30} className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_image1}`} alt="user" />
        </li>
        <li className="d-inline-block">
          <Image width={30} height={30} className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_image2}`} alt="user" />
        </li>
        <li className="d-inline-block">
          <Image width={30} height={30} className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_image3}`} alt="user" />
        </li>
        <li className="d-inline-block ms-2">
          <p className="f-12">{`+${item.like} More`}</p>
        </li>
      </ul>
    </div>
  );
};

export default InstructorCustomers;
