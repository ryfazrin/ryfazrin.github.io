import { bio } from '../data'

function Navbar () {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-base-100">
            <li><a>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href={bio.resumeUrl} target="_blank">Resume</a></li>
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
          <li><a href="#contact">Contact</a></li>
          <li><a href={bio.resumeUrl} target="_blank">Resume</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Hire Me</a>
      </div>
    </div>
  )
}

export default Navbar