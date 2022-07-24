import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../atoms/buttons/Button';
import CardIconFrame from '../../molecules/Cards/CardIconFrame';

const ThirdSection = ({data}) => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    return (
    <div className='c-home__section3'>
      <div id='title'>
        <h1>
        Latest Articles
        </h1>
        {location.pathname === '/' && <Button onClick={() => navigate('/add-article')}>+ Add New Article</Button>}
      </div>
      <div id='content'>
        {data && data?.slice(0,4).map(article => (
          <>
            <CardIconFrame key={article.id} Image={article.image_url} >
              <h5>by {article.author}</h5>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </CardIconFrame>
          </>
        )) }
      </div>
    </div>
  )
}

export default ThirdSection;