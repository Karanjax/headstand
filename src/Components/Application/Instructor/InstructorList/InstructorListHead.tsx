import { Card, Col, Nav, NavItem, NavLink, Row } from 'reactstrap'
import { All, Doing, Done, Href } from '@/Constant'
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks'
import CreateNewInstructor from './CreateNewInstructor'
import SvgIcon from '@/CommonComponent/SVG/SvgIcon'
import { setActiveTab } from '@/Redux/Reducers/InstructorSlice'

const InstructorListHead = () => {
  const {activeTab} = useAppSelector((state)=>state.instructor)
  const dispatch = useAppDispatch()
  return (
    <Card>
      <Row>
        <Col md="6">
          <Nav tabs className="border-tab">
            <NavItem>
              <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => dispatch(setActiveTab("1"))} href={Href}>
                <SvgIcon className='feather' iconId='target' /> {All}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => dispatch(setActiveTab("2"))} href={Href}>
                <SvgIcon className='feather' iconId='info' /> {Doing}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => dispatch(setActiveTab("3"))} href={Href}> 
                <SvgIcon className='feather' iconId='check-circle' /> {Done}
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <CreateNewInstructor />
      </Row>
    </Card>
  )
}

export default InstructorListHead