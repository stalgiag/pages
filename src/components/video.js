import React from 'react';
import { ApoVideo } from '../images/apotheosis.mp4';

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  if ({videoTitle} === 'Apotheosis') {
    return (
      // super hacky workaround for http hosted video
      <div className="video">
        <video controls>
          <source src={ApoVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
  return (
    <div className="video">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        autoPlay="0"
      />
    </div>
  );
};
export default Video;
