function WorkCard(project) {
  return (
    <div tabIndex={project.id} className="collapse collapse-arrow border border-base-300 rounded-box">
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
}

export default WorkCard