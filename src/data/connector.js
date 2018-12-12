import data from './data.json';

export const gettingJobs = () => {
  const dataSolved = ({
    status: 200,
    data: data,
  });
  return dataSolved;
};

export const gettingJob =  (id) => {
  const response = data.find(dataIndexed => id === dataIndexed.id);
  return (response !== undefined) ?
    ({
      status: 200,
      data: response,
    }) : ({
      status: 404,
      error: "Not Found",
    });
};
