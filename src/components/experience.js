import React from "react"
import Delta from "./delta.png"
import Winnie from "./winnie.png"

export default () => (
  <div
    id="experience"
    style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}
  >
    <header style={{ textAlign: `center`, marginTop: `-0.825rem` }}>
      <h3>Experience</h3>
    </header>
    <div style={{ marginTop: `-0.825rem`, textAlign: `center` }}>
      <h4 style={{ textAlign: `center` }}>Delta Dental, May 2019- Present</h4>
      <img
        style={{ width: `50%`, marginTop: `4%` }}
        src={Delta}
        alt="Delta Dental Logo"
      />
      <h5 style={{ textAlign: `center`, marginTop: `0%` }}>
        Web Development Intern
      </h5>
      <p style={{ textAlign: `center`, marginTop: `3%` }}>
        Design, develop, and implement a Delta Dental internal web application.
      </p>
      <h4 style={{ textAlign: `center` }}>Winnie, 2017- 2018</h4>
      <img
        style={{ width: `50%`, marginTop: `4%` }}
        src={Winnie}
        alt="Winnie Logo"
      />
      <h5 style={{ textAlign: `center`, marginTop: `0%` }}>
        Content Specialist
      </h5>
      <p style={{ textAlign: `center`, marginTop: `3%` }}>
        Managed a team of 14 content writers by assigning tasks and ensuring the
        completion of tasks in a timely and organized manner, providing feedback
        when necessary, and handling on-boarding phone calls to expand the team.
        Provided email support to users of Winnie including business owners and
        childcare providers and assisted in maintaining ongoing quality content
        by performing tasks such as data entry, data verification, and tagging
        of content.
      </p>
    </div>
  </div>
)
