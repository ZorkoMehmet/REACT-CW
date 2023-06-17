import * as React from "react"

const TaskPng = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 512 512"
    
    {...props}
  >
    <path d="M116.3 1c-3.4 1.4-4.5 4.5-6.2 18.4-1.1 9.2-2 13.1-3.1 13.7-.8.4-5.4 2.3-10.3 4.2L88 40.7l-10.6-8.3c-15.1-12-13.8-12.3-33.2 6.8-8.4 8.4-16 16.6-16.9 18.2-2.4 4.6-.9 8.3 7.7 19.1 4.4 5.5 8 10.6 8 11.3 0 .7-.8 2.9-1.9 5-1 2-2.6 6.1-3.5 9-2 6-.9 5.5-17.9 7.6-9.7 1.2-12.3 1.8-14.3 3.7L3 115.3v23.4c0 13.1.4 24.2 1 25.2 1.4 2.7 5.3 3.9 19 5.6 6.8.9 12.5 1.7 12.5 1.8.1.1 1.3 3.3 2.7 7.2 1.5 3.8 3.2 8.4 3.9 10.1 1.2 3 1 3.3-7.4 13.8-6.7 8.3-8.7 11.5-8.7 13.9 0 2.6 2.4 5.4 16.8 19.9 20.8 20.9 19.1 20.5 35 8.3l11.1-8.5 9.6 3.9c5.3 2.1 9.8 4.1 10.1 4.4.3.3 1.4 6.7 2.4 14.2 2.5 19.1.7 17.9 26.8 18.3l20.7.3 3.5 6.2c1.9 3.4 3.6 6.5 3.8 6.8.3.6-4.7 4.9-90.3 77.2-33 27.8-61.4 52.5-63.1 54.9-13.2 18-15.1 40.5-5.2 60.2 4.2 8.3 15.4 19.3 23.8 23.4 7.1 3.5 17.9 6.2 25 6.2 12.2 0 27-5.6 35.9-13.6C95.4 495.2 199.8 372.7 220 348c1.4-1.8 1.8-1.7 8.5 2l7 3.9.5 21c.6 26.4-.6 24.6 18.3 27.1 7.5 1 14 2.1 14.5 2.4.6.3 1.3 1.8 1.7 3.3.3 1.6 2 5.9 3.6 9.6l3 6.8-8.5 10.7c-12.2 15.2-12.6 13.5 8.1 34.4 14.7 14.8 17.1 16.8 19.9 16.8 3.2 0 4.5-.9 19.9-12.9l5.6-4.4 4.7 2.1c2.6 1.2 7 3 9.7 4 5.7 2 5.3 1 7.9 20.2 2 14.8.3 14 29.5 14 26.2 0 27.1-.2 29-6.3.5-1.7 1.5-8.3 2.2-14.6 1-8.6 1.6-11.4 2.8-11.8.9-.3 5.5-2.1 10.3-4l8.8-3.4 10.6 8.6c8.4 6.7 11.3 8.5 13.8 8.5 2.8 0 5.2-2 19.9-16.9 14.2-14.4 16.7-17.3 16.7-19.9 0-3-1-4.6-12.9-19.6l-4.3-5.5 3.8-9.8c2.1-5.4 3.9-9.9 3.9-10.1.1-.1 5.5-.9 12.1-1.7 15.2-1.9 16.1-2.2 18.4-4.5 1.9-1.9 2-3.4 2-25.6 0-13.1-.4-24.3-1-25.3-1.3-2.6-5.2-3.8-15.5-5.1-14.1-1.6-16.5-2.1-16.5-3.2 0-.6-1.6-5-3.6-9.9l-3.6-8.9 4.3-5.6c16.5-20.9 16.3-19 3-32.7-9.7-9.9-9.9-10.3-8.6-12.8 2.7-5 6.6-16.4 9.1-26.4 18-70.9-10.5-144.9-71.4-185.5-20.8-13.9-44-23-67.2-26.5-32.7-4.8-59.3-2-92.3 10l-7.7 2.9-10.4-10.2c-5.7-5.6-10.9-10.2-11.7-10.2-2.5 0-6.5 2.6-16.2 10.4l-9.6 7.7-3.8-1.9c-2.1-1-6.6-2.9-9.9-4.1-7-2.6-6.2-.7-8.5-19.6-1.1-8.7-1.6-10.3-4-12.7L163.2 0l-22.4.1c-12.3 0-23.3.4-24.5.9zm40.1 27.7c1 7.1 2.3 13.7 3.1 14.9.9 1.4 3.6 2.6 8.2 3.7 3.7.9 11 3.7 16.1 6.2 6.6 3.3 9.9 4.4 11.5 3.9 1.2-.4 6.3-3.8 11.2-7.7 5-3.9 9.6-7.5 10.3-8 .9-.8 2.5.2 5.7 3.3 2.5 2.4 4.5 4.8 4.5 5.2 0 .4-2.1 2-4.7 3.5-7.7 4.5-19.7 13.8-27.6 21.3-4.1 3.8-7.7 7-8 7-.2 0-3.2-1.8-6.5-4.1-39.1-26-92.6-6.9-107.9 38.6-2.5 7.2-2.7 9.4-2.7 22 0 12.4.3 14.9 2.6 21.8 9.5 28.3 32.5 46.4 63.9 50.2l4.5.6 1.3 10.2c1.2 10.2 4.6 25.3 7.6 33.6.8 2.4 1.5 4.7 1.5 5.2s-5.3.9-11.9.9h-11.8l-1.3-12.8c-.6-7-1.8-13.7-2.5-14.8-.9-1.4-3.6-2.7-8.2-3.8-3.7-.9-10.9-3.7-16-6.3-6.5-3.2-9.9-4.4-11.6-3.9-1.3.3-7 4.2-12.6 8.7l-10.3 8.2-10-10.1-10.1-10 8.6-10.9c4.8-5.9 8.7-11.6 8.7-12.6s-2-6.4-4.4-12c-2.4-5.6-5.2-12.8-6.2-16-1.3-4.2-2.5-6.2-4.4-7.2-2-1-22.2-4.5-26.2-4.5-.4 0-.8-6.3-.8-13.9 0-16.1-1.4-14.4 13-16.1 16.3-1.9 16-1.7 19.5-14.4.9-3.3 3.4-9.5 5.6-13.8 2.1-4.2 3.9-8.6 3.9-9.6 0-1.1-3.8-6.8-8.5-12.8l-8.6-10.8 9.3-9.3c5.1-5.1 9.6-9.3 10-9.3.4 0 5.3 3.4 10.9 7.5 5.5 4.1 10.6 7.6 11.2 7.6 3 .3 5.7-.6 13.7-4.6 4.7-2.3 11.1-5.1 14.3-6.1 3.1-1 6.4-2.5 7.2-3.4.8-.9 2.1-6.9 3.2-14.8l1.8-13.2h28.2l1.7 12.7zM334 46.1c57.1 7 108.1 49.6 125.8 105 21.6 67.5-3.2 139.7-61.3 178.4-25.9 17.3-54.2 25.7-86.5 25.7-41.7 0-78.8-15-108.4-44C172.9 281.1 157 243.3 157 200c0-24.1 3.8-42.2 13.5-64C187 98.7 219.8 68 258 54.2c25-9.1 48-11.5 76-8.1zm-183.5 73.8c6.6 3 7.2 4.3 4.6 10.4-1.3 2.9-4 10.4-6.1 16.7l-3.7 11.5-3.8.3c-11 .9-21.5-9.5-21.5-21.3.1-6.7 5.9-15.2 12.5-18.1 4.3-1.9 13.3-1.7 18 .5zm317.6 178c-1.6 2-5.4 6.7-8.5 10.6-3.6 4.5-5.6 7.9-5.6 9.6 0 1.5 1.5 6 3.3 10 1.9 4.1 4.6 11.1 6.2 15.7 1.9 6 3.3 8.6 4.9 9.3 1.2.6 7.8 1.8 14.6 2.7l12.5 1.7.3 13.4c.1 7.4-.1 13.8-.5 14.2-.4.4-6.6 1.5-13.6 2.5-7.4 1-13.4 2.3-14.2 3.1-.8.7-2.6 5.3-4 10.1-1.5 4.8-4.2 11.5-6.1 15-1.9 3.4-3.4 7.5-3.4 9 0 1.9 2.4 5.8 8 12.9 4.4 5.6 8 10.5 8 11s-4.4 5.2-9.7 10.5l-9.8 9.7-10.5-8.4c-6.7-5.4-11.4-8.4-13-8.5-1.4 0-5.7 1.5-9.5 3.3-3.9 1.9-10.7 4.6-15.1 6.1-4.5 1.5-8.9 3.5-9.8 4.5-1 1.1-2.2 6.2-3.3 14.7l-1.8 12.9h-28l-2-13.6c-1.1-7.5-2.6-14.3-3.3-15.2-.7-.9-2.8-1.9-4.5-2.3-6.1-1.2-12.2-3.6-20.4-7.6-5.6-2.8-8.9-3.9-10.5-3.4-1.3.3-6.8 4.2-12.3 8.6l-10 8-10.2-10.2-10.1-10.1 8.4-10.5c5.3-6.6 8.4-11.3 8.4-12.8 0-1.4-1.5-5.5-3.4-9.2-1.8-3.7-4.5-10.4-6-14.8-1.5-4.5-3.5-8.8-4.4-9.7-1-.9-6.6-2.2-14.2-3.2-6.8-.9-12.8-1.9-13.2-2.1-1.2-.8-1-24.4.2-24.4.6 0 2.7.7 4.7 1.5 7.9 3.3 27.3 7.3 42.3 8.8 2.3.2 2.5.7 3.2 7.2 1 9.9 2.4 14.9 6.8 24 7.2 14.9 18.6 26.3 33.5 33.5 10.5 5.1 18.7 7 31.1 7 28.4 0 52.5-15 64.9-40.5 11.2-23.1 9.7-49.7-4.1-70.2-2.4-3.6-4.4-6.6-4.4-6.8 0-.1 3.2-3.5 7-7.6 6.7-7 18.6-22.7 22.6-29.7l1.8-3.2 4.8 4.7 4.7 4.6-2.8 3.6zm-288.9 10.8c3.7 4.8 19.4 20.5 25.7 25.6 3 2.5 3.2 2.9 1.9 4.5-.8.9-29.2 34.6-63.1 74.8-46.4 55.1-62.7 73.8-66.4 76.2-7.6 4.8-14 6.5-23.5 6-19.1-.8-33.3-13.5-36.9-33.1-2.2-12 1.5-23.8 10.5-33.4 4.5-4.8 146.3-125 147.6-125.2.3-.1 2.2 2 4.2 4.6zm211.2 49.5c10.2 13.6.3 32.8-16.9 32.8-11 0-21.6-11.2-20.3-21.4.3-2.6.9-3 8.8-5.3 4.7-1.3 11.9-3.9 16-5.7 4.1-1.9 8-3.4 8.7-3.5.7-.1 2.3 1.4 3.7 3.1z" />
    <path d="M363 199.5V231h9v-6.3c0-6 .2-6.5 3.8-9.9l3.7-3.7 6.8 10 6.8 9.9h11l-9.2-13.5-9.2-13.4 8.2-9.1 8.3-9h-12l-8.5 9c-4.7 4.9-8.8 9-9.2 9-.3 0-.5-8.1-.5-18v-18h-9v31.5zM220 176.5v4.5h18v50h10v-49.9l9.3-.3 9.2-.3.3-4.3.3-4.2H220v4.5zM326.3 186.9c-4.7 2.2-7.1 5.3-8 10.4-.8 5.2 2 9.3 8.7 12.3 15.7 7.2 17.1 8.5 13.3 12.6-1.5 1.7-2.6 1.9-7.1 1.5-2.9-.3-7-1.5-9-2.7l-3.6-2.2-2.3 2.9c-1.3 1.5-2.3 3.2-2.3 3.6 0 .4 2.6 2 5.7 3.4 11.3 5.2 24.8 3 28.8-4.8 1.7-3.3 1.9-8.2.5-11-1.2-2.2-7.2-6.2-11-7.4-5.7-1.7-11.9-4.8-12.4-6.1-.3-.9.5-2.6 1.9-4 2.8-2.8 7.7-3.2 13.2-.9 4.7 2 4.9 2 6.3-1.4 1.5-3.8 1-4.6-4.7-6.5-6.2-2.1-12.8-2-18 .3zM279 187.9c-4.3 1.3-9 4.1-9 5.3 0 .6.7 1.9 1.6 2.9 1.6 1.7 1.8 1.7 5.5-.1 5.5-2.9 14.1-2.7 16.9.2 1.1 1.2 2 3.4 2 4.8v2.7l-10.5.5c-14.6.8-19.5 3.9-19.5 12.8 0 12.7 19.7 18.8 30.2 9.3 1.7-1.5 1.8-1.4 1.8 1.5 0 3 .2 3.2 3.6 3.2h3.6l-.4-17.4c-.3-19.5-.9-21.3-7.9-24.8-3.6-1.9-13.2-2.3-17.9-.9zm18 25.7c0 5.4-4.4 9.4-10.4 9.4-6.1 0-9.4-1.4-10.2-4.4-1.4-5.7 3.1-8.3 14.4-8.5l6.2-.1v3.6zM130.2 370.3l-5.2 5.3 5.8 5.7 5.8 5.7 5.4-5.5 5.4-5.5-5.4-5.5c-3-3-5.7-5.5-6-5.5-.3 0-2.9 2.4-5.8 5.3zM92.7 407.8l-5.7 5.8 5.3 5.2c2.9 2.9 5.7 5.2 6.3 5.2.5 0 3.3-2.4 6.2-5.3l5.2-5.3-5.8-5.7-5.8-5.7-5.7 5.8zM55.7 445.8l-5.7 5.8 5.8 5.7 5.8 5.7 5.7-5.8 5.7-5.8-5.8-5.7-5.8-5.7-5.7 5.8z" />
  </svg>
)

export default TaskPng;
