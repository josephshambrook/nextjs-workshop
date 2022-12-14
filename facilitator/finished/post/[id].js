import Head from 'next/head';

// create page that takes the id, requests the post
// from the API, and loads the content
export default function PostPage({ post }) {
  return (
    <div>
      <Head>
        <title>Next.js workshop</title>
      </Head>

      <main className="page">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <small>(This is post {post.id})</small>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}
