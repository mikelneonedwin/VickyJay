import {
  Navbar,
  Contact,
  Footer,
  Hero,
  Projects,
  Services,
  Experience,
  SEO,
} from "../components";

function Home() {
  return (
    <>
      <SEO
        title="Winner Edwin"
        description="Software engineer building fast, resource-conscious systems across TypeScript, React, NestJS, and distributed backends."
      />
      <Navbar />
      <main className="mx-auto max-w-[1440px] overflow-x-clip">
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
