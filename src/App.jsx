import './App.css'
import githubLogo from './assets/images/github-logo.png'
import { bio, certificates, projects } from './data'

function App() {
  return (
    <div className="App mx-auto mockup-window border bg-base-300 my-2 mx-2">
      <div className="md:px-16 py-4 bg-base-100">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-base-100">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
              <li><a>Resume</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl md:text-3xl">
            <span className="text-primary">Paz</span>
            <span className="text-base-content">rin</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a>Contact</a></li>
            <li><a >Resume</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Hire Me</a>
        </div>
      </div>

      {/* Header start */}
      <div className="w-full p-1">
        <div className="text-5xl leading-relaxed">
          <p>Hello 👋</p>
          <p>I'm {bio.fullName}</p>
          <p>{bio.role}</p>
        </div>
        <div className="md:flex justify-between items-center">
          <ul className="menu menu-horizontal bg-base-200 rounded-box p-2 mt-2">
            {
              bio.socials.map(social => {
                return (
                  <li key={social.id}>
                    <a href={social.link} target="_blank">{social.title}</a>
                  </li>
                )
              })
            }
          </ul>
          <button className="btn btn-outline rounded-full">Download CV</button>
        </div>
      </div>

      {/* About */}
      <h1 id="about" className="text-2xl my-4">About</h1>
      <div className="w-full">
        <p>{bio.aboutMe}</p>
      </div>

      <div className="divider"></div>

      {/* Works */}
      <h1 className="text-2xl my-4">Works</h1>
      <div className="w-full grid grid-cols-1 gap-4">
        {
          projects.map(project => {
            return (
              <div key={project.id} tabIndex={project.id} className="collapse collapse-arrow border border-base-300 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  {project.title}
                </div>
                <div className="collapse-content">
                  <div className="hero-content flex-col lg:flex-row">
                    <img src="https://via.placeholder.com/1000x700" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                      <h1 className="text-5xl font-bold">{project.title}</h1>
                      <p className="py-6">{project.description}</p>
                      <a className="btn btn-outline" href={project.url} target="_blank">Source</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="divider"></div>

      {/* Certification */}
      <h1 className="text-2xl my-4">Certifications</h1>
      <div className="w-full grid grid-cols-3 gap-4 justify-center">
        {
          certificates.map(certificate => {
            return (
              <div className="card col-span-1 shadow-xl">
                <figure className="px-5 pt-10">
                  <img src="https://via.placeholder.com/300x170" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <p>{certificate.title}</p>
                  <a className="link link-primary" href={certificate.url} target="_blank">Credential</a>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="divider"></div>

      {/* Contact */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Me!</h1>
            <p className="py-6">Ingin aplikasi/web sesuai kebutuhan anda? Jangan sungkan untuk berkonsultasi dengan kami.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Write you want"></textarea>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">or chat via WhatsApp?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* Footer   */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">LinkedIn</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Resume</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a><img className="w-20" src={githubLogo} /></a>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - with love Ryfazrin</p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default App
