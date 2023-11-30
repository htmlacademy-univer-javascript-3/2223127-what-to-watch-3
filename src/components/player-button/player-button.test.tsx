import { render, screen } from '@testing-library/react';
import PlayerButton from './player-button';

describe('Component: PlayerButton', () => {
  it('should render correct with isPaused = true', () => {
    const expectedText = /Play/i;

    function handleClick(){
      return 1;
    }

    render(
      <PlayerButton isPaused onClick={() => {
        handleClick();
      }}
      />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correct with isPaused = false', () => {
    const expectedText = /Pause/i;

    function handleClick(){
      return 1;
    }

    render(
      <PlayerButton isPaused={false} onClick={() => {
        handleClick();
      }}
      />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
