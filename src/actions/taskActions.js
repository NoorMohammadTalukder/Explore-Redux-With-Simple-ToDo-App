// actions/taskActions.js

export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  export const removeTask = (index) => {
    return {
      type: 'REMOVE_TASK',
      payload: index,
    };
  };
  
  export const completeTask = (index) => {
    return {
      type: 'COMPLETE_TASK',
      payload: index,
    };
  };
  
  export const undoCompleteTask = (index) => {
    return {
      type: 'UNDO_COMPLETE_TASK',
      payload: index,
    };
  };
  
  export const removeCompletedTask = (index) => {
    return {
      type: 'REMOVE_COMPLETED_TASK',
      payload: index,
    };
  };
  