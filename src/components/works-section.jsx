import WorkCard from "./work-card"

function WorksSection ({ projects }) {
  return (<>
    <h1 className="text-2xl my-4">Works</h1>
    <div className="w-full grid grid-cols-1 gap-4">
      {
        projects.map(project => {
          return (
            <WorkCard key={project.id} {...project} />
          )
        })
      }
    </div>
  </>)
}

export default WorksSection