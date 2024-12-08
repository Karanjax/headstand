'use client'
import { Col, Container, Row } from 'reactstrap'
import InstructorListHead from './InstructorListHead'
import InstructorListTabContent from './InstructorListTabContent'
import { Instructor, InstructorListHeading } from '@/Constant'
import Breadcrumbs from '@/CommonComponent/Breadcrumbs/Breadcrumbs'

const InstructorListContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={InstructorListHeading} parent={Instructor} />
      <Container fluid>
        <Row className="project-cards">
          <Col md="12" className="project-list">
            <InstructorListHead />
          </Col>
          <Col sm="12">
            <InstructorListTabContent />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InstructorListContainer