import React from "react";

export default function BlogPost({ title, body }) {
  return (
    <article className="article">
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}
