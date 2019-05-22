import React from "react"
import { Link } from "gatsby"
import Resumt from "./resume.pdf"
import UO from "./uo.png"

export default () => (
  <div
    id="connect"
    style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}
  >
    <header style={{ textAlign: `center`, marginTop: `-0.825rem` }}>
      <h3>Education</h3>
    </header>
    <div style={{ marginTop: `-0.825rem`, textAlign: `center` }}>
      <h4 style={{ textAlign: `center` }}>Hackbright Academy, 2019</h4>
      <img style={{ width: `50%` }} src={Hackbright} alt="Hackbright Login" />
      <p style={{ textAlign: `center`, marginTop: `0%` }}>
        12-week immersive software engineering program focused on the
        fundamentals of computer science in addition to modern web development.
        <br /> <br />
        Languages, frameworks, and tools learned: Python, Flask, Jinja,
        JavaScript, jQuery, HTML/CSS, React, SQL, Postgres, SQLAlchemy.
      </p>
      <h4 style={{ textAlign: `center` }}>University of Oregon, 2017</h4>
      <img style={{ width: `50%`, marginTop: `4%` }} src={UO} alt="UO Login" />
      <p style={{ textAlign: `center`, marginTop: `0%` }}>
        Bachelor of Arts, Psychology
      </p>
    </div>
  </div>
)
