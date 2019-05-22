import React from "react"
import Header from "../components/header"
import About from "../components/about"

import Projects from "../components/projects"
import Education from "../components/education"
import Experience from "../components/experience"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 700 }}>
    <Header />
    <About />
    <Projects />
    <Experience />
    <Education />
  </div>
)
