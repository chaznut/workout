const shuffler = () => {
  if (workoutType === 'Chest') {
    for (let i = 0; i < exerciseNumber; i++) {
      let exercise = chest[Math.floor(Math.random() * chest.length)];
      this.state.workout.includes(exercise.name)
        ? console.log('Found duplicates')
        : this.setState(prevState => ({
            workout: [...prevState.workout, exercise.name]
          }));
    }
  } else if (workoutType === 'Back') {
    for (let i = 0; i < exerciseNumber; i++) {
      let exercise = back[Math.floor(Math.random() * back.length)];
      this.state.workout.includes(exercise.name)
        ? console.log('Found duplicates')
        : this.setState(prevState => ({
            workout: [...prevState.workout, exercise.name]
          }));
    }
  } else if (workoutType === 'Shoulders') {
    for (let i = 0; i < exerciseNumber; i++) {
      let exercise = shoulders[Math.floor(Math.random() * shoulders.length)];
      this.state.workout.includes(exercise.name)
        ? console.log('Found duplicates')
        : this.setState(prevState => ({
            workout: [...prevState.workout, exercise.name]
          }));
    }
  } else if (workoutType === 'Legs') {
    for (let i = 0; i < exerciseNumber; i++) {
      let exercise = legs[Math.floor(Math.random() * legs.length)];
      this.state.workout.includes(exercise.name)
        ? console.log('Found duplicates')
        : this.setState(prevState => ({
            workout: [...prevState.workout, exercise.name]
          }));
    }
  } else if (workoutType === 'Arms') {
    for (let i = 0; i < exerciseNumber; i++) {
      let exercise = arms[Math.floor(Math.random() * arms.length)];
      this.state.workout.includes(exercise.name)
        ? console.log('Found duplicates')
        : this.setState(prevState => ({
            workout: [...prevState.workout, exercise.name]
          }));
    }
  } else {
    for (let i = 0; i < exerciseNumber; i++) {
      let exercise = abs[Math.floor(Math.random() * abs.length)];
      this.state.workout.includes(exercise.name)
        ? console.log('Found duplicates')
        : this.setState(prevState => ({
            workout: [...prevState.workout, exercise.name]
          }));
    }
  }
};

module.exports = shuffler;
