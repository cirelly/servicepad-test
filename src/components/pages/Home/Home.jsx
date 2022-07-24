import React from 'react'
import { useGetArticles } from '../../../hooks/useArticles';
import FirstSection from '../../organism/HomeOrganism/FirstSection';
import SecondSection from '../../organism/HomeOrganism/SecondSection';
import ThirdSection from '../../organism/HomeOrganism/ThirdSection';

const Home = () => {

  const { data } = useGetArticles();

  return (
    <div className='c-home'>
        <div className='c-home__container'>
            <FirstSection />
            <SecondSection />
            <ThirdSection data={data} />
        </div>
    </div>
  )
}

export default Home;