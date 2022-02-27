import React from 'react'

const CompetanceComponent = ({
  imgPath,
  title,
  description,
  ...strongWord
}) => (
  <div id='competance1-id' class='detail-competance '>
    <img class='img-competance' src={imgPath} alt='' srcset='' />
    <h3 class='h3-big' className='light'>
      {title}
    </h3>
    <p class='p-big'>{description}</p>
  </div>
)

export default CompetanceComponent
