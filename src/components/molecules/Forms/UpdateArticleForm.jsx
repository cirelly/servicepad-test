import React from 'react'
import CommonInput from '../../atoms/inputs/CommonInput'
import CardIconFrame from '../Cards/CardIconFrame'
import { Field, Form, Formik } from 'formik';
import Button from '../../atoms/buttons/Button';
import CardWrapper from '../../atoms/cards/CardWrapper';
import TextAreaInput from '../../atoms/inputs/TextAreaInput';
import addArticleValidator from '../../../utils/addArticleValidator';
import { useGetArticles, useUpdateArticle } from '../../../hooks/useArticles';

const UpdateArticleForm = ({article, handleOpenModal}) => {
    const {mutateAsync} = useUpdateArticle();
    const {refetch} = useGetArticles()
  return (
    <div className='c-updateForm'>
        <CardWrapper Form={true}>
        <Formik
          initialValues={{ author: article?.author, blogTitle: article?.title,  content: article?.content }}
          validationSchema={addArticleValidator}
          onSubmit={async (values, actions) => {
            try {
              const data = {
                "id": article?.id,
                "author": values.author,
                "content": values.content,
                "title": values.blogTitle
              }
              console.log(data)
              await mutateAsync(data);
              refetch();
              handleOpenModal();
              actions.resetForm({
                values: {
                  blogTitle: '',
                  author: '',
                  content: '',
                }});
            } catch (error) {
              console.log(error);
            }
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
                  <Field value={props.values.author} name="author" placeholder="Author" component={CommonInput} />
                  {errors.author && touched.author ? <div className='c-updateForm__error'>{errors.author}</div> : null}
                  <Field value={props.values.blogTitle} name="blogTitle" placeholder="Blog Title" component={CommonInput} />
                  {errors.blogTitle && touched.blogTitle ? <div className='c-updateForm__error'>{errors.blogTitle}</div> : null}
                  <Field value={props.values.content} name="content" placeholder="Content" component={TextAreaInput} />
                  {errors.content && touched.content ? <div className='c-updateForm__error'>{errors.content}</div> : null}
                </div>
              )}
            </Field>
            {/* <Field name="lastName" placeholder="Doe" component={MyInput} /> */}
            {/* <Button type="submit" disabled={isLoading ? true : false}>Save</Button> */}
            <Button textButton type="submit">
                Yes, update
              </Button>
              <Button
                textButton
                deleteColor
                onClick={handleOpenModal}
              >
                Cancel
              </Button>
          </Form>
        )}
      </Formik>
    </CardWrapper>
    </div>
  )
}

export default UpdateArticleForm;