import { Badge, Col } from 'reactstrap'
import { Done, ImagePath } from '@/Constant'
import Image from 'next/image'
import { CommonInstructorInterFace } from '@/Type/Application/InstructorList/InstructorList'
import { truncateText } from "@/utils/truncateText"


const InstructorCommon: React.FC<CommonInstructorInterFace> = ({ item }) => {
  console.log(item);
  return (
    <Col xxl="4" md="6" >
      <div className={`project-box font-dark`}>
        <h5 className='f-w-500 mb-2'>{item.name}</h5>
        <p className="font-light">{item.title}</p>
        <div className='d-flex mb-2'>
          <Image width={160} height={200} className='img-160 me-1' src={`${ImagePath}/instructor/${item.image}`} alt='images' />
        </div>
        <p>{truncateText(item.description,200)}</p>
        <div className='project-status align-items-center gap-1 mt-4'>
          <div className='d-flex mb-2 gap-1'>
            <h5 className='f-w-500 mb-2'>Certifications</h5> 
          </div>
          <div className='d-flex mb-2 gap-1'>
            <div className="font-light">{item.certifications}</div>
          </div>
        </div>
        <div className='project-status align-items-center gap-1 mt-4'>
          <div className='d-flex mb-2 gap-1'>       
            <div><h5 className='f-w-500 mb-2'>Specialties</h5></div>
          </div>
          <div className='d-flex mb-2 gap-1'>     
            <div className="font-light">{item.specialties}</div>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default InstructorCommon