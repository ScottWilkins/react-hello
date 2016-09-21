import React, { Component } from 'react';
import '../App.css';
import reactCSS from 'reactcss'




class Comments extends Component {
  constructor(){
    super();
    this._handleDelete = this._handleDelete.bind(this)
  }
  render() {
    const styles = reactCSS({
      'default': {
        profiles: {
          width: "50px",
          height: "50px",
          borderRadius: "50px",
          border: "solid"
        },
      },
    })
    return (
      <div  className="is-tasty-pie" >
        <img className="profile" src={this.props.pic} style={styles.profiles}/>
        <h1>{this.props.author}</h1>
        <h2>{this.props.body}</h2>
        <a href="#" onClick={this._handleDelete}>Delete Comment</a>
      </div>
    );
  }
  _handleDelete (e) {
    e.preventDefault()
    if(confirm("are you sure?"))
    this.props.onDelete(this.props.comment)
  }
}

module.exports = Comments;
