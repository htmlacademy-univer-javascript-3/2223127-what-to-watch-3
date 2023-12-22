import { render, screen } from '@testing-library/react';
import VideoPlayer from './videoplayer';

describe('Component: videoplayer', () => {
  it('should render correct', () => {
    render(
      <VideoPlayer filmPreview='' isActive={false} previewVideoLink=''/>);

    const videoTag = screen.getByTestId('video');

    expect(videoTag).toBeInTheDocument();
  });
});
