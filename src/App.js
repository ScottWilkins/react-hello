import React, { Component } from 'react';
import Jquery from 'jquery';
var Comments = require('../src/components/Comments');
//var Test = require('../src//components/test.js');
import './App.css';
var CommentForm = require('../src/components/CommentForm')
var MovieForm = require('../src/components/movie')
import {Router} from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
      comments: [  {id: 1, author: "mcpants", body: "I wear the pants", pic: "https://s-media-cache-ak0.pinimg.com/564x/72/5d/d6/725dd6df17bc61d60b6ca442d3bc493d.jpg"},
        {id: 2, author: "Jarreth", body: "That's Jarreth!", pic: "https://s-media-cache-ak0.pinimg.com/564x/4b/53/55/4b53554766a2ed8fe948c08b09f37b1b.jpg"},
        {id: 3, author: "olive", body: "give me stew!", pic: "http://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-cat-free.png"}],
      movies: ""
    }
    this._deleteComment = this._deleteComment.bind(this);
    this._addComment = this._addComment.bind(this);
    this._handleClick = this._handleClick.bind(this)
  }
  _fetchMovies(title){
    Jquery.ajax({
      method: 'GET',
      url: "https://omdbapi.com/?s="+title,
      success: (movies) => {
        this.setState({ movies })
        alert(JSON.stringify(this.state.movies))
      }
    })
  }
  _deleteComment(comment){
    const comments = [...this.state.comments]
    const commentIndex = comments.indexOf(comment);
    comments.splice(commentIndex,1)
    this.setState({
      comments
    })
  }
  _getComments(){

      return this.state.comments.map((comment) => {
        return (

          <Comments
            {...comment}
            key={comment.id}
            comment={comment}
            onDelete={this._deleteComment}
            />
        );
      });
  }
  componentWillMount(){
  }
  _getCommentsTitle(commentCount){
    if(commentCount === 0 ){
      return 'no comments yet'
    } else if(commentCount === 1){
    return 'one comment'
  } else {
    return commentCount + " comments"
  }
  }
  _handleClick(){
    this.setState({
      showComments: !this.state.showComments
    })
  }
  _addComment(author, body, pic) {
    if(!author || !body){
      alert("Please enter your name and comment");
      return;
    }
    const comment = {
      id: Date.now(),
      author, body, pic
    };
    this.setState({
      comments: this.state.comments.concat([comment])
    })
  }
  componentDidMount(){

  }
  render() {
    let buttonContents = "show contents";
    if(this.state.showComments){
      buttonContents = "hide contents"
    }
    const comments = this._getComments() || [];
    let commentNodes;
    if(this.state.showComments) {
      commentNodes = <div className="comment" >{comments}</div>
    }
    return (

      <div className="App">
        <CommentForm addComment={this._addComment}/>
        <button className="show-contents-button" onClick={this._handleClick}>{buttonContents}</button>
        <MovieForm fetchMovies={this._fetchMovies.bind(this)}/>
        <h3>{this._getCommentsTitle(comments.length)}</h3>
        {commentNodes}
      </div>
    );
  }
}

export default App;
