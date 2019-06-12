# LOTTERY - REACT STATE PATTERNS EXERCISE

1. Create a Stateless Component called Ball and style it.
2. Create the Lottery Component:
  * define defaultProps: title, maxBalls and maxNum;
  * set the initial state "nums" to an array of n element equal to maxBalls;
  * define a generate method where the new state is set avoiding modify the original "nums" array. To do so it takes not an obj, but a callback in which we use .map() to generate a new array and use it as our new state;
3. Style the Lottery Component;