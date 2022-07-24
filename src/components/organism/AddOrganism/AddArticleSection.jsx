import React from 'react'
import AddArticleForm from '../../molecules/Forms/AddArticleForm';

const AddArticleSection = () => {
  return (
    <div className='c-addArticle__container'>
        <div id='title'>
            <h1>
                Add New Blog Article
            </h1>
            <p>
                Publish a new blog article to feature in the Easybank homepage.
            </p>
        </div>
        <AddArticleForm />
    </div>
  )
}

export default AddArticleSection;