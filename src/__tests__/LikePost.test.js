import React from 'react';
import { render, fireEvent, screen, waitFor, cleanup } from '@testing-library/react';
import FeedPage from '../FeedPage/feedPage/FeedPage';
afterEach(() =>{
    cleanup();
});
// Mock active users and logged in user for the feed to load properly
const activeUsersMock = [{ FirstName: 'Arnon', LastName: 'Lutsky' }];
const loggedinUserMock = {FirstName: 'Arnon', LastName: 'Lutsky', name: 'arnonlu'};

describe('FeedPage', () => {
  it('Likes the first posts and check that the like count increased', async () => {


    // Render the FeedPage component with mock data
    render(
      <FeedPage
        loggedinUser={loggedinUserMock}
        activeUsers={activeUsersMock}
      />
    );

    // Wait for the component to render
    await waitFor(() => {
      expect(screen.getByText("What's on your mind, Arnon?")).toBeInTheDocument();
    });
    // Chack that the post is loaded
    expect(screen.getByTestId('test-post-0')).toBeInTheDocument();
    // The original number of like is 240
    expect(screen.getAllByText('240')[0]).toBeInTheDocument();

    const likeBtn = screen.getAllByTestId('likeBtn-test-0')[0];
    // Click on the like button
    fireEvent.click(likeBtn);

    // Wait for the likes number to update
    await waitFor(() => {
      expect(screen.queryAllByText('241')[0]).toBeInTheDocument();
    });
  });
});
