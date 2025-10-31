// src/App.js
import { useEffect } from "react";
import { themeChange } from "theme-change";

const App = () => {

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="bg-base-200 text-base-content min-h-screen">
      {/* Navbar */}
      <nav className="navbar bg-primary">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">AJBocar.online</a>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate mr-5">
            {/* this hidden checkbox controls the state */}
            <input
              data-toggle-theme="dracula,wireframe" 
              data-act-class="ACTIVECLASS"
              type="checkbox"
              className="theme-controller"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero min-h-[80vh]"
        style={{
          backgroundImage: "url(https://picsum.photos/1920/1080)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=Oliver" alt="avatar" />
              </div>
            </div>
            <h3 className="mb-5 text-2xl md:text-3xl">Hi, I'm AJ</h3>
            <h1 className="mb-5 text-4xl md:text-6xl font-bold">
              Full-Stack Web Developer
            </h1>
            <p className="mb-5">
              I build cool websites like this one. Let me build one for you.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-base-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto text-lg">
            I'm a full-stack developer with a passion for building scalable and
            interactive web applications. I have experience with React, Node.js,
            Tailwind CSS, and more.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-base-200">
        <div className="container mx-auto text-center max-w-screen-lg">
          <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 m-1">
              <figure>
                <img
                  src="https://via.assets.so/game.png?id=2&q=95&w=360&h=360&fit=fill"
                  alt="Project 1"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Project 1</h3>
                <p className="card-actions text-justify">
                  This is a short description of the first project I worked on.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary mt-4">View Project</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <figure>
                <img
                  src="https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill"
                  alt="Project 2"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Project 2</h3>
                <p className="card-actions text-justify">
                  This is a short description of the second project I worked on.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary mt-4">View Project</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <figure>
                <img
                  src="https://via.assets.so/game.png?id=3&q=95&w=360&h=360&fit=fill"
                  alt="Project 3"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Project 3</h3>
                <p className="card-actions text-justify">
                  This is a short description of the third project I worked on.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary mt-4">View Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-base-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="mb-8 text-lg">
            I'd love to hear from you. Reach out to me through socials below!
          </p>
          <div className="space-x-4">
            <a
              href="mailto:ajbocar@gmail.com"
              className="btn btn-outline btn-light"
            >
              Email Me
            </a>
            <a
              href="https://github.com/ajbocar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-light"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abocar/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-light"
            >
              LinkedIn
            </a>
          </div>
          <div className="space-x-4 space-y-4">
            <a
              href="https://api.whatsapp.com/send?phone=639937959007"
              className="btn btn-outline btn-light"
            >
              WhatsApp
            </a>
            <a
              href="viber://chat?number=%2639937959007"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-light"
            >
              Viber
            </a>
            <a
              href="https://x.com/ajbocar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-light"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-900 py-4 text-center">
        <p>Like this page? <a className="link" href="https://www.buymeacoffee.com/ajbocar">Buy me a coffee!</a></p>
      </footer>
    </div>
  );
};

export default App;
