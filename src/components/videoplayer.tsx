import { useRef } from 'react';

type VideoPlayerProps = {
    filmPreview: string;
    isActive: boolean;
    previewVideoLink:string;
}

function VideoPlayer({filmPreview, isActive, previewVideoLink}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if(isActive && videoRef.current) {
    videoRef.current.play();
  } else if(videoRef.current){
    videoRef.current.load();
  }

  return (
    <video ref={videoRef} poster={filmPreview} height='175px' width='280px' muted src={previewVideoLink}></video>
  );
}

export default VideoPlayer;
