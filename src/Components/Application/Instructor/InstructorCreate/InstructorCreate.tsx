'use client'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CreateNewInstructorForm from './CreateNewInstructorForm'
import { Instructor, InstructorCreates } from '@/Constant'
import Breadcrumbs from '@/CommonComponent/Breadcrumbs/Breadcrumbs'

const InstructorCreateContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={InstructorCreates} parent={Instructor} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CreateNewInstructorForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InstructorCreateContainer