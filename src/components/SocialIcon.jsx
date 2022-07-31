import React from 'react';

function SocialIcon({ iconDrawPath: iconDraw, url = '#' }) {
  return (
    <a
      href={url}
      className="rounded-full bg-gray-700 w-12 h-12 inline-flex justify-center items-center hover:bg-orange-600"
      target="_blank"
    >
      <svg className="" width={25} fill="white" viewBox={iconDraw.viewBox}>
        <path className="" d={iconDraw.path}></path>
      </svg>
    </a>
  );
}

export default SocialIcon;
