import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ slug, title, content, user, createdAt }) => {

  return (
    <div>
      <Link to={`/post/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p className="lead">{content}</p>
      <p>
        Author <span className="badge">{user}</span> Published on{''}
        <span className="badge">{new Date(createdAt).toLocaleString()}</span>
      </p>
    </div>

  );
};

export default Post;
