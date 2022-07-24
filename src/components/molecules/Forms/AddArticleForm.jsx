import React from 'react'
import CommonInput from '../../atoms/inputs/CommonInput'
import CardIconFrame from '../Cards/CardIconFrame'
import { Field, Form, Formik } from 'formik';
import Button from '../../atoms/buttons/Button';
import CardWrapper from '../../atoms/cards/CardWrapper';
import TextAreaInput from '../../atoms/inputs/TextAreaInput';
const AddArticleForm = () => {
  return (
    <div className='c-addForm'>
        <CardWrapper Form={true}>
        <Formik
       initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
       onSubmit={(values, actions) => {

       }}
     >
        {(props) => (
         <Form>
           <Field name="lastName">
             {({
               field, // { name, value, onChange, onBlur }
               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
             }) => (
               <div>
                 <Field  name="author" placeholder="Author" component={CommonInput} />
                 <Field  name="blog-title" placeholder="Blog Title" component={CommonInput} />
                 <Field  name="content" placeholder="Content" component={TextAreaInput} />
                 {meta.touched && meta.error && (
                   <div className="error">{meta.error}</div>
                 )}
               </div>
             )}
           </Field>
           {/* <Field name="lastName" placeholder="Doe" component={MyInput} /> */}
           <Button type="submit">Save</Button>
         </Form>
       )}
     </Formik>
        </CardWrapper>
    </div>
  )
}

export default AddArticleForm