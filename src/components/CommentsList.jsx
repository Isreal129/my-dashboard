import React, { useEffect, useState } from 'react';

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`http://localhost:3001/comments?postId=${postId}`);
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="comments-list">
      <h3>Comments</h3>
      {comments.map(comment => (
        <p key={comment.id}>{comment.body}</p>
      ))}
    </div>
  );
}

export default CommentsList;
