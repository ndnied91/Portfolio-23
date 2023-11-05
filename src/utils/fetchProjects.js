// import { useState, useEffect } from 'react';
// import { createClient } from 'contentful';

// const client = createClient({
//   space: 'wqwz0wb7zuin',
//   environment: 'master',
//   accessToken: 'E51PDzhvkvSwEvchteVTDPOxDnSqU2K6EZuX5ouJGlA',
// });

// export const useFetchProjects = () => {
//   const [resume, setResume] = useState({});

//   document.querySelector('html').setAttribute('data-theme', 'dark');

//   const getData = async () => {
//     try {
//       const response = await client.getEntries({
//         content_type: 'projects',
//       });
//       console.log(response.items);

//       // setResume(
//       //   `https:${response?.items[0]?.fields?.resume?.fields?.file?.url}`
//       // );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     console.log('fetching resume..');
//     getData();
//   }, [resume]);

//   return { resume };
// };
