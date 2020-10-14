import React, { Component } from 'react';
import ApiContext from '../../Contexts/ApiContext'
// Simple generate all exercises component
// this will be used in future versions when implementing custom exercise list creation.
class AllExercises extends Component {
  static contextType = ApiContext;

  render() {
    const { exercises=[] } = this.context

    let listExercise = exercises.map(exercise => {
      return <li key={exercise.id}>
        <h4>{exercise.exercise_name}</h4>
        <p>{exercise.exercise_description}</p>
        <p>{exercise.instructions}</p>
        <iframe width="100%" height="100%" 
        src={exercise.link}
        title={exercise.id}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
      </li>
    })
    
    
    return (
      <>
        <ul>
          {listExercise}
        </ul>
      </>

    );
  }
}

export default AllExercises;