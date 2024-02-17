/* 


Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignment with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}

If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.
You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? 
Use try/catch and other logic to handle these types of errors gracefully.

*/

const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };

  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };

  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];



//pulling everything out of the arrays

const learnName = [];
const assignment = [1,2,3];
const grade = [];
const assignmentTotal = []

for(let i=0; i<LearnerSubmissions.length; i++){
  learnName.push(LearnerSubmissions[i].learner_id);
}
for(let i=0; i<LearnerSubmissions.length; i++){
  grade.push(LearnerSubmissions[i].submission.score);
}
for(let i=0; i<AssignmentGroup.assignments.length; i++){
  assignmentTotal.push(AssignmentGroup.assignments[i].points_possible);
}

let average1 = 0;

/* 
learnName[i];

if(learnName[i] != 125){
  let average2 = 0
  copy of code
}

*/

for(let j=0; j<grade.length;j++){
  average1 += grade[j];
  average1 = average1/grade.length;
}

console.log(average1);
console.log(learnName);
console.log(grade); 
console.log(assignmentTotal)

const getData = {
  id: []
}

getData['id'].push(learnName);
  

console.log(getData);




/* function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]) {

    


    return result;
} */


  //learner's total scores
  const learnerAverage = {
    "id": 0, //number
    "avg": 0,
    "assignment id": 0
  }
  

  // console.log(`Submission Data:`, submissions );



//need to output console.log(obj.id, obj.avg, obj.assignmentid);
/* Example answers 

const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ]; 
  
  */
// Parse submission data.
// console.log(`Submission Data:`, submissions );
// Check to see if the submission was late; if so, deduct 10% of the maximum possible points.
// Find existing data for this learner, if any.
// If the learner already has data, add the new score to the existing data.
// Calculate the average score for each learner and remove the extra data.