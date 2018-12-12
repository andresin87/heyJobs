const initialState = {
  message: null,
  jobs: [],
  job: {},
};

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.data,
      };
    case 'SET_JOBS':
      return {
        ...state,
        jobs: action.data,
      };
    case 'SET_JOB':
      return {
        ...state,
        job: action.data
      };
    default:
      return state;
  }
};

export { initialState };


