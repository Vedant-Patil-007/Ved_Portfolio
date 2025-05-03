import React, { useEffect } from "react";
import anime from "animejs";

const IconLoader = () => {
  useEffect(() => {
    setTimeout(() => {
      anime({
        targets: "#logo path", // Target the SVG path
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 2000,
        direction: "alternate",
        loop: true,
      });
    }, 100); // Delay animation by 100ms
  }, []);

  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Loader Logo</title>
      <g>
        <g id="B" transform="translate(11.000000, 5.000000)">
          <path
            d="M30 30 L40 60 L50 30 L45 30 L40 50 L35 30 Z"
            fill="currentColor"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          d="M 50, 5
            L 11, 27
            L 11, 72
            L 50, 95
            L 89, 73
            L 89, 28 z"
        />
      </g>
    </svg>
  );
};

export default IconLoader;
