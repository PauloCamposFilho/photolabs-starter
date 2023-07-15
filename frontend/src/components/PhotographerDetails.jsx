import React from 'react';

const PhotographerDetails = (props) => {
  return (
    <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={ props.photographer.profile } />
        <div className='photo-list__user-info'>
          <span style={{ display: "block" }}>{ props.photographer.name }</span>          
          <span className='photo-list__user-location'>{ `${props.location.city}, ${props.location.country}` }</span>
        </div>
      </div>
  );
}
export default PhotographerDetails;