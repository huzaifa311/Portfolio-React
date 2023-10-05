// UserCard.js
import React, { useState } from 'react';
import styles from '../Custom.module.css'

const ProfileCard = ({ name, imageSrc, email, phone, DOB, Nationality }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`w-[300px] overflow-scroll p-2 rounded-lg ${styles.boxShadow} ${styles.media} flex justify-center ml-[2%] mr-[5%] mt-[90px] mb-[30px] transition-transform transform h-[100%] sm:ml-[30%] sm:mr-[30%] lg:ml-[40%] lg:mr-[40%] ${isHovered ? 'rounded-[0px]' : 'rounded-full'
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="">
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt={name}
            className={`rounded-full h-[150px] w-[150px] ${isHovered ? 'rounded-[1px]' : 'rounded-2xl'
              }`}
          />
        </div>
        {isHovered && (
          <div className="text-center flex flex-col">

            <p className="text-lg font-semibold mb-6">{name}</p>

            <div className='flex'>
              <h4 className='text-lg font-medium'>Email:&#160;&#160;</h4>
              <p className="text-gray-600 mb-2">{email}</p>
            </div>

            <div className='flex'>
              <h4 className='text-lg font-medium'>Phone:&#160;&#160;</h4>
              <p className="text-gray-600 mb-2"> {phone}</p>
            </div>

            <div className='flex'>
            <h4 className='text-lg font-medium'>Birth Date:&#160;&#160;</h4>
              <p className="text-gray-600 mb-2">{DOB}</p>
            </div>

            <div className='flex'>
              <h4 className='text-lg font-medium'>Nationality:&#160;&#160;</h4>
            <p className="text-gray-600 mb-2">{Nationality}</p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
