import {render, screen, cleanup} from '@testing-library/react';
import FeedPost from '../FeedPage/feedPost/FeedPost';
afterEach(() =>{
    cleanup();
});
test('should render a post', () =>{
    const post = {id : 2, composer : 'J. S. Bach', time : '1727', text : 'Ich habe genug',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img: '/imgs/Johann_Sebastian_Bach.jpg', likes: 50};
    render(<FeedPost {...post}/>);
    const postElement = screen.getByTestId('test-post-2')
    expect(postElement).toBeInTheDocument();
    expect(postElement).toHaveTextContent('Ich habe genug');
});