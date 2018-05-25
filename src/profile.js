import React from 'react';
import './profile.css';
import PropTypes from 'prop-types';

function Profile({first, last, profile_image, birth, email}){
  return (
    <div className="profile">
      <div className="columns">
        <ProfileImage profile_image={profile_image} alt={first} />
      </div>
      <div className="columns">
        <div>Name: {first} {last}</div>
        <div>{email}</div>
        <div>Birth: {birth}</div>
      </div>
    </div>
  )
}

function ProfileImage({profile_image, alt}){
  return (
    <img src={profile_image} alt={alt} title={alt} className="profile_image" />
  )
}

Profile.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  profile_image: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

ProfileImage.propTypes = {
  profile_image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Profile;
