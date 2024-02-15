import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import FeedPage from '../feedPage/FeedPage';

// Mock active users data
const activeUsersMock = [{ FirstName: 'John', LastName: 'Doe' }];

describe('FeedPage', () => {
  it('deletes a post when the delete button is clicked', async () => {
    // Mock loggedinUser data
    const loggedinUserMock = {
      FirstName: 'John',
      LastName: 'Doe',
      name: 'John Doe'
    };

    // Render the FeedPage component with mock data
    const { getByText, queryByTestId } = render(
      <FeedPage
        loggedinUser={loggedinUserMock}
        activeUsers={activeUsersMock}
      />
    );

    // Wait for the component to render
    await waitFor(() => {
      expect(getByText("What's on your mind, John?")).toBeInTheDocument();
    });

    // Find the delete button associated with the first post
    const deleteButton = getByText('Delet post');

    // Click on the delete button
    fireEvent.click(deleteButton);

    // Wait for the post to be removed from the DOM
    await waitFor(() => {
      expect(queryByTestId('test-post-1')).not.toBeInTheDocument();
    });
  });
});


// import {render, screen, cleanup} from '@testing-library/react';
// import FeedPost from '../FeedPage/feedPost/FeedPost';
// afterEach(() =>{
//     cleanup();
// });
// const activeUsersMock = [{ FirstName: 'John', LastName: 'Doe' }];

// describe('FeedPage', () => {
//   it('deletes a post when the delete button is clicked', async () => {
//     // Mock loggedinUser data
//     const loggedinUserMock = {
//       FirstName: 'John',
//       LastName: 'Doe',
//       name: 'John Doe'
//     };

//     // Render the FeedPage component with mock data
//     const { getByText, queryByTestId } = render(
//       <FeedPage
//         loggedinUser={loggedinUserMock}
//         activeUsers={activeUsersMock}
//       />
//     );
// test('should render a post', () =>{
//     const post = {id : 2, composer : 'J. S. Bach', time : '1727', text : 'Ich habe genug',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img: '/imgs/Johann_Sebastian_Bach.jpg', likes: 50};
//     const postElement = screen.getByTestId('test-post-2')
//     expect(postElement).toBeInTheDocument();
//     expect(postElement).toHaveTextContent('Ich habe genug');
// });