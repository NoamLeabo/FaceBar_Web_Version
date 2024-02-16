import React from 'react';
import { render, fireEvent, screen, waitFor, cleanup } from '@testing-library/react';
import App from '../App/App';
afterEach(() =>{
    cleanup();
});
// Mock active users and logged in user for the feed to load properly
const activeUsersMock = [{ FirstName: 'Arnon', LastName: 'Lutsky' }];
const loggedinUserMock = {FirstName: 'Arnon', LastName: 'Lutsky', name: 'arnonlu'};

describe('FeedPage', () => {
  it('Log in to an existing account', async () => {


    // Render the FeedPage component with mock data
    render(
      <App/>
    );
    // Wait for the page to render
    await waitFor(() =>{
        expect(screen.getByPlaceholderText('Username or Email')).toBeInTheDocument();
    })
    // Enter username and password
    const userNameBox = screen.getByPlaceholderText('Username or Email');
    fireEvent.change(userNameBox, { target: { value: 'arnonlu' } });
    const passwordBox = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordBox, { target: { value: 'aAaA1234' } });
    const logInButton = screen.getAllByText('Log In')[0];
    fireEvent.click(logInButton);

    // If we logged in succesfully, the name will be Arnon
    await waitFor(() => {
        expect(screen.getByText("What's on your mind, Arnon?")).toBeInTheDocument();
      });
   
  });
});
