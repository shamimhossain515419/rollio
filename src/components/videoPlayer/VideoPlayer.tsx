import React from 'react';

const VideoPlayer = ({ videoUrl }: any) => {
  return (
    <div className="w-full h-full">
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        
      ></iframe>

      {/* <video className=" videoCart w-full  rounded-3xl" autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
      </video> */}
    </div>
  );
};

export default VideoPlayer;
