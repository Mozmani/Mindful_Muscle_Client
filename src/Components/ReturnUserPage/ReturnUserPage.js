import React, { Component } from "react";
import config from "../../config";
import ApiContext from "../../Contexts/ApiContext";
import TokenService from "../../Services/token-service";
import "./ReturnUser.css";

//Class component for rendering User's exercise plan!
class ReturnUserPage extends Component {
  state = {
    exercises: [],
    frequency: 0,
    goal: "",
  };

  static contextType = ApiContext;
  // Fetches the exercises from the exercise table for this specific user
  componentDidMount() {
    return fetch(`${config.API_ENDPOINT}/epex/${this.context.currentUser}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
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
        this.setState({
          exercises,
          frequency: exercises[0].frequency,
          goal: exercises[0].goal,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  // Generates the day list based off of the users list!
  generateDayList() {
    let arr = [];

    if (this.state.exercises.length > 0) {
      let days = this.state.exercises[0].frequency;
      let goal = this.state.exercises[0].goal;
      let getEx = this.generateExerciseList(days, this.state.exercises, goal);

      for (let i = 0; i <= days; i++) {
        let newList = this.listExercise(getEx[i]);

        arr.push(
          <ul key={i} className="days">
            <h3 className="days">{`Day ${i + 1}:`}</h3>

            {newList}
          </ul>
        );
      }

      return arr;
    }
  }
  // Maps the list of exercises within each day
  listExercise = (list) => {
    return list.map((exercise, idx) => {
      return (
        <li key={idx}>
          <h4>{exercise.exercise_name}</h4>
          <p>{exercise.exercise_description}</p>
          
          <iframe
            width="100%"
            src={exercise.link}
            title={exercise.id}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>{exercise.instructions}</p>
        </li>
      );
    });
  };
  // creates the set of day lists based off of the users goal and frequency
  generateExerciseList(num, list, goal) {
    let exerciseGoal = goal;
    let set1 = [list[0]];
    let set2 = [list[0]];
    let set3 = [list[0]];
    let set4 = [list[0]];
    let set5 = [list[0]];

    if (exerciseGoal.includes("endurance")) {
      if (num === 1) {
        set1.push(list[1], list[2], list[5], list[8], list[10]);
        set2.push(list[3], list[4], list[6], list[9], list[11]);
      } else if (num === 2) {
        set1.push(list[1], list[2], list[7], list[10], list[13]);
        set2.push(list[3], list[5], list[8], list[11], list[14]);
        set3.push(list[4], list[6], list[9], list[12], list[13]);
      } else if (num === 3) {
        set1.push(list[1], list[2], list[9], list[12], list[16]);
        set2.push(list[3], list[6], list[10], list[13], list[17]);
        set3.push(list[4], list[7], list[11], list[14], list[16]);
        set4.push(list[5], list[8], list[9], list[15], list[17]);
      } else if (num === 4) {
        set1.push(list[1], list[2], list[11], list[14], list[19]);
        set2.push(list[3], list[7], list[12], list[15], list[20]);
        set3.push(list[4], list[8], list[13], list[16], list[19]);
        set4.push(list[5], list[9], list[11], list[17], list[20]);
        set5.push(list[6], list[10], list[12], list[18], list[19]);
      }
    } else if (exerciseGoal.includes("lose_weight")) {
      if (num === 1) {
        set1.push(list[1], list[2], list[5], list[8], list[10]);
        set2.push(list[3], list[4], list[6], list[9], list[11]);
      } else if (num === 2) {
        set1.push(list[1], list[2], list[7], list[10], list[13]);
        set2.push(list[3], list[5], list[8], list[11], list[14]);
        set3.push(list[4], list[6], list[9], list[12], list[10]);
      } else if (num === 3) {
        set1.push(list[1], list[2], list[8], list[11], list[16]);
        set2.push(list[3], list[6], list[9], list[12], list[17]);
        set3.push(list[4], list[7], list[10], list[13], list[11]);
        set4.push(list[5], list[6], list[8], list[14], list[12]);
      } else if (num === 4) {
        set1.push(list[1], list[2], list[9], list[12], list[18]);
        set2.push(list[3], list[7], list[10], list[13], list[19]);
        set3.push(list[4], list[8], list[11], list[14], list[12]);
        set4.push(list[5], list[7], list[9], list[15], list[13]);
        set5.push(list[6], list[8], list[10], list[16], list[14]);
      }
    } else if (exerciseGoal.includes("gain_muscle")) {
      if (num === 1) {
        set1.push(list[1], list[2], list[4], list[5], list[6]);
        set2.push(list[3], list[11], list[12], list[13], list[7]);
      } else if (num === 2) {
        set1.push(list[1], list[2], list[3], list[6], list[7]);
        set2.push(list[4], list[5], list[14], list[15], list[16]);
        set3.push(list[6], list[7], list[8], list[11], list[12]);
      } else if (num === 3) {
        set1.push(list[1], list[2], list[3], list[4], list[9]);
        set2.push(list[6], list[7], list[8], list[10], list[12]);
        set3.push(list[1], list[2], list[3], list[4], list[11]);
        set4.push(list[9], list[10], list[11], list[6], list[7]);
      } else if (num === 4) {
        set1.push(list[1], list[2], list[3], list[4], list[5]);
        set2.push(list[6], list[7], list[8], list[9], list[13]);
        set3.push(list[10], list[11], list[12], list[14], list[15]);
        set4.push(list[1], list[2], list[3], list[4], list[5]);
        set5.push(list[6], list[7], list[8], list[9], list[10]);
      }
    } else if (exerciseGoal.includes("gain_strength")) {
      if (num === 1) {
        set1.push(list[1], list[3], list[4], list[6], list[13]);
        set2.push(list[2], list[7], list[5], list[8], list[14]);
      } else if (num === 2) {
        set1.push(list[1], list[3], list[5], list[8], list[15]);
        set2.push(list[2], list[9], list[6], list[10], list[16]);
        set3.push(list[7], list[11], list[17], list[12], list[14]);
      } else if (num === 3) {
        set1.push(list[1], list[3], list[6], list[10], list[18]);
        set2.push(list[2], list[11], list[7], list[12], list[19]);
        set3.push(list[1], list[3], list[6], list[10], list[18]);
        set4.push(list[2], list[11], list[7], list[12], list[19]);
      } else if (num === 4) {
        set1.push(list[1], list[3], list[7], list[12], list[21]);
        set2.push(list[2], list[13], list[8], list[14], list[22]);
        set3.push(list[9], list[15], list[23], list[16], list[18]);
        set4.push(list[1], list[3], list[7], list[12], list[21]);
        set5.push(list[2], list[13], list[8], list[14], list[22]);
      }
    }

    return [set1, set2, set3, set4, set5];
  }

  render() {
    
    return (
      <section className="returnUser">
        <h2>{`Welcome Back, ${this.context.currentUser}`}</h2>
        <p>Below you can find your own custom workout plan!</p>
        <ul>
          <p>Here are some basic concepts to help you meet your goals!</p>
          <li>Perform each exercise for 2 to 5 sets.</li>
          <li>
            In each set perform 6 to 15 repetitions if weighted, or 15 to 30
            repitions if body weight. (lower reps for power, higher reps for
            endurance)
          </li>
          <li>
            WARNING: Exercises performed without proper form can put you at
            serious risk.
            </li>
            <li>
            MAKE SURE TO READ THE INSTRUCTIONS OR WATCH THE VIDEO FOR EACH
            EXERCISE!
          </li>
        </ul>

        {this.generateDayList()}
      </section>
    );
  }
}

export default ReturnUserPage;
