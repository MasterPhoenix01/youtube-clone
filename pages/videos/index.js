import React, { useEffect, useState } from 'react';

const Index = ({ UserD }) => {
  const [videosBySubject, setVideosBySubject] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    if (selectedClass) {
      fetchData(selectedClass);
    } else if (UserD && UserD.std) {
      fetchData(UserD.std);
      setSelectedClass(UserD.std);
    }
  }, [UserD, selectedClass]);

  const fetchData = async (classNumber) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/videofetcher`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ classNumber }),
    });
    let { videosBySubject } = await response.json();
    setVideosBySubject(videosBySubject);
  };

  const handleClassSelect = (classNumber) => {
    setSelectedClass(classNumber);
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center p-4">
        <h2 className="text-3xl">Select Class:</h2>
        <div className="justify-center p-4 w-11/12">
          <div className="flex gap-4">
            <button className="text-2xl" onClick={() => handleClassSelect('1')}>
              1st
            </button>
            <button className="text-2xl" onClick={() => handleClassSelect('2')}>
              2nd
            </button>
            <button className="text-2xl" onClick={() => handleClassSelect('3')}>
              3rd
            </button>
            <button className="text-2xl" onClick={() => handleClassSelect('4')}>
              4th
            </button>
            <button className="text-2xl" onClick={() => handleClassSelect('5')}>
              5th
            </button>
            <button className="text-2xl" onClick={() => handleClassSelect('6')}>
              6th
            </button>
            <button className="text-2xl" onClick={() => handleClassSelect('7')}>
              7th
            </button>
            <button className="text-2xl" onClick={() => handleClassSelect('8')}>
              8th
            </button>
            <button className="text-2xl" onClick={() => handleClassSelect('9')}>
              9th
            </button>
            <button className="text-2xl" onClick={() => handleClassSelect('10')}>
              10th
            </button>
            {/* Add buttons for other class numbers */}
            {/* Buttons for other classes */}
          </div>
        </div>
      </div>
      {videosBySubject.length === 0 && UserD && UserD.std && (
        <div className="p-4">
          {/* Render videos for UserD.std */}
        </div>
      )}
      {videosBySubject.length > 0 && (
        <div className="p-4">
          {videosBySubject.map((subject) => (
            <div key={subject.name} className="my-4">
              <h3 className="text-xl">{subject.name}</h3>
              <div className="flex flex-wrap row overflow-x-scroll gap-4 p-4 border border-white">
                {subject.videoIds.map((id) => (
                  <div key={id}>
                    <iframe
                      width="360"
                      height="200"
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`YouTube video player - ${id}`}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;






















// const Index = ({UserD}) => {
//   const [videosBySubject, setVideosBySubject] = useState([]);
//   const [selectedClass, setSelectedClass] = useState(null);

//   useEffect(() => {
//     if (selectedClass) {
//       fetchData(selectedClass);
//     }else{
//       fetchData(UserD.std);

//     }
//     if (UserD) {
//       setSelectedClass(UserD.std)
//     }
//     console.log(UserD)
//   }, [UserD, selectedClass]);

//   const fetchData = async (classNumber) => {
//     let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/videofetcher`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ classNumber, }),
//     });
//     let { videosBySubject } = await response.json();
//     setVideosBySubject(videosBySubject);
//   };

//   const handleClassSelect = (classNumber) => {
//     setSelectedClass(classNumber);
//   };
//   // const firstTwoVideos = k.slice(0, 2);
//   return (
//     <div className="min-h-screen">
//       <div className="flex items-center p-4">
//         <h2 className="text-3xl">Select Class:</h2>
//         <div className="justify-center p-4 w-11/12">
//           <div className="flex gap-4">
//             <button className="text-2xl" onClick={() => handleClassSelect(1)}>
//               1st
//             </button>
//             <button className="text-2xl" onClick={() => handleClassSelect(2)}>
//               2nd
//             </button>
//             <button className="text-2xl" onClick={() => handleClassSelect(3)}>
//               3rd
//             </button>
//             <button className="text-2xl" onClick={() => handleClassSelect(4)}>
//               4th
//             </button>
//             <button className="text-2xl" onClick={() => handleClassSelect(5)}>
//               5th
//             </button>
//             <button className="text-2xl" onClick={() => handleClassSelect(6)}>
//               6th
//             </button>
//             <button className="text-2xl" onClick={() => handleClassSelect(7)}>
//               7th
//             </button>
//             <button className="text-2xl" onClick={() => handleClassSelect(8)}>
//               8th
//             </button>
//             <button className="text-2xl" onClick={() => handleClassSelect(9)}>
//               9th
//             </button>
//             <button className="text-2xl" onClick={() => handleClassSelect(10)}>
//               10th
//             </button>
//             {/* Add buttons for other class numbers */}
//           </div>
//         </div>
//       </div>
//       {selectedClass && (
//         <div className="p-4">
//           {videosBySubject.map((subject) => (
//             <div key={subject.name} className="my-4">
//               <h3 className="text-xl">{subject.name}</h3>
//               <div className="flex flex-grow overflow-x-scroll gap-4 p-4 border border-white">
//                 {subject.videoIds.map((id) => (
//                   <div key={id}>
//                     <iframe
//                       width="360"
//                       height="200"
//                       src={`https://www.youtube.com/embed/${id}`}
//                       title={`YouTube video player - ${id}`}
//                       frameBorder="0"
//                       allowFullScreen
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Index;
// import React, { useEffect, useState } from 'react';

// const Index = () => {
//   const [videosBySubject, setVideosBySubject] = useState({});
//   const [selectedClass, setSelectedClass] = useState(null);

//   useEffect(() => {
//     if (selectedClass) {
//       fetchData(selectedClass);
//     }
//   }, [selectedClass]);

//   const fetchData = async (classNumber) => {
//     let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/videofetcher`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ classNumber }),
//     });
//     let { videoIds } = await response.json();

//     setVideosBySubject((prevVideosBySubject) => ({
//       ...prevVideosBySubject,
//       [classNumber]: videoIds,
//     }));
//   };

//   const handleClassSelect = (classNumber) => {
//     setSelectedClass(classNumber);
//   };

//   return (
//     <div className="min-h-screen">
//       <div className="flex items-center p-4">
//         <h2 className="text-3xl">9th</h2>
//         <div className="justify-center p-4 w-11/12">
//           {selectedClass && videosBySubject[selectedClass] && (
//             <div className="flex flex-grow overflow-x-scroll gap-4 p-4 border border-white">
//               {videosBySubject[selectedClass].map((id) => (
//                 <div key={id}>
//                   <iframe
//                     width="360"
//                     height="200"
//                     src={`https://www.youtube.com/embed/${id}`}
//                     title={`YouTube video player - ${id}`}
//                     frameBorder="0"
//                     allowFullScreen
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <div>
//           <button className="class-button" onClick={() => handleClassSelect(9)}>
//             Class 9
//           </button>
//           {/* Add more class buttons for other classes */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;


// import React, { useEffect, useState } from 'react';

// const Index = () => {
//   const [k, setK] = useState([]);
//   const [showMore, setShowMore] = useState(false);
//   const [classNumber, setClassNumber] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/videofetcher`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ classNumber }),
//     });
//     let res = await a.json();
//     let videoIds = [];
//     for (let i = 0; i < res.videoIds.length; i++) {
//       const element = res.videoIds[i];
//       videoIds.push(element);
//     }
//     setK(videoIds);
//   };

//   const handleShowMore = () => {
//     setShowMore(true);
//     fetchData(classNumber);
//   };

//   const handleClassSelect = (selectedClassNumber) => {
//     setClassNumber(selectedClassNumber);
//     fetchData(selectedClassNumber);
//   };

//   const firstTwoVideos = k.slice(0, 2);

//   return (
//     <div className="min-h-screen">
//       <div className='flex items-center p-4'>
//         <h2 className='text-3xl'>9th</h2>
//         <div className='justify-center p-4 w-11/12'>
//           <div className="flex flex-grow overflow-x-scroll gap-4 p-4 border border-white">
//             {firstTwoVideos.map((id) => (
//               <div key={id}>
//                 <iframe
//                   width="360"
//                   height="200"
//                   src={`https://www.youtube.com/embed/${id}`}
//                   title={`YouTube video player - ${id}`}
//                   frameBorder="0"
//                   allowFullScreen
//                 />
//               </div>
//             ))}
//             {k.length > 2 && !showMore && (
//               <div className=" flex w-full justify-center bg-zinc-800	">
//                 <style jsx global>{`
//                   .show_more {
//                     width: 90%;
//                   }
//                 `}</style>
//                 <button
//                   className="text-2xl text-white py-2 px-4 rounded flex flex-row items-center justify-center"
//                   onClick={handleShowMore}
//                 >
//                   <span>Show More</span>
//                   <svg
//                     width="50px"
//                     height="50px"
//                     viewBox="0 0 64 64"
//                     data-name="Layer 1"
//                     id="Layer_1"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <defs></defs>
//                     <title></title>
//                     <path
//                       className="cls-1 fill-cyan-700 "
//                       d="M32,41.5a6,6,0,0,1-1.78-.27l-22.5-7a6,6,0,1,1,3.56-11.46L32,29.22l7.52-2.34A2,2,0,1,1,40.7,30.7l-8.11,2.52a2,2,0,0,1-1.18,0L10.09,26.59a2,2,0,0,0-1.52.14,2,2,0,0,0-1,1.18,2,2,0,0,0,1.32,2.5l22.5,7a2,2,0,0,0,1.18,0l22.5-7a2,2,0,0,0-1.18-3.82L49.44,28a2,2,0,1,1-1.19-3.82l4.47-1.39a6,6,0,1,1,3.56,11.46l-22.5,7A6,6,0,0,1,32,41.5Z"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             )}
//             {k.length > 2 && showMore && (
//               <>
//                 {k.slice(2).map((id) => (
//                   <div key={id}>
//                     <iframe
//                       width="360"
//                       height="200"
//                       src={`https://www.youtube.com/embed/${id}`}
//                       title={`YouTube video player - ${id}`}
//                       frameBorder="0"
//                       allowFullScreen
//                     />
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <div>
//           <button className="class-button" onClick={() => handleClassSelect(1)}>
//             Class 1
//           </button>
//           <button className="class-button" onClick={() => handleClassSelect(2)}>
//             Class 2
//           </button>
//           <button className="class-button" onClick={() => handleClassSelect(3)}>
//             Class 3
//           </button>
//           <button className="class-button" onClick={() => handleClassSelect(4)}>
//             Class 4
//           </button>
//           <button className="class-button" onClick={() => handleClassSelect(5)}>
//             Class 5
//           </button>
//           <button className="class-button" onClick={() => handleClassSelect(6)}>
//             Class 6
//           </button>
//           <button className="class-button" onClick={() => handleClassSelect(7)}>
//             Class 7
//           </button>
//           <button className="class-button" onClick={() => handleClassSelect(8)}>
//             Class 8
//           </button>
//           <button className="class-button" onClick={() => handleClassSelect(9)}>
//             Class 9
//           </button>
//           <button className="class-button" onClick={() => handleClassSelect(10)}>
//             Class 10
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;

// import React, { useEffect, useState } from 'react';

// const Index = () => {
//   const [k, setK] = useState([]);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/videofetcher`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     let res = await a.json();
//     let videoIds = [];
//     for (let i = 0; i < res.b.length; i++) {
//       const element = res.b[i];
//       // console.log(element);
//       videoIds.push(element);
//     }
//     setK(videoIds);
//   };

//   const handleShowMore = () => {
//     setShowMore(true);
//   };

//   const firstTwoVideos = k.slice(0, 2);

//   return (
//     <div className="min-h-screen">
//       <div className='flex items-center p-4'>
//         <h2 className='text-3xl'>9th</h2>
//         <div className='justify-center p-4 w-11/12'>

//         <div className="flex flex-grow overflow-x-scroll gap-4 p-4 border border-white">
//           {firstTwoVideos.map((id) => (
//             <div key={id}>
//               <iframe
//                 width="360"
//                 height="200"
//                 src={`https://www.youtube.com/embed/${id}`}
//                 title={`YouTube video player - ${id}`}
//                 frameBorder="0"
//                 allowFullScreen
//               />
//             </div>
//           ))}
//           {k.length > 2 && !showMore && (
//             <div className=" flex w-full justify-center bg-zinc-800	">
//               <style jsx global>{`
//               .show_more{
//                 width:90%;
//               }
//               `}

//               </style>
//               <button
//                 className="text-2xl text-white py-2 px-4 rounded flex flex-row items-center justify-center"
//                 onClick={handleShowMore}
//               >
//                 <span>Show More</span>
//                 <svg width="50px" height="50px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" ><defs></defs><title/><path class="cls-1 fill-cyan-700 " d="M32,41.5a6,6,0,0,1-1.78-.27l-22.5-7a6,6,0,1,1,3.56-11.46L32,29.22l7.52-2.34A2,2,0,1,1,40.7,30.7l-8.11,2.52a2,2,0,0,1-1.18,0L10.09,26.59a2,2,0,0,0-1.52.14,2,2,0,0,0-1,1.18,2,2,0,0,0,1.32,2.5l22.5,7a2,2,0,0,0,1.18,0l22.5-7a2,2,0,0,0-1.18-3.82L49.44,28a2,2,0,1,1-1.19-3.82l4.47-1.39a6,6,0,1,1,3.56,11.46l-22.5,7A6,6,0,0,1,32,41.5Z"/></svg>
//               </button>
//             </div>
//           )}
//           {k.length > 2 && showMore && (
//             <>
//               {k.slice(2).map((id) => (
//                 <div key={id}>
//                   <iframe
//                     width="360"
//                     height="200"
//                     // width="460"
//                     // height="215"
//                     src={`https://www.youtube.com/embed/${id}`}
//                     title={`YouTube video player - ${id}`}
//                     frameBorder="0"
//                     allowFullScreen
//                   />
//                 </div>
//               ))}
//             </>
//           )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;


// import React, { useEffect, useState } from 'react'

// const index = () => {
//   const [k, setK] = useState([])
//   useEffect(() => {
//     fetchData()
//   }, [])
  
//   const fetchData = async ()=>{
//     let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/videofetcher`,{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json',
//         }
//     })
//     let res = await a.json()
//     let videoIds = [];
//     for (let i = 0; i < res.b.length; i++) {
//       const element = res.b[i];
//       console.log(element);
//       videoIds.push(element);
//   }
//   setK(videoIds);
//   }
  
//   return (
//     <div className='min-h-screen'>
//       <div>
//         <h2>9th</h2>
//         <div className='flex'>
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLjm_mvBNlvBYImIjBPzdIwRbI14u7XdAF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
//         </div>
//         <div className='flex flex-wrap gap-4 justify-center border border-white'>

//         {k.map((id) => (
//           <div key={id}>
//           <iframe
//             width="560"
//             height="315"
//             src={`https://www.youtube.com/embed/${id}`}
//             title={`YouTube video player - ${id}`}
//             frameBorder="0"
//             allowFullScreen
//             />
//         </div>
//       ))}

//       </div>
//       </div>
//     </div>
//   )
// }

// export default index