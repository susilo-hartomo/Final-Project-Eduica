const defaultState = {
  teacherList: [],
  studentList: [],
  imageUrl: ''
}

export default function userReducer( state=defaultState, action ) {
  switch(action.type){

    case 'SET_PICTURE':
     return { ...state, imageUrl: state.imageUrl = action.payload};

    default:
      return state;
  }
}
