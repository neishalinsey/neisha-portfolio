import "./App.css";

const projects = [
  {
    id: 1,
    title: "Tetris Game",
    description:
      "A Java implementation of Tetris using object-oriented programming and the Model-View-Controller design pattern.",
    technologies: ["Java", "OOP", "MVC"],
    status: "Completed",
  },
  {
    id: 2,
    title: "Traveling Knight",
    description:
      "A C++ algorithms project exploring the movement of a knight across a chessboard.",
    technologies: ["C++", "Algorithms"],
    status: "Completed",
  },
];

function App() {
  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <header className="navbar">
        <a href="#home" className="logo">
          NJ<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Homepage Introduction */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="intro-label">SOFTWARE ENGINEERING STUDENT</p>

            <h1>
              Hi, I'm Neisha.
              <br /> A software engineering student bringing creative ideas to
              life through clean, functional code.
            </h1>

            <p className="hero-description">
              I'm a Software Engineering student at Penn State, passionate about
              building useful applications, solving problems, and creating
              thoughtful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects
              </a>

              <a href="#about" className="secondary-button">
                About Me
              </a>

              <a
                href="/Jay_SE_2028.pdf"
                download="Jay_SE_2028.pdf"
                className="secondary-button"
              >
                Download Resume
              </a>
            </div>

            <p className="graduation">
              B.S. Software Engineering | Expected May 2028
            </p>
          </div>

          {/* Decorative Code Editor */}
          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>

                <span className="file-name">developer.js</span>
              </div>

              <div className="code-body">
                <div>
                  <span className="code-purple">const</span> developer = {"{"}
                </div>

                <div>
                  {" "}
                  name: <span className="code-green">"Neisha Jay"</span>,
                </div>

                <div>
                  {" "}
                  role:{" "}
                  <span className="code-green">
                    "Software Engineering Student"
                  </span>
                  ,
                </div>

                <div> skills: [</div>

                <div>
                  {" "}
                  <span className="code-green">"Python"</span>,
                </div>

                <div>
                  {" "}
                  <span className="code-green">"JavaScript"</span>,
                </div>

                <div>
                  {" "}
                  <span className="code-green">"React"</span>,
                </div>

                <div>
                  {" "}
                  <span className="code-green">"Java"</span>,
                </div>

                <div>
                  {" "}
                  <span className="code-green">"C++"</span>
                </div>

                <div> ],</div>

                <div>
                  {" "}
                  graduation: <span className="code-orange">2028</span>,
                </div>

                <div>
                  {" "}
                  openToInternships: <span className="code-purple">true</span>
                </div>

                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="content-section">
          <p className="section-label">01 / ABOUT</p>

          <h2>A little about me.</h2>

          <p>
            I'm pursuing a Bachelor's degree in Software Engineering and a
            certificate in Digital Arts at Penn State. I enjoy combining
            creativity with technical problem-solving.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="content-section">
          <p className="section-label">02 / SKILLS</p>

          <h2>Technologies I'm learning.</h2>

          <div className="skills-container">
            <span>Python</span>
            <span>Java</span>
            <span>C++</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SQL</span>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="content-section">
          <p className="section-label">03 / PROJECTS</p>

          <h2>Featured Projects</h2>

          <p>
            A collection of academic projects showcasing my experience in
            software development, object-oriented programming, and algorithm
            design. Through these projects, I've gained hands-on experience
            building applications, solving programming challenges, and testing
            and debugging code using Java and C++.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <span className="project-status">{project.status}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="content-section contact-section">
          <p className="section-label">04 / CONTACT</p>

          <h2>Let's Connect</h2>

          <p>
            I'm currently seeking software engineering internships and
            opportunities to grow as a developer. Feel free to connect with me!
          </p>

          <div className="contact-links">
            <a
              href="https://github.com/neishalinsey"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/neisha-jay-4015a4283/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 Neisha Jay. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
