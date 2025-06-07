// prettier-ignore
export const Icons = {
   // Layout icons
   VerticalSplit: (props: React.SVGProps<SVGSVGElement>) => (
      <svg width="42" height="36" viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-sky-100 stroke-sky-500 dark:fill-sky-400/50 dark:stroke-sky-400" {...props}><path d="M12 3h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9" fill="none"></path><path d="M3 17V5a2 2 0 0 1 2-2h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2Z"></path></svg>
   ),
   HorizonalSplit: (props: React.SVGProps<SVGSVGElement>) => (
      <svg width="42" height="36" viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-500/70 fill-gray-100 dark:fill-gray-400/20 dark:stroke-gray-500 dark:hover:fill-gray-400/30 dark:hover:stroke-gray-400 hover:fill-gray-200 hover:stroke-gray-400" {...props}><path d="M23 11V3H3v8h20Z" strokeWidth="0"></path><path d="M23 17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM22 11H4" fill="none"></path></svg>
   ),
   PreviewOnly: (props: React.SVGProps<SVGSVGElement>) => (
      <svg width="42" height="36" viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-500/70 fill-gray-100 dark:fill-gray-400/20 dark:stroke-gray-500 dark:hover:fill-gray-400/30 dark:hover:stroke-gray-400 hover:fill-gray-200 hover:stroke-gray-400" {...props}><path d="M23 17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" fill="none"></path></svg>
   ),
   ResponsiveDesign: (props: React.SVGProps<SVGSVGElement>) => (
      <svg width="42" height="36" viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-500/70 fill-gray-100 dark:fill-gray-400/20 dark:stroke-gray-500 dark:hover:fill-gray-400/30 dark:hover:stroke-gray-400 hover:fill-gray-200 hover:stroke-gray-400" {...props}><path d="M15 19h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a1 1 0 0 0-1 1" fill="none"></path><path d="M12 17V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2Z"></path></svg>
   ),
   // Programming Language icons
   HTML: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 128 128" {...props}><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path></svg>

   ),
   // CSS: (props: React.SVGProps<SVGSVGElement>) => (
   //    <svg viewBox="0 0 128 128" {...props}><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path></svg>    
   // ),
   CSS: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 128 128" {...props}>
  <path fill="#1572B6" d="M19.067 113.876L8.785 1.661h110.43l-10.282 112.198-45.044 12.48z"></path>
  <path fill="#33A9DC" d="M64 116.8l36.417-10.086 8.568-95.878H64z"></path>
  <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path>
  <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
</svg>
   ),
   // JavaScript: (props: React.SVGProps<SVGSVGElement>) => (
   //    <svg viewBox="0 0 128 128" {...props}><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg>    
   // ),
   JavaScript: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" width="800px" height="800px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" {...props}><g id="5151e0c8492e5103c096af88a51e7e7e"><path display="inline" d="M218.195,257.521c0,64.719,4.624,119.1-27.309,151.283c-17.961,18.105-46.301,28.772-81.17,28.772   c-57.192,0-88.947-27.862-109.215-66.416c19.512-12.459,39.452-24.502,59.775-36.154c8.292,23.188,36.291,49.258,67.888,33.21   c20.027-10.18,17.715-41.04,17.715-74.537c0-69.549,0-149.78,0-212.528c-0.063-1.044-0.125-2.087,0.732-2.214   c23.866,0,47.728,0,71.585,0C218.195,134.832,218.195,198.069,218.195,257.521z M399.727,215.462   c-18.247-7.814-40.928-17.058-46.488-33.952c-6.233-18.934,4.396-34.533,16.231-39.841c26.023-11.688,57.038,7.556,63.463,27.301   c19.583-11.657,39.103-23.384,56.826-36.896c-20.826-34.584-51.354-59.342-107.003-57.561   c-30.64,0.979-53.657,10.652-70.841,25.088c-16.771,14.085-29.721,33.854-31.737,61.989   c-6.025,84.212,56.988,105.708,110.695,129.137c16.93,7.385,35.751,14.842,43.54,29.517c16.061,30.282-12.389,50.26-36.898,52.397   c-39.336,3.427-65.858-19.587-81.175-43.54c-19.133,11.86-39.938,22.045-58.298,34.683c25.537,44.908,67.409,73.98,132.831,73.793   c66.74-0.188,116.219-32.366,120.281-92.977C516.677,262.216,454.956,239.105,399.727,215.462z"></path></g></svg>
   ),
   Fragment: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}> <path d="M7 8l-4 4l4 4" /> <path d="M17 8l4 4l-4 4" /> <path d="M14 4l-4 16" /></svg>
   )
}
