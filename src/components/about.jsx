function About({ aboutMe }) {
  return (<>
    <h1 id="about" className="text-2xl my-4">About</h1>
    <div className="w-full">
      <p>{aboutMe}</p>
    </div>
  </>)
}

export default About