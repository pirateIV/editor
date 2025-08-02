export default function Logo () {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="none">
         <g filter="url(#filter0_iii_3051_46851)">
            <g clip-path="url(#clip0_3051_46851)">
               <rect width="48" height="48" rx="12" fill="#22262F"/>
               <rect width="48" height="48" fill="url(#paint0_linear_3051_46851)"/>
               <g filter="url(#filter1_d_3051_46851)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 24C17.4411 24 24 17.4411 24 6C24 17.4411 30.5589 24 42 24C30.5589 24 24 30.5589 24 42C24 30.5589 17.4411 24 6 24Z" fill="url(#paint1_linear_3051_46851)"/>
               </g>
            </g>
            <rect x="1" y="1" width="46" height="46" rx="11" stroke="url(#paint2_linear_3051_46851)" stroke-width="2"/>
         </g>
         <defs>
            <filter id="filter0_iii_3051_46851" x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
               <feFlood flood-opacity="0" result="BackgroundImageFix"/>
               <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
               <feOffset dy="-3"/>
               <feGaussianBlur stdDeviation="1.5"/>
               <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
               <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
               <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46851"/>
               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
               <feOffset dy="3"/>
               <feGaussianBlur stdDeviation="1.5"/>
               <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
               <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
               <feBlend mode="normal" in2="effect1_innerShadow_3051_46851" result="effect2_innerShadow_3051_46851"/>
               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
               <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46851"/>
               <feOffset/>
               <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
               <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
               <feBlend mode="normal" in2="effect2_innerShadow_3051_46851" result="effect3_innerShadow_3051_46851"/>
            </filter>
            <filter id="filter1_d_3051_46851" x="3" y="5.25" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
               <feFlood flood-opacity="0" result="BackgroundImageFix"/>
               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
               <feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46851"/>
               <feOffset dy="2.25"/>
               <feGaussianBlur stdDeviation="2.25"/>
               <feComposite in2="hardAlpha" operator="out"/>
               <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"/>
               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46851"/>
               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46851" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_3051_46851" x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
               <stop stop-color="white" stop-opacity="0"/>
               <stop offset="1" stop-color="white" stop-opacity="0.12"/>
            </linearGradient>
            <linearGradient id="paint1_linear_3051_46851" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
               <stop stop-color="white" stop-opacity="0.8"/>
               <stop offset="1" stop-color="white" stop-opacity="0.5"/>
            </linearGradient>
            <linearGradient id="paint2_linear_3051_46851" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
               <stop stop-color="white" stop-opacity="0.12"/>
               <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <clipPath id="clip0_3051_46851">
               <rect width="48" height="48" rx="12" fill="white"/>
            </clipPath>
         </defs>
      </svg>
  )
}
