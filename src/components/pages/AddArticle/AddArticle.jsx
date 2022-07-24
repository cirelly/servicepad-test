import React from 'react'
import { useGetArticles } from '../../../hooks/useArticles';
import AddArticleSection from '../../organism/AddOrganism/AddArticleSection';
import ListArticleSection from '../../organism/AddOrganism/ListArticleSection';
import ThirdSection from '../../organism/HomeOrganism/ThirdSection'

const AddArticle = () => {
    const { data } = useGetArticles();
  return (
    <div className='c-addArticle'>
        <AddArticleSection />
        <ListArticleSection data={data} />
        <ThirdSection data={data}/>
    </div>
  )
}

export default AddArticle;