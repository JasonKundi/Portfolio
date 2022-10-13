import React from "react"
import { Carousel } from "react-carousel-minimal"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"

const Projects = ({ children }) => {
  const data = [
    {
      image:
        "https://user-images.githubusercontent.com/94011909/176274187-f0d4c59a-200c-483e-9a3b-c05db894bcf8.PNG",
      caption: "React Meal Planner",
    },
    {
      image:
        "https://user-images.githubusercontent.com/94011909/170559949-4c7a122d-b5fc-481d-8f5e-4234988a08fd.PNG",
      caption: "Hylla - Music app",
    },
    {
      image: "/greengrocers.png",
      caption: "Grocery E-Store",
    },
    {
      image: "cohort-manager.png",
      caption: "Cohort Manager",
    },
  ]
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  }
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  }
  return (
    <Layout>
      <div className={portfolio}>
        {children}
        <h2> A couple of faves</h2>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Projects
