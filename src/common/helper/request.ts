export const getRequestHeader = (): Headers => {
  return new Headers({
    "Content-Type": "application/json"
  });
};

export const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response && response.statusText) as any;
    error.response = response;
    throw error;
  }
};
