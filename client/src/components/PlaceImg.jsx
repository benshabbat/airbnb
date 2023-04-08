import React from 'react'
import Image from './Image';

const PlaceImg = ({place,className,index}) => {
    if (!place.photos?.length) {
        return '';
      }
      if (!className) {
        className = 'object-cover';
      }
  return (
    <Image className={className} src={place.photos[index]} alt=""/>
  )
}

export default PlaceImg