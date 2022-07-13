import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"

const Projects = ({ children }) => {
  return (
    <Layout>
      <div className={portfolio}>{children}
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
      </div>
    </Layout>
  )
}


export default Projects
