import type { NextPage } from "next";
import Head from "next/head";
import { 
  Header, 
  About, 
  Experience,
  Education,
  Skills, 
  Projects, 
  Contact 
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mehul Rao | AI/ML Engineer</title>
        <meta name="description" content="AI/ML Engineer specializing in large-scale inference and healthcare AI platforms." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black min-h-screen text-white selection:bg-blue-500/30">
        <Header />
        
        <main className="max-w-5xl mx-auto px-6 md:px-12 space-y-12">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Home;
