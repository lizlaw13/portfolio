import React from "react"
import MoodOne from "./circle-cropped.png"
import News from "./circle-cropped-3.png"

export default () => (
  <div
    id="projects"
    style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}
  >
    <header style={{ textAlign: `center`, marginTop: `-0.825rem` }}>
      <h3>Projects</h3>
    </header>
    <div style={{ marginTop: `-0.825rem`, textAlign: `center` }}>
      <h4 style={{ textAlign: `center` }}>Over The Mood</h4>
      <a href="https://github.com/lizlaw13/final-project">View on Github</a>
      <br />
      <img
        style={{ width: `50%`, marginTop: `4%` }}
        src={MoodOne}
        alt="Over The Mood Login"
      />
      <p style={{ textAlign: `center`, marginTop: `3%` }}>
        Full stack web application that aims to improve mental health by
        allowing users to keep a log of their moods and associated activities.
        By tracking your mood and activity history, you can then determine which
        activities elicit positive moods and which trigger negative moods. Users
        can dump their feelings and save it to their profile- similar to journal
        entries and have their entry analyzed - which will predict if the entry
        was positive or negative.
      </p>
      <h4 style={{ textAlign: `center` }}>Feedr</h4>
      <img
        style={{ width: `50%`, marginTop: `4%` }}
        src={News}
        alt="Newsfeed Application"
      />{" "}
      <br />
      <a href="https://github.com/lizlaw13/feedr">View on Github</a> <br />
      <a href="https://lizlaw13.github.io/feedr/">View Live</a>
      <p style={{ textAlign: `center`, marginTop: `3%` }}>
        Single page application thats pulls the top headlines in the United
        States. The user will be able to filter between category through the
        dropdown on the header menu. Clicking/tapping on one of the articles
        will load a pop up with more information. The user from that point will
        be able to either dismiss the additional information or go to the
        referenced article.
      </p>
    </div>
  </div>
)
