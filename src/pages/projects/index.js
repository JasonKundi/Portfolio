import React from "react"
import { useState } from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"

const Projects = ({ children }) => {
  const [ToggleProject, setToggleProject] = useState(false)

  return (
    <Layout>
      <div className={portfolio}>
        {children}
        <h2>My Favourites</h2>
        <div className="project-titles">
          <h3 className="project-title" onClick={() => setToggleProject(true)}>Hylla</h3>
          <h3 className="project-title" onClick={() => setToggleProject(false)}>Meal Planner</h3>
        </div>
      </div>
      <div className="projects">
        {ToggleProject && <hylla />}
        {!ToggleProject && <meal />}
      </div>
    </Layout>
  )
}

export default Projects
