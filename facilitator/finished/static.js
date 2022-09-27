import Head from 'next/head';
import BlogPosts from '@/components/BlogPosts';
import { Logo } from '@/components/Logo';

export default function StaticPostsPage({ posts }) {
  return (
    <div>
      <Head>
        <title>Next.js workshop</title>
      </Head>

      <main className="page">
        <section className="intro">
          <Logo />

          <h1>Hello there!</h1>

          <p>
            This little project uses Next.js, with React and CSS along for the
            ride.
          </p>

          <p>Now, time for some blog articles.</p>
        </section>

        <BlogPosts posts={posts} />
      </main>
    </div>
  );
}

// This also gets called at build time
export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  // Pass post data to the page via props
  return { props: { posts } };
}
