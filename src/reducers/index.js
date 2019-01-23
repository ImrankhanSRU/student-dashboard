const initialState = {
  studentDetails: [],
};
// console.log(initialState.studentDetails)



function rootReducer(state = initialState, action) {
  
  let dataObj = {}
  let studentData = []
  
  if(state.studentDetails.length) {
    for(let student of state.studentDetails) {
      dataObj[student.rollNo] = student
    }
    state.studentDetails = dataObj
    for (let key in state.studentDetails) {
      if (state.studentDetails.hasOwnProperty(key))         
          studentData[key-110] = state.studentDetails[key]
    }
  }

  // console.log(state.studentDetails)

  switch (action.type) {
    case "DATA_LOADED":
      return Object.assign({}, state, {
        studentDetails: action.payload,
        student: action.payload
      });

    case "ASCENDING":
      // console.log(studentData)
      for (let key in state.studentDetails) {
        if (state.studentDetails.hasOwnProperty(key))         
            studentData[key-110] = state.studentDetails[key]
      }


      return Object.assign({}, state, {
        studentDetails: studentData.sort(ascendByNames)
      });

    case "DESCENDING":

      return Object.assign({}, state, {
        studentDetails: studentData.sort(descendByNames)
      });

    case "ASCENDING_MARKS":
    for (let key in state.studentDetails) {
      if (state.studentDetails.hasOwnProperty(key))         
          studentData[key-110] = state.studentDetails[key]
    }
      return Object.assign({}, state, {
      studentDetails: studentData.sort(ascendByMarks)
    }); 

    case "DESCENDING_MARKS":
      // console.log(state.studentDetails)
      return Object.assign({}, state, {
      studentDetails: studentData.sort(descendByMarks)
    }); 

    case "SEARCH":
      for (let key in state.student) {
        if (state.student.hasOwnProperty(key))         
            studentData[key-110] = state.student[key]
      }
      return Object.assign({}, state, {
        studentDetails: studentData.filter(student => student.name.slice(0, action.value.length) === action.value)
    }); 

    default:
      return state;
  }
}


function ascendByNames(a, b) {
  // console.log(a.name, b.name)
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function descendByNames(a, b) {
  if (a.name < b.name)
      return 1;
  if (a.name > b.name)
      return -1;
  return 0;
}

function ascendByMarks(a, b) {
  // console.log(a.marks)
  if (sum(a.marks) < sum(b.marks))
      return -1;
  if (sum(a.marks) > sum(b.marks))
      return 1;
  return 0;
}

function descendByMarks(a, b) {
  if (sum(a.marks) < sum(b.marks))
      return 1;
  if (sum(a.marks) > sum(b.marks))
      return -1;
  return 0;
}


function sum(arr){
  let marks;
  marks = Object.values(arr)
  // console.log(marks) 
  return marks.reduce(function(a,b){
    return a + b
  }, 0);
}
export default rootReducer;