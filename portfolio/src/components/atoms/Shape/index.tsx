import React from 'react'

export default function Shapes({
  shape,
  fill = '',
}: {
  shape: string
  fill?: string
}) {
  if (shape == 'hero') {
    return (
      <svg
        width="1655"
        height="1160"
        viewBox="0 0 1655 1160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7" filter="url(#filter0_f_498_6814)">
          <path
            d="M706.708 529.739C706.708 692.255 831.944 824 986.431 824C1140.92 824 1528.63 569.499 1266.16 529.739C1266.16 367.223 1449.51 155.957 986.431 235.477C834.171 261.623 172.946 -34.0277 706.708 529.739Z"
            fill="#985EF6"
          />
        </g>
        <g opacity="0.9" filter="url(#filter1_f_498_6814)">
          <path
            d="M318.919 608C234.919 426.8 450.919 251.833 569.419 187C673.418 267.333 854.518 439.9 746.918 487.5C639.318 535.1 650.085 755.667 668.918 860C587.252 851.5 402.919 789.2 318.919 608Z"
            fill="#61DAFB"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_498_6814"
            x="202"
            y="-119"
            width="1453"
            height="1243"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_498_6814"
            />
          </filter>
          <filter
            id="filter1_f_498_6814"
            x="0"
            y="-113"
            width="1079.92"
            height="1273"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_498_6814"
            />
          </filter>
        </defs>
      </svg>
    )
  }

  if (shape === '3-stripes') {
    return (
      <svg
        width="626"
        height="609"
        viewBox="0 0 626 609"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_f_488_6426)">
          <path
            d="M289.132 100.322C217.279 169.011 79.5232 340.414 103.321 476.517C127.119 612.619 237.111 282.429 289.132 100.322Z"
            fill="#61DAFB"
          />
        </g>
        <g opacity="0.4" filter="url(#filter1_f_488_6426)">
          <path
            d="M407.151 100.322C335.298 169.011 197.543 340.414 221.341 476.517C245.139 612.619 355.13 282.429 407.151 100.322Z"
            fill="#985EF6"
          />
        </g>
        <g opacity="0.4" filter="url(#filter2_f_488_6426)">
          <path
            d="M525.151 100.322C453.298 169.011 315.543 340.414 339.341 476.517C363.139 612.619 473.13 282.429 525.151 100.322Z"
            fill="#2871FF"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_488_6426"
            x="0.59375"
            y="0.320312"
            width="388.537"
            height="608.246"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_488_6426"
            />
          </filter>
          <filter
            id="filter1_f_488_6426"
            x="118.613"
            y="0.320312"
            width="388.537"
            height="608.246"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_488_6426"
            />
          </filter>
          <filter
            id="filter2_f_488_6426"
            x="236.613"
            y="0.320312"
            width="388.537"
            height="608.246"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_488_6426"
            />
          </filter>
        </defs>
      </svg>
    )
  }

  if (shape === 'line') {
    return (
      <svg
        width="639"
        height="301"
        viewBox="0 0 639 301"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_f_473_5529)">
          <path
            d="M538.895 130.211C443.482 102.33 226.164 68.7315 120.195 157.393C14.2258 246.054 355.174 176.214 538.895 130.211Z"
            fill={fill || '#5B23FC'}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_473_5529"
            x="0.199219"
            y="0.0664062"
            width="638.695"
            height="299.988"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_473_5529"
            />
          </filter>
        </defs>
      </svg>
    )
  }

  return <></>
}
