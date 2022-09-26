import Head from 'next/head';
import Image from 'next/image';
import BlogPosts from '../components/BlogPosts';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js workshop</title>
      </Head>

      <main className="page">
        <section className="intro">
          <Image
            src="/nextjs.svg"
            alt="Next.js logo"
            width="207"
            height="124"
          />

          <h1>Hello there!</h1>

          <p>
            This little project uses Next.js, with React and CSS along for the
            ride.
          </p>

          <p>Now, time for some blog articles.</p>
        </section>

        <BlogPosts />
      </main>
    </div>
  );
}
