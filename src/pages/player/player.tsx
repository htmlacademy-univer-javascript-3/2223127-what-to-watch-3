import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerButton from '../../components/player-button/player-button';

type PlayerProps = {
  videoLink: string;
  videoPoster: string;
};

function Player({videoLink, videoPoster}: PlayerProps) {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [duration, setDuration] = useState('');
  const [progressPercentage, setProgressPercentage] = useState(0);

  function getVideoDuration(currentTime = 0){
    const video = videoRef.current;
    if(video){
      const time = (video.duration | 0) - (currentTime | 0);
      const totalMinutes = Math.floor(time / 60);
      const seconds = time % 60;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      if(hours === 0 && minutes === 0 && seconds === 0){
        setIsPaused(true);
      }
      setProgressPercentage(Math.round(100 / videoRef.current.duration * videoRef.current.currentTime));
      if(hours === 0) {
        return `${minutes}:${seconds}`;
      } else {
        return `${hours}:${minutes}:${seconds}`;
      }
    }
    return '';
  }

  useEffect(() =>{
    if(videoRef.current){
      videoRef.current.onfullscreenchange = () => {
        setIsPaused(videoRef.current ? videoRef.current.paused : false);
      };
      videoRef.current.ontimeupdate = () => {
        setDuration(getVideoDuration(videoRef.current?.currentTime));
      };
      setDuration(getVideoDuration());
    }
  }, []);

  function playClickHandler(){
    const video = videoRef.current;
    if(video && video.paused){
      video.play();
    } else if(video && ! video.paused){
      video.pause();
    }
    setIsPaused(video ? video.paused : false);
  }

  function fullScreenHandler(){
    const video = videoRef.current;
    if (video){
      video.requestFullscreen();
    }
  }

  function progressHandler(evt: React.MouseEvent<HTMLProgressElement, MouseEvent>){
    const video = videoRef.current;
    const bcr = evt.currentTarget.getBoundingClientRect();
    if(video){
      videoRef.current.currentTime = (evt.clientX - bcr.left) / bcr.width * videoRef.current.duration;
    }
  }

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={videoPoster}
      >
      </video>
      <button onClick={() => navigate('/')} type="button" className="player__exit">
          Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              onClick={(evt) => progressHandler(evt)}
              className="player__progress"
              value={progressPercentage}
              max="100"
            >
            </progress>
            <div className="player__toggler" style={{ left: `${progressPercentage}%` }}>
                Toggler
            </div>
          </div>
          <div className="player__time-value">{duration}</div>
        </div>

        <div className="player__controls-row">
          <PlayerButton onClick={playClickHandler} isPaused={isPaused}/>
          <div className="player__name">Transpotting</div>
          <button onClick={fullScreenHandler} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
