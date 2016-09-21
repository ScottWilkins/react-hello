import React, { Component } from 'react';



class Test extends Component {
  render() {
    return (
      var arr = [1,2,3,4,5,6]
      <div >
        <ul>
          {arr.map(num=>
          <li> {num} </li>)}
        </ul>
      </div>
    );
  }
}

module.exports = Test;
