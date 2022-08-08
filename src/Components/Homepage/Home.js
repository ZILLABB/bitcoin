import React from 'react'
import FirstSection from './FirstSection';
import Bar  from './Bar';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';

const Home = () => {
  return (
        <div>
          <FirstSection/>
          <Bar />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
        </div>
  )
}

export default Home