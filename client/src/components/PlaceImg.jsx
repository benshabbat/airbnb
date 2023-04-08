import React from 'react'
import Image from './Image';

const PlaceImg = ({place,className=null,index=0}) => {
    if (!place?.photos?.length) {
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