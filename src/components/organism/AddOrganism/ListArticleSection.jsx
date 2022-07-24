import React from 'react'
import Table from '../../molecules/tables/Table'

const ListArticleSection = ({data}) => {
  return (
    <div className='c-addArticle__container'>
        <div id='title'>
            <h1>
                Previous Articles
            </h1>
            <p>
                Review and edit previous blog posts published on to the homepage. 
            </p>
        </div>
        <Table data={data} rowsPerPage={6} />
    </div>
  )
}

export default ListArticleSection