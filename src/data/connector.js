import data from './data.json';

export const gettingJobs = async (timeout = 300) => {
  const dataSolved = await new Promise(resolve => setTimeout(() => resolve({
    status: 200,
    data: data,
  }), timeout));
  return dataSolved;
};

export const gettingJob = async (id, timeout = 300) => {
  const dataSolved = await new Promise((resolve, reject) => setTimeout(() => {
      const response = data.find(dataIndexed => id === dataIndexed.id);
      (response !== undefined) ?
        resolve({
          status: 200,
          data: response,
        }) : reject({
          status: 404,
          error: "Not Found",
        });
    }, timeout)
  );
  return dataSolved;
};
