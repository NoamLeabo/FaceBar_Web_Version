function Comment({commentText ,commentAuthor}){

    return(
        <figure>
        <figcaption class="blockquote-footer">
           <cite title="Source Title">{commentAuthor}</cite>
        </figcaption>
        <blockquote class="blockquote">
          <p>{commentText}</p>
        </blockquote>
      </figure>
    );

}
export default Comment;