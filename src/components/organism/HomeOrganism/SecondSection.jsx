import React from 'react'
import OnlineIcon from '../../atoms/icon/OnlineIcon';
import CardIconFrame from '../../molecules/Cards/CardIconFrame';

const SecondSection = () => {
  return (
    <div className='c-home__section2'>
      <div id='title'>
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank acount into your financial hub. <br/> Control your finances like never before.</p>
      </div>
      <div id='content'>
        <CardIconFrame Icon={OnlineIcon}>
          <h3>
            Online Banking
          </h3>
          <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </CardIconFrame>
        <CardIconFrame Icon={OnlineIcon}>
          <h3>
            Simple Budgeting
          </h3>
          <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
        </CardIconFrame>
        <CardIconFrame Icon={OnlineIcon}>
          <h3>
            Fast Onboarding
          </h3>
          <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </CardIconFrame>
        <CardIconFrame Icon={OnlineIcon}>
          <h3>
            Open API
          </h3>
          <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. </p>
        </CardIconFrame>
      </div>
    </div>
  )
}

export default SecondSection;