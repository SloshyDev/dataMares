import * as React from 'react';

const InfoIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 18 18">
    <g clipPath="url(#clip0_145_6)">
      <path
        className="dark:fill-primary fill-[#265852] transition-colors duration-200 group-hover:fill-[#1e7571]"
        d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18"
      ></path>
      <path
        fill="#fff"
        d="M7.805 14.363 9.04 8.04c.002-.011.017-.011.02 0l1.137 6.323a.01.01 0 0 1-.01.012H7.815a.01.01 0 0 1-.01-.012"
      ></path>
      <path
        fill="#fff"
        d="M8.577 7.847c.165-.424.79-.42.948.006l.027.098 1.137 6.324a.51.51 0 0 1-.502.6H7.814a.51.51 0 0 1-.5-.607L8.55 7.943zm-.167 6.028h1.191l-.572-3.177z"
      ></path>
      <ellipse cx="9.019" cy="5.336" fill="#fff" rx="1.179" ry="1.241"></ellipse>
    </g>
    <defs>
      <clipPath id="clip0_145_6">
        <path fill="#fff" d="M0 0h18v18H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default InfoIcon;
