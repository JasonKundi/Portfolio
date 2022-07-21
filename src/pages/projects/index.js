import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"

const Projects = ({ children }) => {
  return (
    <Layout>
      <div className={portfolio}>
        {children}
        <h2>My Favourites</h2>
        <ul>
          <h4>Hylla - Music Streaming App</h4>
          <img className="ProjIMG" src=""></img>
          <p>
            Hylla is an early concept music streaming app I have created as my
            solo final project for my 6 month software developer bootcamp at
            Boolean. Hylla is an app that acts as a third party integrated app
            to Spotify which stores and displays a Spotify users playlists but
            allows them to listen to their music in their own personalised
            bedroom. The look and feel for Hylla came from my love of classic
            point and click games but furthermore, this app is inspired by the
            nostalgia of youth. A time when I would hang out in friends bedrooms
            and would physically grab music off of their shelf. Those times I
            felt led to deep discovery of new music and have influenced and
            shaped the many genres I have listened to now for many years. Music
            is personal and a song is only complete when shared. That said
            popular apps like Spotify, however great, don't tempt users enough
            to go and look at their friend's playlists. The option is of course
            there, but Hylla aims to build on top of Spotify and bring back that
            interpersonal connection to music sharing for users.
          </p>
          <p2>
            The app's potential in terms of the scope I want to achieve is still
            in a "beta phase" if you will. However, moving forward I wish to
            implement far more customisable components and the ability for users
            to find their friends and hang out in their own unique rooms and
            listen to music
          </p2>
        </ul>
      </div>
    </Layout>
  )
}

export default Projects
