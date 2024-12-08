import { Badge, Col, Progress } from 'reactstrap'
import { Done, ImagePath } from '@/Constant'
//import InstructorDetails from './InstructorDetails'
//import InstructorCustomers from './InstructorCustomers'
import Image from 'next/image'
import { CommonInstructorInterFace } from '@/Type/Application/InstructorList/InstructorList'

const InstructorCommon: React.FC<CommonInstructorInterFace> = ({ item }) => {
  console.log(item);
  return (
    <Col xxl="4" md="6" >
      <div className={`project-box font-dark`}>
        <h5 className='f-w-500 mb-2'>{item.name}</h5>
        <p className="font-light">{item.title}</p>
        <div className='d-flex mb-2'>
          <Image width={160} height={160} className='img-160 me-1' src={`${ImagePath}/instructor/${item.image}`} alt='images' />
        </div>
        <p>{item.description}</p>
        <div className='project-status align-items-center gap-1 mt-4'>
          <div className='d-flex mb-2 gap-1'>
            <p className="mb-0">{item.progress}% </p>
            <span>{Done}</span>
          </div>
          <Progress animated color={item.progress === 100 ? 'success' : 'danger'} value={item.progress} style={{ height: '5px' }} />
        </div>
      </div>
    </Col>
  )
}

export default InstructorCommon