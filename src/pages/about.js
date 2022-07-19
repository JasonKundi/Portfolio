import React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <div>
        <h2>Howdy!</h2>
        <div className="about-body">
          <div className="about-text">
            <h3>Here's a little bit about me!</h3>
            <p>
              As you may have noticed from the home page, my name is Jason and I
              am a Full-Stack software developer based in and around London
            </p>
            <p>
              I got in to coding as I have a keen interest in problem solving
              and critical thinking. I love analysing problems and trying my
              best to fix them! That's probably why me and my partner get on so
              well (she's a Doctor).
            </p>
            <p>
              Recently, I graduated from a Full-Stack Software Developer course
              at Boolean UK and have just started a part time placement putting
              my skills to the test on the back-end for a start up company
            </p>
            <p>
              Before all this however, I was formally trained at University in
              Radio and Digital Production. I've always had a good interest in
              music and the creative arts. So Ideally if I could combine my deep
              passion for problem-solving and coding with my remaining
              adolescent dream of the creative arts and music. I would be a very
              happy bunny indeed!
            </p>
            <p>
              I'm currently looking for a full time position preferably in a
              hybrid setting, as I balance my time betweeen the U.K and Norway.
            </p>
          </div>
          <img
              className="about-img"
              alt="Me on Mannen mountain in Lofoten"
              src="./Jason-Mannen.png"
            ></img>
        </div>
      </div>
    </Layout>
  )
}

export default About
