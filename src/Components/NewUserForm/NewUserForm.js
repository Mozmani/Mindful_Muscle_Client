import React, { Component } from 'react';
import ApiContext from '../../Contexts/ApiContext'
import config from '../../config'
import TokenService from '../../Services/token-service'

class NewUserForm extends Component {
  state = {
    exercises:[],
    goals:'gain_strength',
    freq: 1,
    exVal: 1,
    newExercises:[]




   }

  static contextType = ApiContext
  

  // findMyExercises = (freq, exercise, goals) => {
  //   let newList = []
  //   let oldList = this.context.exercises

  //   for (let i = 0; i < oldList.length; i++){
      
  //     if (oldList[i].exercise_priority <= freq && (oldList[i].equipment_value === 1 || oldList[i].equipment_value === Number(exercise)) ){
        
        
  //       for (let [key, value] of Object.entries(oldList[i])) {
  //           if(`${key}: ${value}` === goals ){
  //             newList.push(oldList[i])
  //           }
  //         }

  //     } 
  //   }
  //   return newList
  // }

   findMyExercises = (freq, exercise, goals) => {
    return fetch(`${config.API_ENDPOINT}/filter/${goals}-${exercise}-${freq}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then((res) => {
      if (!res.ok) {
        return res.json().then(e => Promise.reject(e));
      }

      return res.json();
    })
    .then((exercises) => {

      return exercises
    })
    .catch(error => {
      console.error({ error });
    });
   }



  filterMyExercises = (list, goal, freq) => {
   let newList=[]
   let freqN = Number(freq)

   for (let i = 0; i < list.length; i++) {
    
    if (goal === 'gain_muscle'){
        if(list[i].target === 'Warmup' && newList.length === 0){
          newList.push(list[i])
        } 
        else if (list[i].target === 'Lowerbody' && newList.length <= (freqN + 1)  ){
          newList.push(list[i]) 
        }   
        else if (list[i].target === 'Upperbody' && ((newList.length) - (freqN + 1)) <= freqN  ){
          newList.push(list[i])
        }
        else if (list[i].target === 'Back' && ((newList.length ) - (freqN + 1) - (freqN)) <= 3){
          newList.push(list[i])
        }
        else if (list[i].target === 'Core' && ((newList.length -3) - (freqN + 1) - (freqN)) <= (freqN + 1)){
          newList.push(list[i])
        }
        else if (list[i].target === 'Postural' && ((newList.length -3) - (freqN + 1) - (freqN) - (freqN + 1)) <= 2 ){
          newList.push(list[i])
        }
        else if (list[i].target === 'Accessory' && ((newList.length -5) - (freqN + 1) - (freqN) - (freqN + 1)) <= 3){
          newList.push(list[i])
        }  
    }
    if (goal === 'gain_strength'){
      if(list[i].target === 'Warmup' && newList.length === 0){
        newList.push(list[i])
      } 
      else if (list[i].target === 'Lowerbody' && (newList.length) <= (freqN + 2)  ){
        newList.push(list[i]) 
      }   
      else if (list[i].target === 'Upperbody' && ((newList.length) - (freqN + 2)) <= freqN + 1  ){
        newList.push(list[i])
      }
      else if (list[i].target === 'Back' && ((newList.length ) - (freqN + 2) - (freqN + 1)) <= 4){
        newList.push(list[i])
      }
      else if (list[i].target === 'Core' && ((newList.length -4) - (freqN + 2) - (freqN + 1)) <= (freqN + 1)){
        newList.push(list[i])
      }
      else if (list[i].target === 'Postural' && ((newList.length -4) - (freqN + 2) - (freqN + 1) - (freqN + 1)) <= 2 ){
        newList.push(list[i])
      }
      else if (list[i].target === 'Accessory' && ((newList.length -6) - (freqN + 2) - (freqN + 1) - (freqN + 1)) <= 3){
        newList.push(list[i])
      }
    }
    if (goal === 'endurance'){
      if(list[i].target === 'Warmup' && newList.length === 0){
        newList.push(list[i])
      } 
      else if (list[i].target === 'Lowerbody' && (newList.length) <= (freqN + 2)  ){
        newList.push(list[i]) 
      }   
      else if (list[i].target === 'Upperbody' && ((newList.length) - (freqN + 2)) <= freqN ){
        newList.push(list[i])
      }
      else if (list[i].target === 'Back' && ((newList.length ) - (freqN + 2) - (freqN )) <= 3){
        newList.push(list[i])
      }
      else if (list[i].target === 'Core' && ((newList.length -3) - (freqN + 2) - (freqN )) <= (freqN + 1)){
        newList.push(list[i])
      }
      else if (list[i].target === 'Postural' && ((newList.length -3) - (freqN + 2) - (freqN ) - (freqN + 1)) <= 2 ){
        newList.push(list[i])
      }     
    }
    if (goal === 'lose_weight'){
      if(list[i].target === 'Warmup' && newList.length === 0){
        newList.push(list[i])
      } 
      else if (list[i].target === 'Lowerbody' && (newList.length) <= (freqN + 2)  ){
        newList.push(list[i]) 
      }   
      else if (list[i].target === 'Upperbody' && ((newList.length) - (freqN + 2)) <= 2 ){
        newList.push(list[i])
      }
      else if (list[i].target === 'Back' && ((newList.length - 2 ) - (freqN + 2) ) <= 3){
        newList.push(list[i])
      }
      else if (list[i].target === 'Core' && ((newList.length -5) - (freqN + 2) ) <= (freqN + 2)){
        newList.push(list[i])
      }
      else if (list[i].target === 'Postural' && ((newList.length -5) - (freqN + 2) - (freqN + 2)) <= 2 ){
        newList.push(list[i])
      }     
    }
    
   }
   this.setState({
     newExercises: newList
   })

   return newList
    
  }

  pushResultsToTable(list, freq, goal){

    //for (let i = 0; i < list.length; i++){
     return Promise.all(list.map(exercise => 

         fetch(`${config.API_ENDPOINT}/adex`, {
          method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          user_id:this.props.user.userName,
          exercise_id: exercise.id,
          frequency: freq,
          goal: goal
        }),
        })

      ))
       
      
      // .then(exercise => {
      //   return Promise.all([exercise])
      // })
      
    //}
  }
  
  handleFormSubmit = ev => {
    ev.preventDefault()
    const { goals, freq, exercise } = ev.target
    
  this.findMyExercises(this.state.freq, this.state.exVal, this.state.goals)
    .then(exercises => {
      let newList = this.filterMyExercises(exercises, this.state.goals, this.state.freq )
      return this.pushResultsToTable(newList, freq.value, goals.value)     
    })
    .then( () => {
      this.findUser(this.context.plans, this.context.currentUser)
    this.context.dashboard()
    this.props.onDashSuccess()
      
    })
    

  }
  
  findUser = (plans, userName) => {
    let track = []
    for (let i =0; i < plans.length; i++){
      if (plans[i].user_id === userName && track.length === 0){
        track.push(plans[i])
        this.context.dashboard()
      }
    }
  }
  
  findGoal = (val) => {
    this.setState({
      goals: val
    })
  }
  findFreq = (val) => {
    this.setState({
      freq: val
    })
  }
  findExVal = (val) => {
    this.setState({
      exVal: val
    })
  }

  
  render() { 
    
    return (
      <>
      <form onSubmit={this.handleFormSubmit}>
      <div className='goals'>
      <label htmlFor='goals'>Select your goals:</label>
        <select id='goals' name='goals'
        onChange={e => this.findGoal(e.target.value) }
        >
          <option value='gain_strength'>Gain Strength</option>
          <option value='gain_muscle'>Gain Muscle Hypertrophy </option>
          <option value='endurance'>Gain Endurance</option>
          <option value='lose_weight'>Burn Fat</option>
        </select>     
      </div>
    

        <label htmlFor='freq'>Choose your workout frequency:</label>
        <select 
          name='freq'
          onChange={e => this.findFreq(e.target.value)}
          >
          <option value='1'>2x A Week</option>
          <option value='2'>3x A Week</option>
          <option value='3'>4x A Week</option>
          <option value='4'>5x a Week</option>
        </select>
        <p>Select what resources you have available:</p>
        <input value='3' type="radio" id="gymMembership" name="exercise" onChange={e => this.findExVal(e.target.value)} required/>
        <label htmlFor="gymMembership">Gym Membership or Home Gym</label>
        <input value='2' type="radio" id="bands" name="exercise" onChange={e => this.findExVal(e.target.value)} required/>
        <label htmlFor="bands">Resistence Bands</label>
        <input value='1' type="radio" id="none" name="exercise" onChange={e => this.findExVal(e.target.value)} required/>
        <label htmlFor="none">No Equipment</label>
        <button>
          Submit
        </button>

      </form>

      </>

      );
  }
}
 
export default NewUserForm;