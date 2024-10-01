import React from 'react';
import Main from '../components/layout/Main';
import LeftSection from '../components/home/LeftSection';

const Home = () => {

  return (
    <Main>
      <div id='home'>
        <LeftSection />
        <div className='home__right' style={{flex: "1"}}>
          hello
        </div>
      </div>
    </Main>
  );
};

export default Home;
