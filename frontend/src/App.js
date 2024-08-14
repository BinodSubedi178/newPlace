import React, { useState } from "react";

import HeadingComp from "./components/GoalList/HeadingComp";
import NewGoal from "./components/NewGoal/NewGoal";
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {
      id: "cg1",
      text: "Finish the course",
    },
    {
      id: "cg2",
      text: "Learn all about the course main topic",
    },
    {
      id: "cg3",
      text: "Help Other Students using F&Q section",
    }
  ]);

  const addNewGoalHandler = (newGoal)=>{
    // setCourseGoals(courseGoals.concat(newGoal)); // This is the first way to add new goal but not recommended
    setCourseGoals((prevCourseGoals)=> prevCourseGoals.concat(newGoal)); // This is the recommended way to add new goal
  }

  return (
    <div>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal = {addNewGoalHandler}/>
      <HeadingComp goals = {courseGoals} />
    </div>
  );
};

export default App;
