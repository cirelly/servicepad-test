import React from 'react'
import CardWrapper from '../../atoms/cards/CardWrapper'

const CardIconFrame = ({Icon, Image, Form, children}) => {
  return (
    <CardWrapper>
        <div className={`c-card ${Image ? 'c-card--image' : ''} ${Form ? 'c-card--form' : ''}`}>
            {Icon || Image ?<div>
               {Icon ? <Icon /> : <img src={Image} />}
            </div> : null}
            <div id='children'>
                {children}
            </div>
        </div>
    </CardWrapper>
  )
}

export default CardIconFrame