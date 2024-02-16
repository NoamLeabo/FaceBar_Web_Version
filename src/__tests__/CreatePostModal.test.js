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
  it('Create a new post', async () => {


    // Render the FeedPage component with mock data
    render(
      <FeedPage
        loggedinUser={loggedinUserMock}
        activeUsers={activeUsersMock}
      />
    );
    // Wait for the page to render
    await waitFor(() => {
        expect(screen.getByText("What's on your mind, Arnon?")).toBeInTheDocument();
      });
    // Chack that there is no post with the same text already
    await waitFor(() =>{
        expect(screen.queryByText('Test for adding a new post')).not.toBeInTheDocument();
    })
    // Wait for the post textarea to appear
    await waitFor(() => {
      expect(screen.getByTestId('create-post-text-test')).toBeInTheDocument();
    });

    // Enter text into the post textarea
    const postTextArea = screen.getByTestId('create-post-text-test');
    fireEvent.change(postTextArea, { target: { value: 'Test for adding a new post' } });

    // Click on the "Post" button within the modal
    const postButton = screen.getAllByText('Post')[0];
    fireEvent.click(postButton);

    // Wait for the new post to be added
    await waitFor(() => {
      expect(screen.getAllByText('Test for adding a new post')[0]).toBeInTheDocument();
    });
  });
});
