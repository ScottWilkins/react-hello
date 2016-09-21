import React, {Component} from 'react';
import '../App.css';
class commentForm extends Component {
  constructor(){
    super();
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  render () {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>join the discussion</label>
        <div className="comment-form-fields">
          <input placeholder="Name:" ref={(input) => this._author = input}/>
          <textarea placeholder="Comment:" ref={(textarea) => this._body = textarea}/>
          <input placeholder="Picture Url:" ref={(input) => this._pic = input}/>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
      </form>
    )
  }
  _handleSubmit(event){
    event.preventDefault();
    let author = this._author;
    let body = this._body;
    let pic = this._pic;
    this.props.addComment(author.value, body.value, pic.value)
  }
}
module.exports = commentForm
