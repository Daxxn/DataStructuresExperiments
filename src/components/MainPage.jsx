import React, { Component } from 'react';
import RegExContainer from './RegExContainer';
import ArrayContainer from './ArrayContainer';

const test = [1,2,3,4,5,5];

export default class MainPage extends Component {
  render() {
    return (
       <div>
         <RegExContainer />
         <ArrayContainer initialData={test} />
       </div>
    );
  }
}
