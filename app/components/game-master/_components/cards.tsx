export default function Card({ number }: { number: number }) {
  return (
    <div>
      <svg
        width="73"
        height="93"
        viewBox="0 0 73 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path-1-outside-1_10039_51208"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="73"
          height="93"
          fill="black"
        >
          <rect fill="white" width="73" height="93" />
          <path d="M3 4C3 1.79086 4.79086 0 7 0H73V86C73 88.2091 71.2091 90 69 90H3V4Z" />
        </mask>
        <path
          d="M3 4C3 1.79086 4.79086 0 7 0H73V86C73 88.2091 71.2091 90 69 90H3V4Z"
          fill="#ACE8FF"
        />
        <path
          d="M3 0H73H3ZM73 86C73 89.866 69.866 93 66 93H0L6 87H69C71.2091 87 73 86.5523 73 86ZM0 93V7C0 3.13401 3.13401 0 7 0C6.44772 0 6 1.79086 6 4V87L0 93ZM73 0V90V0Z"
          fill="#00A8E8"
          mask="url(#path-1-outside-1_10039_51208)"
        />
        {/* <path
          d="M28.3651 61.5V34.908L22.8451 36.204V31.5L30.9571 27.9H34.7491V61.5H28.3651ZM44.912 61.5V34.908L39.392 36.204V31.5L47.504 27.9H51.296V61.5H44.912Z"
          fill="#00222E"
        /> */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="45"
          fontWeight="bold"
          fill="#00222E"
          fontFamily="Arial, sans-serif"
        >
          {number}
        </text>
      </svg>
    </div>
  );
}
