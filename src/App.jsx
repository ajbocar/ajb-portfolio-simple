// src/App.js
import React from 'react';

const App = () => {
  return (
    <div className="bg-base-200 text-base-content min-h-screen">
      {/* Navbar */}
      <nav className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">My Portfolio</div>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-cover bg-center h-96 text-center flex justify-center items-center relative" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg">I’m a web developer passionate about creating beautiful and functional websites.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-base-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto text-lg">
            I'm a full-stack developer with a passion for building scalable and interactive web applications. I have experience with React, Node.js, Tailwind CSS, and more.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-base-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <figure><img src="https://via.placeholder.com/300" alt="Project 1" /></figure>
              <div className="card-body">
                <h3 className="card-title">Project 1</h3>
                <p>This is a short description of the first project I worked on.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Project</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <figure><img src="https://via.placeholder.com/300" alt="Project 2" /></figure>
              <div className="card-body">
                <h3 className="card-title">Project 2</h3>
                <p>This is a short description of the second project I worked on.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Project</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <figure><img src="https://via.placeholder.com/300" alt="Project 3" /></figure>
              <div className="card-body">
                <h3 className="card-title">Project 3</h3>
                <p>This is a short description of the third project I worked on.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Project</button>
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
          <p className="mb-8 text-lg">I'd love to hear from you. Reach out to me through the form below or connect with me on social media!</p>
          <div className="space-x-4">
            <a href="mailto:me@example.com" className="btn btn-outline btn-light">Email Me</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-light">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-light">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-900 py-4 text-center">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
