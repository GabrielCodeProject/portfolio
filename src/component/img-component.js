import React from 'react'

const ImageCustomSizeComponent = ({ imgPath, imgAlt, styleClass }) => (
  <img class={styleClass} src={imgPath} alt={imgAlt} />
)

export default ImageCustomSizeComponent
