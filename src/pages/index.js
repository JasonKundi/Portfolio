import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

const Home = ({ children }) => {
  return (
    <Layout>
      <section className={header}>
        {children}
        <div>
          <h2>Full-Stack</h2>
          <h3>React, JavaScript, Node.JS</h3>
          <p>Software Developer based in London</p>
          <Link to="/projects" className={btn}>
            {children} Check out my work
          </Link>
        </div>
        <img className="profile-pic" alt="Jason" src="/Jason.png"></img>
      </section>
    </Layout>
  )
}

export default Home
