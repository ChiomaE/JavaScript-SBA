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

  //Calculates weighted average
function calculateWeightedAverage(assignments, submissions) {
  let totalScore = 0;
  let totalWeight = 0;
  for(let assingment of assignmments) {
    //finds the assignment id
    const submission = submissions.find(sub=> subassignment_if === assignments.id);

    //if submitted after due date, add penalty
    if(submission && new Date(submission.submission.submitted _at) <= new Date(assingment.due_at)) {
      const lateSubmission = new Date(submission.submission.submitted_at) > new Date(assignment.due_at);
      const latePenalty;

      if(lateSubmission){
        latePenalty = 0.1;
      } else {
        latePenalty=0;
      }

      //late penalty added
      const score  = submission.submission.score - (latePenalty*assignment.points_possible);
      //weighted score
      const weightedScore = (score/assingment.points_possible)*assingment.points_possible;

      totalScore+=weightedScore;
      totalWeight += assingment.points_possible;
    }

  }

  //avaoid division by 0
  if (totalWeight === 0){
    return 0;
  }

  return(totalScore/totalWeight) *100;

}

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  //verify the assignment is for the right course
  if(AssignmentGroup.course_id != CourseInfo.id){
    throw console.error("Assignment does not belong to this course");
  }

  //final information to be stored here
  const learnerData = [];


  /*
  Create a new set that holds:
  -> Learner Id
  -> weighted average(calls function that calculates the average based on parameters) 
  map function allows the set to be stored in key value pairs
  filter function  creates array of just the learner id
   */

  for(const learnerID of [...new Set(LearnerSubmissions.map(sub => sub.learner_id))]) {
    const learnerSubs = LearnerSubmissions.filter(sub => sub.learner_id === learnerID);
    const avg = calculateWeightedAverage(AssignmentGroup.assignments, learnerSubs); //learnerSubs passes the date submitted as a parameter to calculatedWeightedAverage function, function returns value to avg

    const learner = {
      id:learnerID,
      avg: avg
    }

    for (const submission of learnerSubs) {
      //finds the assignment using the assignment id
      const assignment = AssignmentGroup.assignments.find(a => a.id === submission.assignment_id);

      //checks if the assignment is due
      if(assignment && new Date(submission.submission.submitted_at) <= new Date(assingment.due_at)) {
        //assignmentScore = learner score/ total possible points *100 (returns in percentage format)
        const assignmentScore = (submission.submission.score / assignment.points_possible) * 100;

        //assignment score stored in learner object
        learner[assignment.id] = assignmentScore;
      }
    }
  

    learnerData.push(learner);
  }

  // pushes information to learnerData array
  return learnerData;


}