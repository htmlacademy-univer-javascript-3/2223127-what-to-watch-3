import { fireEvent, render, screen } from '@testing-library/react';
import VideoPlayer from './videoplayer';

describe('Component: videoplayer', () => {
  it('should render correct', () => {
    render(
      <VideoPlayer filmPreview='' isActive={false} previewVideoLink=''/>);
    
    const videoTag = screen.getByTestId('video') as HTMLVideoElement

    expect(videoTag).toBeInTheDocument();
    expect(videoTag.paused).toBe(true)
  });
});
