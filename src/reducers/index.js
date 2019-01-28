
const initialState = {
  studentDetails: [],
  searchText: "",
  error:0,
  loading:0
};

function rootReducer(state = initialState, action) {
  
  let dataObj = {}
  let studentData = []
  
  if(state.studentDetails.length) {
    for(let student of state.studentDetails) {
      if(student)
        dataObj[student.rollNo] = student
    }
    state.studentDetails = dataObj
    for (let key in state.studentDetails) {
      if (state.studentDetails.hasOwnProperty(key))         
          studentData[key-110] = state.studentDetails[key]
    }
  }

  switch (action.type) {
    case "DATA_LOADED":
    console.log(action.payload)
    if(action.payload[110]) {
      state.error = 1;
    }

    else{
      state.error = 2;
    }
      return (Object.assign({}, state, {
        studentDetails: action.payload,
        student: action.payload,
        nameURL:undefined,
        markURL:undefined,
      }));

      // return action.payload

    case "ASCENDING":
      for (let key in state.studentDetails) {
        if (state.studentDetails.hasOwnProperty(key))         
            studentData[key-110] = state.studentDetails[key]
      }

      return Object.assign({}, state, {
        studentDetails: studentData.sort(ascendByNames),
        nameURL: "https://cdn1.imggmi.com/uploads/2019/1/24/7697772a5a56a9b14e8ddef7b45f2926-full.png",
        markURL:undefined
      });

    case "DESCENDING":
      return Object.assign({}, state, {
        studentDetails: studentData.sort(descendByNames),
        nameURL: "https://cdn1.imggmi.com/uploads/2019/1/24/abe9b00f0f7f0d4b33953f80a0b017e0-full.png",
        markURL:undefined
      });

    case "ASCENDING_MARKS":

      for (let key in state.studentDetails) {
        if (state.studentDetails.hasOwnProperty(key))         
            studentData[key-110] = state.studentDetails[key]
      }
      return Object.assign({}, state, {
        studentDetails: studentData.sort(ascendByMarks),
        markURL: "https://cdn1.imggmi.com/uploads/2019/1/24/96ca79b0d14adfd750b667d37630d8e4-full.png",
        nameURL:undefined
      }); 

    case "DESCENDING_MARKS":
      return Object.assign({}, state, {
        studentDetails: studentData.sort(descendByMarks),
        markURL: "https://cdn1.imggmi.com/uploads/2019/1/24/ec016e66c634f5db19f9c80638c950a7-full.png",
        nameURL:undefined
    }); 

    case "FETCH_FAILED":
      console.log("failed")
      return Object.assign({}, state, {
        error:2,
        loading:0

      });


    case "SEARCH":
      for (let key in state.student) {
        if (state.student.hasOwnProperty(key))         
            studentData[key-110] = state.student[key]
      }
      return Object.assign({}, state, {
        studentDetails: studentData.filter(student => student.name.slice(0, action.value.length) === action.value),
        nameURL:undefined,
        markURL:undefined,
        searchText: action.value
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