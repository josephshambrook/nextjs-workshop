import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import BlogPosts from '@/components/BlogPosts';
import { Logo } from '@/components/Logo';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsResponse = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const posts = await postsResponse.json();

      setPosts(posts);
    };

    // why is this a separate function? Because the anonymous function
    // passed to useEffect as a parameter (line 9) cannot be async,
    // but functions declared within this anonymous function can
    fetchData();
  }, []);

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

        <BlogPosts posts={posts || []} />
      </main>
    </div>
  );
}
