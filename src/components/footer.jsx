import githubLogo from '../assets/images/github-logo.png'

function Footer() {
  return (
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
  )
}

export default Footer