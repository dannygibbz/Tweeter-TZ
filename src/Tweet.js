import React from "react"
import "./App.css"
import moment from "moment"
import Avatar from "@material-ui/core/Avatar"

function mapNameToAvatar(name) {
  if (name === "Biff") {
    return <Avatar alt="Biff Tannen" src="./biff.png" />
  }
  if (name === "Marty") {
    return <Avatar alt="Marty McFly" src="./mcfly.png" />
  } else {
    return <Avatar alt="Doc Brown" src="./docbrown.png" />
  }
}

function Tweet({ name, text, date }) {
  return (
    <div
      className="tweet"
      style={{
        borderTop: "1px solid #747376",
        borderBottom: "1px solid #747376",
        marginLeft: "25%",
        marginRight: "25%",
        marginBottom: "20px",
        padding: "15px",
        marginTop: "15px",
      }}>
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        {moment(date).format("MMMM Do YYYY, h:mm a")}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}>
        <div style={{ marginRight: "10px" }}>{mapNameToAvatar(name)}</div>
        <div style={{ color: "#3f51b5", fontSize: "25px" }}>
          <b>{name}</b> : {text}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "15px",
        }}>
        <i className="far fa-comment" style={{ cursor: "pointer" }} />
        <i className="fas fa-retweet" style={{ cursor: "pointer" }} />
        <i className="far fa-heart" style={{ cursor: "pointer" }} />
        <i className="fa fa-share" style={{ cursor: "pointer" }} />
        <i className="far fa-chart-bar" style={{ cursor: "pointer" }} />
      </div>
    </div>
  )
}

export default function TweetList({ arrayOfTweets }) {
  return arrayOfTweets.map(el => (
    <Tweet key={el.id} name={el.name} text={el.text} date={el.date} />
  ))
}
