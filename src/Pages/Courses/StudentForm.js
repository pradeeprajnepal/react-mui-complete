import {React} from 'react';
import {Grid} from '@mui/material';
import UseForm from '../../Components/UseForm';
import { Form } from '../../Components/UseForm';
import { Controls } from '../../Components/Controls/Controls';
import * as studentData from '../../Datas/studentData';


const genderItems=[
  {id:'male',title:'Male'},
  {id:'female',title:'Female'},
  {id:'other',title:'Other'},
]

const initialFValues={
  id:0,
  fullName:'',
  email:'',
  mobile:'',
  address:'',
  gender:'male',
  courseId:'',
  admissionDate:new Date(),
  isPermanent:false
}

export default function StudentForm() {

  const {values, setValues, handleInputChange}=UseForm(initialFValues)





  return (
    
      <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
          name="fullName"
          label="Full Name"
          value={values.fullName}
          onChange={handleInputChange}
          />
          <Controls.Input
          name="email"
          label="Email"
          value={values.email}
          onChange={handleInputChange}
          />
          <Controls.Input
          name="mobile"
          label="Mobile"
          value={values.email}
          onChange={handleInputChange}
          />          
          <Controls.Input
          name="address"
          label="Address"
          value={values.email}
          onChange={handleInputChange}
          />
          
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
          name="gender"
          label="Gender"
          value={values.gender}
          onChange={handleInputChange}
          items={genderItems}
          />
          <Controls.Select
          name="courseId"
          label="Course"
          value={values.courseId}
          onChange={handleInputChange}
          options={studentData.getCourseCollection()}
          />
          <Controls.DatePicker
                    name="isPermanent"
                    label="Admission Date"
                    value={values.isPermanent}
                    onChange={handleInputChange}
          />
          <Controls.Checkbox
          name="admissionDate"
          label="Permanent Student"
          value={values.admissionDate}
          onChange={handleInputChange}
          />
          <div>
            <Controls.Button 
            type="submit"
            text="Submit"
            />
            <Controls.Button 
            text="Reset"
            color="secondary"
            />
          </div>

        </Grid>
      </Grid>
    </Form>
  )
}
