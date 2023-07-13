import React from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {  
  /* Insert React */
  return (
    <div className='photo-list__item'>
      <PhotoFavButton />
      <img className='photo-list__image' src={ props.imageSource.regular } />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={ props.photographer.profile } />
        <div className='photo-list__user-info'>
          <span style={{ display: "block" }}>{ props.photographer.name }</span>
          {/* <br /> */}
          <span className='photo-list__user-location'>{ `${props.location.city}, ${props.location.country}` }</span>
        </div>
      </div>
    </div>
  );
}

// PhotoListItem.defaultProps = {
//   "id": "1",
//   "location": {
//     "city": "Montreal",
//     "country": "Canada"
//   },
//   "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   "username": "Joe Example",
//   "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
// }

export default PhotoListItem