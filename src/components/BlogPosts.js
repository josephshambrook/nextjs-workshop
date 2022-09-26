import React from 'react';
import BlogPost from './BlogPost';

export default function BlogPosts({ posts = [] }) {
  return (
    <section>
      {/* checks for if posts is falsey, or does not contain any posts */}
      {(!posts || !posts.length) && (
        <p>
          No articles to display, <em>yet</em>.
        </p>
      )}

      {/* if there are posts, use the BlogPost component for each one */}
      {/* handy article if you don't know what the key prop does: */}
      {/* https://kentcdodds.com/blog/understanding-reacts-key-prop */}
      {posts && posts.map((post) => <BlogPost key={post.id} {...post} />)}
    </section>
  );
}
