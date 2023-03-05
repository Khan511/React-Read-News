import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { loading, stories, removeStory } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {stories.map((story) => {
        const {
          title,
          author,
          objectID: id,
          url,
          num_comments: comments,
          points,
        } = story;
        return (
          <article key={id} className="story">
            <h4 className="title">{title} </h4>
            <p className="info">
              {points} points by <span>{author}</span> | {comments} comments
            </p>
            <div>
              <a href={url} target="blank" className="read-link">
                Read more...
              </a>
              <button className="remove-btn" onClick={() => removeStory(id)}>
                Remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
