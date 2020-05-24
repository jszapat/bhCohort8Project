import React, { Component } from 'react';

import './App.css'; 
import Resource from './components/Resource';

class App extends Component {
   resources = [
     {
    posterName: 'Joel',
    resourceAuthor: 'Traversy Media',
    authorSkillLevel: 'Advanced',
    cohort: '0',
    title: 'React JS crash Course',
    categories: ['React'],
    summary: 'Code along about React on youtube',
    link: 'https://www.youtube.com/watch7v=sBws8MSXN7A',
    resourceType: 'Crash Course',
    datePublished: '2018-09-10.00:00:00:000z',
    videoLength: 'null',
    timeToComplete: 180,
    rating: '5',
    comments: [
      {user: 'John', text: 'Great video with clear instructions'}, 
      {user: 'Bella', text:  'Simple and straight to the point.'}
    ],
    
  },
    {
    
     
       posterName: 'John F',
       resourceAuthor: 'DevEd',
       authorSkillLevel: 'Beginner',
       cohort: '8',
       title: 'React Tutorial for Beginners',
       category: ['React', 'Beginner'],
       summary: "A beginner's guide to React, React State Management, React Router, and Redux. Include 5 app projects.",
       link: 'https://www.youtube.com/playlist?list=PLDy0o7g0_msVHmyZZpVJyFn5ojlboVEhE',
       resourceType: 'Playlist',
       datePublished: '2018-09-10.00:00:00:000z',
       videoLength: 'null',
       timeToComplete: 200,
       rating: '4',
       comments: [
         {user: 'Tony', text: 'He knows hi stuff'}, 
         {user: 'Mark', text:  'A good intro to React.'}]
       },

      {
     
     
     
      posterName: 'Jaliyah',
      resourceAuthor: "NetNinja",
      authorSkillLevel: "Advance",
      cohort: "0",
      title: "React & Redux Complete",
      categories: ["React", "Redux"],
      summary:
      "A good resource on building a couple react apps with and without redux",
      link: "www.google.com/search?q=NetNinja%20React",
      resourceType: "Playlist",
      datePublished: "2018-09-10.00:00:00.000z",
      videoLength: null,
      timeToComplete: 300,
      rating: 5,
      comments: [
      {user: 'Joe', text: 'Pretty good resource'}, 
      {user: 'Peter', text:  'The best Playlist to learn React.'}
    ],
  },
   ];
   //[<Resource resource={aResource}/>, <Resource resource={aResource}]

   // it remaps makes a new array base on the original array

   renderPosts() {
      const display = this.resources.map(resource => {
        return <Resource resource={resource} />;
      });
      return display;
   }
    




  render() {
    return (
      <div className = "App" >
    
      <h1>Welcome to BrainHive!</h1>
      {[this.renderPosts()]}
      </div>
    );
  }
}
export default App;