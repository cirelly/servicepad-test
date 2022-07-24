import React from 'react'
import Button from '../../atoms/buttons/Button';
import phoneImage from '../../../assets/phone-image.png'
const FirstSection = () => {
  return (
    <div className='c-home__section1'>
        <div id='left-section'>
            <h1>
                Next generation digital banking
            </h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving. budgeting, nvesting, and much more.</p>
            <Button>Request Invite</Button>
        </div>
        <div id='right-section'>
                {/* <img src={phoneImage} alt='all' /> */}
                <div>
                <img src={phoneImage} />
                </div>  
        </div>
    </div>
  )
}

export default FirstSection;