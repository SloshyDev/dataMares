import * as React from "react";

const FacebookIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
        viewBox="0 0 18 18"
    >
        <path
            fill="#265852"
            d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18"
            className="fill-[#265852] group-hover:fill-[#1e7571] transition-colors duration-200 dark:fill-primary"
        ></path>
        <path
            fill="#fff"
            d="M7.54 5.918v1.54H6.426v1.884H7.54v5.167h2.283v-5.17h1.53s.145-.903.213-1.889H9.83V6.164c0-.193.25-.452.495-.452h1.244V3.75h-1.69c-2.396.002-2.34 1.887-2.34 2.168"
        ></path>
    </svg>
);

export default FacebookIcon;
