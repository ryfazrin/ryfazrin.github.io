import './App.css'
import githubLogo from './assets/images/github-logo.png'

function App() {
  return (
    <div className="App container px-2 md:artboard artboard-horizontal phone-5 mx-auto">
      {/* NAVBAR */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <li><a>Resume</a></li>
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
          <p>I'm Muhammad Pazrin Andreanor</p>
          <p>Frontend Development Engineer</p>
        </div>
        <div className="flex justify-between items-center">
          <ul className="menu menu-horizontal bg-base-200 rounded-box p-2 mt-2">
            <li><a>Github</a></li>
            <li><a>LinkedIn</a></li>
            <li><a>Blog</a></li>
            <li><a>Email</a></li>
          </ul>
          <button className="btn btn-outline rounded-full">Download CV</button>
        </div>
      </div>

      {/* About */}
      <h1 className="text-2xl my-4">About</h1>
      <div className="w-full">
        <p>Saya memiliki keahlian dalam pengembangan Web Frontend khususnya Framework Vuejs, Reactjs dan pengembangan Tool untuk Frontend. Selama 1 tahun saya menjalani magang pada e-commerce blibli pada bagian Frontend divisi Research & Development. Saya berhasil mengembangkan Integration Test Tools untuk tim developer Frontend blibli. Di divisi yang sama, saya melakukan research untuk meningkatkan performa halaman blibli.</p>
      </div>

      <div className="divider"></div>

      {/* Works */}
      <h1 className="text-2xl my-4">Works</h1>
      <div className="w-full grid grid-cols-1 gap-4">
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <div className="hero-content flex-col lg:flex-row">
              <img src="https://via.placeholder.com/1000x700" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* Certification */}
      <h1 className="text-2xl my-4">Certification</h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <div className="card col-span-1 bg-base-100 shadow-xl">
          <figure className="px-5 pt-10">
            <img src="https://via.placeholder.com/300x170" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* Contact */}
      <div></div>

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
  )
}

export default App
