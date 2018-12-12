export default (fetchMethod, args, HttpResponseExpected) => {
  try {
    const response = fetchMethod(...args);
    if (response.status !== HttpResponseExpected) {
      throw new Error('Unexpected response method');
    }
    return response.data;
  } catch (error) {
    throw new Error('Unexpected error');
  }
}