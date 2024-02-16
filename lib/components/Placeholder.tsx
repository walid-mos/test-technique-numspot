/* eslint-disable import/prefer-default-export */
export const placeholderSVG = `
<svg width="700" height="475" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<linearGradient id="g">
<stop stop-color="#333" offset="20%" />
<stop stop-color="#222" offset="50%" />
<stop stop-color="#333" offset="70%" />
</linearGradient>
</defs>
<rect width="700" height="475" fill="#333" />
<rect id="r" width="700" height="475" fill="url(#g)" />
<animate xlink:href="#r" attributeName="x" from="-700" to="700" dur="1s" repeatCount="indefinite"  />
</svg>`
