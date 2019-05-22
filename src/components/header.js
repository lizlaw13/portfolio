import React from "react"
import { Link } from "gatsby"
import picture from "./me.png"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, size: `10px` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div
    id="top"
    style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}
  >
    <header>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <div style={{ textAlign: `center` }}>
          <h1>Elizabeth Lawrence</h1>
          <img
            style={{ width: `50%`, marginTop: `4%` }}
            src={picture}
            alt="Me"
          />
        </div>
      </Link>
      <ul style={{ listStyle: `none`, textAlign: `center` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="#projects">Projects</ListLink>
        <ListLink to="#experience">Experience</ListLink>
        <ListLink to="#education">Education</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
