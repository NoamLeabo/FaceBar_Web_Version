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
  it('deletes the a post when it\'s delete button is clicked', async () => {


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
    expect(screen.getByTestId('test-post-1')).toBeInTheDocument();
    // Find the delete button associated with the first post
    const deleteButton = screen.getAllByTestId('test-delete-post-1')[0];

    // Click on the delete button
    fireEvent.click(deleteButton);

    // Wait for the post to be removed from
    await waitFor(() => {
      expect(screen.queryByTestId('test-post-1')).not.toBeInTheDocument();
    });
  });
});
