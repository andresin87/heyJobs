export const setMessage = messageText => ({
  type: 'SET_MESSAGE',
  data: messageText,
});

export const setAsyncMessage = messageText => dispatch => (
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  }).then(() => dispatch(setMessage(messageText)))
);

export const setJobs = data => ({
  type: 'SET_JOBS',
  data,
});

export const setJob = data => ({
  type: 'SET_JOB',
  data,
});

export default {
  setMessage,
  setAsyncMessage,
  setJobs,
  setJob,
}