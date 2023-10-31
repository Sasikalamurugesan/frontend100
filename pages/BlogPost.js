import React from 'react';
import "../styles/BlogPost.css";

const BlogPost = (props) => {
  return (
    <div className={`blog-post ${props.className}`}>
      <div className="post-card">
        <img src={props.imageUrl} alt={props.title} className="post-image" />
        <div className="date-overlay">
          {props.date} {props.month} {props.year}
        </div>
      </div>
      <h2 className="post-title">{props.title}</h2>
      <p className="post-content">{props.content}</p>
    </div>
  );
};

export default BlogPost;
