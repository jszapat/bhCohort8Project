import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource';

class App extends Component {
  resource = {
    posterName: 'Joseph',
    resourceAuthor: 'NetNinja',
    authorSkillLevel: 'Advance',
    cohort: '0',
    title: 'React & Redux Complete',
    categories: ['React', 'Redux'],
    summary:
      'A good resource on building a couple react apps with and without redux',
    link: 'www.google.com/search?q=NetNinja%20React',
    resourceType: 'Playlist',
    datePublished: '2018-09-10.00:00:00.000z',
    videoLength: null,
    timeToComplete: 300,
    rating: 5,
    comments: [
      { user: 'Joe', text: 'Pretty good resource' },
      { user: 'Peter', text: 'A great resource to learn React.' }
    ]
  }



  render() {
    return (
      <div className='App'>
        <h1>Welcome to BrainHive!</h1>
        <Resource  resource={this.resource} />
        <Resource  resource={this.resource} />
        <Resource  resource={this.resource} />
      </div>
    );
  }
}

export default App;
