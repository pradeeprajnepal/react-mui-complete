import { React } from 'react';
import { Grid } from '@mui/material';
import UseForm from '../../Components/UseForm';
import { Form } from '../../Components/UseForm';
import { Controls } from '../../Components/Controls/Controls';
import * as studentData from '../../Datas/studentData';
import { useEffect } from 'react';


const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
]

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  address: '',
  gender: 'male',
  courseId: '',
  admissionDate: new Date(),
  isPermanent: false
}

export default function StudentForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    console.log("Errors", errors)

    console.log("validate value", fieldValues)
    let temp = { ...errors }
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers."
    if ('courseId' in fieldValues)
      temp.courseId = fieldValues.courseId.length !== 0 ? "" : "This field is required."
    setErrors({
      ...temp
    })

    if (fieldValues === values)
      return Object.values(temp).every(x => x === "")
  }

  const { values,
    setValues,
    errors, setErrors,
    handleInputChange,
    resetForm } = UseForm(initialFValues, true, validate)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validate())
    console.log('Values received', values)

    if (validate()) {

      addOrEdit(values, resetForm);
    } else {
      console.log(errors)
    }
  }

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit
      })
  }, [recordForEdit])

  return (

    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}

          />
          <Controls.Input
            name="address"
            label="Address"
            value={values.address}
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
            error={errors.courseId}

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
              onClick={resetForm}
            />
          </div>

        </Grid>
      </Grid>
    </Form>
  )
}