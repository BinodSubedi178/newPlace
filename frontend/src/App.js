import React, { useState } from "react";

import HeadingComp from "./components/GoalList/HeadingComp";
import NewGoal from "./components/NewGoal/NewGoal";
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {
      id: 'exampleGoal',
      text: "This is an example Goal."
    }
  ]);

  const addNewGoalHandler = (newGoal)=>{
    // setCourseGoals(courseGoals.concat(newGoal)); // This is the first way to add new goal but not recommended
    setCourseGoals((prevCourseGoals)=> prevCourseGoals.concat(newGoal)); // This is the recommended way to add new goal
  }

  return (
    <div>
      <h2>Course Goals</h2>
      <h5>Add Your Own Goals using the text field below.</h5>
      <NewGoal onAddGoal = {addNewGoalHandler}/>
      <HeadingComp goals = {courseGoals} />
    </div>
  );
};

export default App;
