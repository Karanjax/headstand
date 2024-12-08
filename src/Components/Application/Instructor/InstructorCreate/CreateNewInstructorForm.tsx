import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { Form, Formik } from 'formik';
import TitleAndClientSection from './TitleAndClientSection';
import { instructorInitialValue, instructorValidation } from '@/Data/Application/InstructorList/InstructorList';
import InstructorSection from './InstructorSection';
import DateSection from './DateSection';
import DescriptionSection from './DescriptionSection';
import UploadInstructorFile from './UploadInstructorFile';
import ButtonSection from './ButtonSection';
import { InstructorInitialValue } from '@/Type/Application/InstructorList/InstructorList';
import { setCreatedData } from '@/Redux/Reducers/InstructorSlice';
import { useRouter } from 'next/navigation';

const CreateNewInstructorForm = () => {
    const router = useRouter(); 
    const { createdFormData } = useAppSelector((state) => state.project);
    const dispatch = useAppDispatch();
    const randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  
    const instructorSubmit = (values: InstructorInitialValue) => {
      const submittedData = {
        id: randomValue.toString(),
        title: values.title,
        image: "3.jpg",
        description: values.description,
        name: values.name,
      };
      dispatch(setCreatedData([...createdFormData, submittedData]));
      router.push(`/instructor/instructorlist`);
    };
    return (
      <Formik initialValues={instructorInitialValue} validationSchema={instructorValidation} onSubmit={instructorSubmit}>
        {() => (
          <Form className="theme-form">
            <TitleAndClientSection />
            <InstructorSection />
            <DateSection />
            <DescriptionSection />
            <UploadInstructorFile/>
            <ButtonSection />
          </Form>
        )}
      </Formik>
    )
}

export default CreateNewInstructorForm