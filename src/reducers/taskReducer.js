// src/reducers/taskReducer.js

const initialState = {
    list: [],
    completedList: [], // Add completedList to the initial state
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      case 'REMOVE_TASK':
        return {
          ...state,
          list: state.list.filter((_, index) => index !== action.payload),
        };
      case 'COMPLETE_TASK':
        const completedTask = state.list[action.payload];
        return {
          ...state,
          list: state.list.filter((_, index) => index !== action.payload),
          completedList: [...state.completedList, completedTask], // Store completed task in completedList
        };
      case 'UNDO_COMPLETE_TASK':
        const undoneTask = state.completedList[action.payload];
        return {
          ...state,
          completedList: state.completedList.filter((_, index) => index !== action.payload),
          list: [...state.list, undoneTask],
        };
      case 'REMOVE_COMPLETED_TASK':
        return {
          ...state,
          completedList: state.completedList.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  