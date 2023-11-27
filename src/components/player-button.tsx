
type PlayerButtonProps = {
    onClick: () => void;
    isPaused: boolean;
}

function PlayerButton({onClick, isPaused}: PlayerButtonProps) {

  function buttonClickHandler(){
    onClick();
  }

  return (
    <button onClick={() => buttonClickHandler()} type="button" className="player__play">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref={isPaused ? '#play-s' : '#pause'}></use>
      </svg>
      <span>{isPaused ? 'Play' : 'Pause'}</span>
    </button>
  );
}

export default PlayerButton;
