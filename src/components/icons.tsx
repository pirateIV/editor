// prettier-ignore
export const Icons = {
   // Layout icons
   VerticalSplit: (props: React.SVGProps<SVGSVGElement>) => (
      <svg width="42" height="36" viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9" fill="none"></path><path d="M3 17V5a2 2 0 0 1 2-2h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2Z"></path></svg>
   ),
   HorizonalSplit: (props: React.SVGProps<SVGSVGElement>) => (
      <svg width="42" height="36" viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M23 11V3H3v8h20Z" strokeWidth="0"></path><path d="M23 17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM22 11H4" fill="none"></path></svg>
   ),
   PreviewOnly: (props: React.SVGProps<SVGSVGElement>) => (
      <svg width="42" height="36" viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M23 17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" fill="none"></path></svg>
   ),
   ResponsiveDesign: (props: React.SVGProps<SVGSVGElement>) => (
      <svg width="42" height="36" viewBox="-8 -7 42 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 19h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a1 1 0 0 0-1 1" fill="none"></path><path d="M12 17V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2Z"></path></svg>
   ),
   // Programming Language icons
   HTML: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 15 15"  {...props}><rect fill="#FF3C41" width="15" height="15" rx="4"></rect><path d="M10.97 2.29a.563.563 0 0 0-.495-.29.572.572 0 0 0-.488.277l-5.905 9.86a.565.565 0 0 0-.007.574c.102.18.287.289.495.289a.572.572 0 0 0 .488-.277l5.905-9.86a.565.565 0 0 0 .007-.574" fill="#28282B"></path></svg>
   ),
   CSS: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 15 15" {...props}><rect fill="#0EBEFF" width="15" height="15" rx="4"></rect><path d="M8 8.366l1.845 1.065a.507.507 0 0 0 .686-.181.507.507 0 0 0-.186-.685L8.5 7.5l1.845-1.065a.507.507 0 0 0 .186-.685.507.507 0 0 0-.686-.181L8 6.634v-2.13A.507.507 0 0 0 7.5 4c-.268 0-.5.225-.5.503v2.131L5.155 5.569a.507.507 0 0 0-.686.181.507.507 0 0 0 .186.685L6.5 7.5 4.655 8.565a.507.507 0 0 0-.186.685c.134.232.445.32.686.181L7 8.366v2.13c0 .271.224.504.5.504.268 0 .5-.225.5-.503V8.366z" fill="#282828"></path></svg>
   ),
   JavaScript: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 15 15" {...props}><rect fill="#FCD000" width="15" height="15" rx="4"></rect><path d="M6.554 3.705c0 .267-.19.496-.452.543-1.2.217-2.12 1.61-2.12 3.275 0 1.665.92 3.057 2.12 3.274a.554.554 0 0 1-.205 1.087c-1.733-.322-3.022-2.175-3.022-4.361 0-2.187 1.289-4.04 3.022-4.362a.554.554 0 0 1 .657.544zm1.892 0c0-.347.316-.607.657-.544 1.733.322 3.022 2.175 3.022 4.362 0 2.186-1.289 4.04-3.022 4.361a.554.554 0 0 1-.205-1.087c1.2-.217 2.12-1.61 2.12-3.274 0-1.665-.92-3.058-2.12-3.275a.551.551 0 0 1-.452-.543z" fill="#282828"></path></svg>
   ),
   Fragment: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}> <path d="M7 8l-4 4l4 4" /> <path d="M17 8l4 4l-4 4" /> <path d="M14 4l-4 16" /></svg>
   )
}
