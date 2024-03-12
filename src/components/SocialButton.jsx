import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const SocialButton = ({ iconos = [faFacebook,faGithub, faLinkedinIn, ] }) => (
    <div >
      {iconos.map((icon, index) => (
        <FontAwesomeIcon className='socialMedias'
          key={index}
          icon={icon}
        />
      ))}
    </div>
);
 
export default SocialButton;
