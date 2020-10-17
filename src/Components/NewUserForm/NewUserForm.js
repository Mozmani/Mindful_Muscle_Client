import React, { Component } from "react";
import ApiContext from "../../Contexts/ApiContext";
import config from "../../config";
import TokenService from "../../Services/token-service";
import "./NewUserForm.css";

// Class component that handles new user's exercise prrefrences
class NewUserForm extends Component {
  state = {
    exercises: [],
    goals: "gain_strength",
    freq: 1,
    exVal: 1,
    newExercises: [],
  };

  static contextType = ApiContext;

  // fetch call to protected filtered exercise list
  findMyExercises = (freq, exercise, goals) => {
    return fetch(`${config.API_ENDPOINT}/filter/${goals}-${exercise}-${freq}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }

        return res.json();
      })
      .then((exercises) => {
        return exercises;
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  // A client side filter of filtered exercises to populate a unique list for each condition.
  // Next Version Plans: Will be able to delete / change this list.
  filterMyExercises = (list, goal, freq) => {
    let newList = [];
    let freqN = Number(freq);

    for (let i = 0; i < list.length; i++) {
      if (goal === "gain_muscle") {
        if (list[i].target === "Warmup" && newList.length === 0) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Lowerbody" &&
          newList.length <= freqN + 1
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Upperbody" &&
          newList.length - (freqN + 1) <= freqN
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Back" &&
          newList.length - (freqN + 1) - freqN <= 3
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Core" &&
          newList.length - 3 - (freqN + 1) - freqN <= freqN + 1
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Postural" &&
          newList.length - 3 - (freqN + 1) - freqN - (freqN + 1) <= 2
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Accessory" &&
          newList.length - 5 - (freqN + 1) - freqN - (freqN + 1) <= 3
        ) {
          newList.push(list[i]);
        }
      }
      if (goal === "gain_strength") {
        if (list[i].target === "Warmup" && newList.length === 0) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Lowerbody" &&
          newList.length <= freqN + 2
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Upperbody" &&
          newList.length - (freqN + 2) <= freqN + 1
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Back" &&
          newList.length - (freqN + 2) - (freqN + 1) <= 4
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Core" &&
          newList.length - 4 - (freqN + 2) - (freqN + 1) <= freqN + 1
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Postural" &&
          newList.length - 4 - (freqN + 2) - (freqN + 1) - (freqN + 1) <= 2
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Accessory" &&
          newList.length - 6 - (freqN + 2) - (freqN + 1) - (freqN + 1) <= 3
        ) {
          newList.push(list[i]);
        }
      }
      if (goal === "endurance") {
        if (list[i].target === "Warmup" && newList.length === 0) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Lowerbody" &&
          newList.length <= freqN + 2
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Upperbody" &&
          newList.length - (freqN + 2) <= freqN
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Back" &&
          newList.length - (freqN + 2) - freqN <= 3
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Core" &&
          newList.length - 3 - (freqN + 2) - freqN <= freqN + 1
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Postural" &&
          newList.length - 3 - (freqN + 2) - freqN - (freqN + 1) <= 2
        ) {
          newList.push(list[i]);
        }
      }
      if (goal === "lose_weight") {
        if (list[i].target === "Warmup" && newList.length === 0) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Lowerbody" &&
          newList.length <= freqN + 2
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Upperbody" &&
          newList.length - (freqN + 2) <= 2
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Back" &&
          newList.length - 2 - (freqN + 2) <= 3
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Core" &&
          newList.length - 5 - (freqN + 2) <= freqN + 2
        ) {
          newList.push(list[i]);
        } else if (
          list[i].target === "Postural" &&
          newList.length - 5 - (freqN + 2) - (freqN + 2) <= 2
        ) {
          newList.push(list[i]);
        }
      }
    }
    this.setState({
      newExercises: newList,
    });

    return newList;
  };
  // POST to exercise table for specific user
  pushResultsToTable(list, freq, goal) {
    return Promise.all(
      list.map((exercise) =>
        fetch(`${config.API_ENDPOINT}/adex`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            user_id: this.props.user.userName,
            exercise_id: exercise.id,
            frequency: freq,
            goal: goal,
          }),
        })
      )
    );
  }
  /* Handles Form submit:
  1) Pulls selections choices from user.
  2) Makes a GET request from a filtered dashboard route.
  3) Performs a second filter to create a unique manageable list.
  4) POSTS that list to a new exercise plan table
  5) Sets Dashboard value to true which brings the New user to their freshly created dashboard
  that has their exercise plan!
  */
  handleFormSubmit = (ev) => {
    ev.preventDefault();
    const { goals, freq } = ev.target;

    this.findMyExercises(this.state.freq, this.state.exVal, this.state.goals)
      .then((exercises) => {
        let newList = this.filterMyExercises(
          exercises,
          this.state.goals,
          this.state.freq
        );
        return this.pushResultsToTable(newList, freq.value, goals.value);
      })
      .then(() => {
        return this.context.newPlans()
      })
      .then(() => {
        this.findUser(this.context.plans, this.context.currentUser);
        this.context.dashboard();
        this.props.onDashSuccess();
      });
  };
  // A way to handle tracking user name for routing and progression to dashboard page
  findUser = (plans, userName) => {
    let track = [];
    for (let i = 0; i < plans.length; i++) {
      if (plans[i].user_id === userName && track.length === 0) {
        track.push(plans[i]);
        this.context.dashboard();
      }
    }
  };
  // onChange function to grab goals value
  findGoal = (val) => {
    this.setState({
      goals: val,
    });
  };
  // onChange function to grab frequency value
  findFreq = (val) => {
    this.setState({
      freq: val,
    });
    // onChange function to grab exercise value value
  };
  findExVal = (val) => {
    this.setState({
      exVal: val,
    });
  };

  render() {
    return (
      <>
        <form className="newUser" onSubmit={this.handleFormSubmit}>
          <label htmlFor="goals">Select your goals:</label>

          <select
            className="select-css"
            id="goals"
            name="goals"
            onChange={(e) => this.findGoal(e.target.value)}
          >
            <option value="gain_strength">Gain Strength</option>
            <option value="gain_muscle">Gain Muscle Hypertrophy </option>
            <option value="endurance">Gain Endurance</option>
            <option value="lose_weight">Burn Fat</option>
          </select>

          <label htmlFor="freq">Choose your workout frequency:</label>
          <select
            className="select-css"
            name="freq"
            onChange={(e) => this.findFreq(e.target.value)}
          >
            <option value="1">2x A Week</option>
            <option value="2">3x A Week</option>
            <option value="3">4x A Week</option>
            <option value="4">5x a Week</option>
          </select>
          <p>Select what resources you have available:</p>
          <div className="radio">
            <div className="has-gym">
              <input
                value="3"
                type="radio"
                id="gymMembership"
                name="exercise"
                onChange={(e) => this.findExVal(e.target.value)}
                required
              />
              <label htmlFor="gymMembership">Gym Membership or Home Gym</label>
            </div>
            <div className="has-bands">
              <input
                value="2"
                type="radio"
                id="bands"
                name="exercise"
                onChange={(e) => this.findExVal(e.target.value)}
                required
              />
              <label htmlFor="bands">Resistence Bands</label>
            </div>
            <div className="has-none">
              <input
                value="1"
                type="radio"
                id="none"
                name="exercise"
                onChange={(e) => this.findExVal(e.target.value)}
                required
              />
              <label htmlFor="none">No Equipment</label>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default NewUserForm;
