
const initialState = {
  studentDetails: [],
  searchText: "",
  error:0,
  marks: "ascending",
  name:"ascending"
};

let students;
function rootReducer(state = initialState , action) {

  let nameURLForAscend = "https://cdn1.imggmi.com/uploads/2019/1/24/7697772a5a56a9b14e8ddef7b45f2926-full.png"
  let nameURLForDescend = "https://cdn1.imggmi.com/uploads/2019/1/24/abe9b00f0f7f0d4b33953f80a0b017e0-full.png"
  
  let marksURLForAscend = "https://cdn1.imggmi.com/uploads/2019/1/24/96ca79b0d14adfd750b667d37630d8e4-full.png"
  let marksURLForDescend = "https://cdn1.imggmi.com/uploads/2019/1/24/ec016e66c634f5db19f9c80638c950a7-full.png"


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
    if(action.payload[110]) {
      state.error = 1;
    }

    else{
      state.error = 2;
    } 

    students = action.payload

    // console.log(students)
    return (Object.assign({}, state, {
        studentDetails: action.payload,
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
        studentDetails: studentData.sort(ascendingByNames),
        nameURL: nameURLForAscend,
        markURL:undefined,
        name:"descending",
        marks: "ascending"
      });

    case "DESCENDING":
      return Object.assign({}, state, {
        studentDetails: studentData.sort(descendingByNames),
        nameURL: nameURLForDescend,
        markURL:undefined,
        name:"ascending",
        marks:"ascending"
      });

    case "ASCENDING_MARKS":
      for (let key in state.studentDetails) {
        if (state.studentDetails.hasOwnProperty(key))   {
            studentData[key-110] = state.studentDetails[key]
        }
      }

      return Object.assign({}, state, {
        studentDetails: studentData.sort(ascendingByMarks),
        markURL: marksURLForAscend,
        nameURL:undefined,
        marks: "descending",
        name: "ascending"
      }); 

    case "DESCENDING_MARKS":
      return Object.assign({}, state, {
        studentDetails: studentData.sort(descendingByMarks),
        markURL: marksURLForDescend,
        nameURL:undefined,
        marks: "ascending",
        name: "ascending"
    }); 

    case "FETCH_FAILED":
      return Object.assign({}, state, {
        error:2,
      });


    case "SEARCH":
      for (let key in students) {
        if (students.hasOwnProperty(key))         
            studentData[key-110] = students[key]
      }

      if(state.nameURL === nameURLForAscend) {
        studentData = studentData.sort(ascendingByNames)
      }

      else if(state.nameURL === nameURLForDescend) {
        studentData = studentData.sort(descendingByNames)
      }

      else if(state.markURL === marksURLForAscend ) {
        studentData = studentData.sort(ascendingByMarks)
      }

      else if(state.markURL === marksURLForDescend) {
        studentData = studentData.sort(descendingByMarks)
      }

      return Object.assign({}, state, {
        studentDetails: studentData.filter(
            student => student.name.slice(0, action.value.length) === action.value),
        searchText: action.value
      }); 

    default:
      return state;
  }
}


function ascendingByNames(a, b) {
  // console.log(a.name, b.name)
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function descendingByNames(a, b) {
  if (a.name < b.name)
      return 1;
  if (a.name > b.name)
      return -1;
  return 0;
}

function ascendingByMarks(a, b) {
  // console.log(a.marks)
  if (sum(a.marks) < sum(b.marks))
      return -1;
  if (sum(a.marks) > sum(b.marks))
      return 1;
  return 0;
}

function descendingByMarks(a, b) {
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