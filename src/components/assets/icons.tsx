import React from "react";
export type Icon = {
  fill?: string;
  width?: number;
  height?: number;
};
const defaultSize = 30;

export const Facebook: React.FunctionComponent<Icon> = ({
  fill,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width || defaultSize}px`}
      height={`${height || defaultSize}px`}
      viewBox="0 0 60 60"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <path
            fill={fill || "#000"}
            d="M30 60c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30z"
          ></path>
          <path
            fill="#FFF"
            d="M25.462 47.314V30h-3.519v-5.74h3.52v-3.47c0-4.682 1.399-8.058 6.525-8.058h6.098v5.727h-4.294c-2.15 0-2.64 1.43-2.64 2.926v2.875h6.617L36.866 30h-5.714v17.315h-5.69z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const Twitter: React.FunctionComponent<Icon> = ({
  fill,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width || defaultSize}px`}
      height={`${height || defaultSize}px`}
      viewBox="0 0 60 60"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <path
            fill={fill || "#000"}
            d="M30 60c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30z"
          ></path>
          <path
            fill="#FFF"
            d="M41.052 18.437c-1.209-1.375-2.931-2.25-4.838-2.282-3.66-.061-6.628 3.032-6.628 6.908 0 .55.058 1.087.171 1.602-5.508-.358-10.393-3.226-13.662-7.55a7.332 7.332 0 00-.897 3.544c0 2.456 1.17 4.636 2.949 5.922a6.336 6.336 0 01-3.003-.916v.089c0 3.43 2.285 6.307 5.317 6.977a6.242 6.242 0 01-2.993.1c.843 2.813 3.29 4.866 6.191 4.934-2.268 1.883-5.126 3.004-8.232 2.998a12.627 12.627 0 01-1.58-.102c2.933 2.012 6.417 3.184 10.16 3.185 12.192.003 18.859-10.606 18.859-19.81 0-.301-.007-.601-.02-.9a13.634 13.634 0 003.308-3.557 12.65 12.65 0 01-3.807 1.041 6.797 6.797 0 002.914-3.806c-1.28.776-2.699 1.334-4.209 1.623z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const LinkedIn: React.FunctionComponent<Icon> = ({
  fill,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "#000"}
      width={`${width || defaultSize}px`}
      height={`${height || defaultSize}px`}
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <circle cx="255.999" cy="256" r="251.408"></circle>
      <g fill="#FFF" transform="matrix(1.5538 0 0 1.5538 -140.873 -132.646)">
        <path d="M175.124 222.617H210.44799999999998V328.871H175.124z"></path>
        <path d="M193.025 171.382c-12.086 0-19.982 7.946-19.982 18.36 0 10.195 7.656 18.36 19.514 18.36h.228c12.317 0 19.984-8.165 19.984-18.36-.228-10.414-7.666-18.36-19.744-18.36z"></path>
        <path d="M297.138 220.118c-18.737 0-27.13 10.305-31.83 17.542v-15.044h-35.315c.468 9.967 0 106.254 0 106.254h35.315v-59.339c0-3.176.228-6.352 1.165-8.622 2.549-6.343 8.363-12.914 18.12-12.914 12.774 0 17.891 9.747 17.891 24.025v56.85h35.317v-60.932c0-32.637-17.426-47.82-40.663-47.82z"></path>
      </g>
    </svg>
  );
};
