import React, {Component} from 'react';
import '../App.css';
class MovieForm extends Component {
  render () {
    return (
      <form className="movie-form" onSubmit={this._handleSubmit.bind(this)}>
          <input placeholder="Title:" ref={(input) => this._title = input}/>
          <button type="submit">Submit</button>
      </form>
    )
  }
  _handleSubmit(event){
    event.preventDefault();
    let title = this._title;
    this.props.fetchMovies(title.value)
  }
}
module.exports = MovieForm
