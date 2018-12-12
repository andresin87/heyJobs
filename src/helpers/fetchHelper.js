export default async (fetchMethod, args, HttpResponseExpected) => {
  try {
    const response = await fetchMethod(...args);
    if (response.status !== HttpResponseExpected) {
      throw new Error('Unexpected response method');
    }
    return response.data;
  } catch (error) {
    throw new Error('Unexpected error');
  }
}