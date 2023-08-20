import React, { useEffect, useState } from "react";
import Video from "./videos";
import { GridBroadcast } from "./styles";

function GridVideos({ videos, activeTag, UserD }) {
  
  const [videosBySubject, setVideosBySubject] = useState([]);
  const [selectedClass, setSelectedClass] = useState('1');
  useEffect(() => {
    if (selectedClass) {
      fetchData(selectedClass);
    } else if (UserD && UserD.std) {
      fetchData(UserD.std);
      setSelectedClass(UserD.std);
    }
  }, [UserD, selectedClass]);
  const filterElement = (videos) => {
    if (activeTag === "All") {
      return videos;
    } else {
      return videos.filter((video) =>
        video?.tags.map((el) => el.toLowerCase()).includes(activeTag)
      );
    }
  };
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
    <><div className="flex gap-4">
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
      <GridBroadcast>
         {filterElement(videos).map((video) => {
          const { videoId } = video;
          return <Video video={video} key={videoId} />;
        })} 
{videosBySubject.map((subject) => (
            <div key={subject.name} className="my-4">
              <h3 className="text-xl">{subject.name}</h3>
              <div className="flex flex-grow overflow-x-scroll gap-4 p-4 border border-white flex-wrap flex-row">
                {subject.videoIds.map((id) => (
                  <div key={id}>
                    <iframe
                      width="340" height="180"
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`YouTube video player - ${id}`}
                      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                    />
                  </div>
                ))}
              </div>
              {/* <div><iframe width="560" height="315" src="https://www.youtube.com/embed/YVfOg3Da5hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> */}
            </div>
          ))}
      </GridBroadcast>
    </>
  );
}

export default GridVideos;
