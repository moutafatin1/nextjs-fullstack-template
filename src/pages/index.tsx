import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextJs Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl text-center font-bold text-purple-600">
        Hello World!
      </h1>
    </div>
  );
};

export default Home;
