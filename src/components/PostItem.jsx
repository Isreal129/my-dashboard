import React from 'react';
import CommentsList from './CommentsList';

const PostItem = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {post.image && <img src={post.image} alt={post.title} />}
      <CommentsList postId={post.id} />
    </div>
  );
}

export default PostItem;
