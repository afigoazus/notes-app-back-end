const response = (res, statusCode, message, data) => {
  return res.status(statusCode).json({
    code: statusCode,
    status: statusCode < 400 ? 'Success' : 'Failed',
    message,
    data,
  });
};

export default response;
