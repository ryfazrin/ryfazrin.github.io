import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Divider from './components/divider'
import Footer from './components/footer'
import Header from './components/header'
import Navbar from './components/navbar'
import PaginatedItems from './components/paginations'
import WorksSection from './components/works-section'
import { bio, certificates, projects } from './data'

function App() {
  return (
    <div className="App mx-auto md:mockup-window md:border bg-base-300 md:my-2 mx-2">
      <div className="md:px-16 md:py-4 max-[640px]:px-4 bg-base-100">
        <Navbar bio={bio} />
        <Header bio={bio} />
        <About aboutMe={bio.aboutMe} />
        <Divider />

        <WorksSection projects={projects} />
        <Divider />

        <PaginatedItems certificates={certificates} itemsPerPage={3} />
        <Divider />

        <Contact />
        <Divider />

        <Footer />
      </div>
    </div>
  )
}

export default App
