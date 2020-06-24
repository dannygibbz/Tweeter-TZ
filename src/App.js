import React from "react"
import "./App.css"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Header from "./Header"
import TweetList from "./Tweet"

class App extends React.Component {
  state = {
    tweets: [], // all tweets
    value: "", // typed in the input box
    currentUserName: "Marty", // currentUser
  }

  componentDidMount() {
    fetch("/data")
      .then(response => response.json())
      .then(data => this.setState({ tweets: data }))
  }

  saveTweet = () => {
    let allTweets = this.state.tweets
    let nextTweet = {
      name: this.state.currentUserName,
      text: this.state.value,
      date: new Date(),
      id: Math.random(), //In a real app this would come from the db
    }
    allTweets.push(nextTweet)
    this.setState({ tweets: allTweets, value: "" })
  }

  onChange = e => {
    let newString = e.target.value
    // We do a simple check to block them from putting in
    // more than 240 characters
    if (newString.length <= 240) {
      this.setState({ value: newString })
    }
  }

  // We "switch" users by just setting the currentUserName state
  setUser = name => {
    this.setState({ currentUserName: name })
  }

  render() {
    return (
      <div>
        <div>
          <Header onClick={this.setUser} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            style={{ width: "500px" }}
            id="standard-basic"
            label="Compose a message"
            type="text"
            value={this.state.value}
            maxLength={240}
            onChange={this.onChange}
          />
          <Button
            style={{ marginLeft: "20px", marginTop: "10px " }}
            variant="contained"
            onClick={this.saveTweet}>
            Tweet(er!)
          </Button>
        </div>
        <TweetList arrayOfTweets={this.state.tweets} />
        <div />
      </div>
    )
  }
}

export default App
