import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar></Navbar>
     <section className="h-screen flex items-center justify-center bg-black text-white text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">I'm Farhan Bashir</h1>
        <p className="mt-4 text-lg">Frontend Developer | UI Designer</p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-indigo-600 font-semibold px-6 py-2 rounded shadow"
        >
          Hire Me
        </a>
      </div>
    </section> 
    </>
    
  );
}
