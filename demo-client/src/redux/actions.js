export const fetchUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: "fetch_user_details_request", payload: "" });
    const _res = await fetch("http://localhost:5000/user", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await _res.json();
    if (_res.ok) {
      dispatch({ type: "fetch_user_details_success", payload: response });
      return response;
    }
    dispatch({ type: "fetch_user_details_failure", payload: response });
    return Promise.reject(response);
  } catch (error) {
    dispatch({ type: "fetch_user_details_failure", payload: error });
    return Promise.reject(error);
  }
};

export const saveUserAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: "save_user_details_request", payload: "" });
    const _res = await fetch("http://localhost:5000/user", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await _res.json();

    if (_res.ok) {
      dispatch({ type: "save_user_details_success", payload: response });
      return response;
    }
    dispatch({ type: "save_user_details_failure", payload: response });
    return Promise.reject(response);
  } catch (error) {
    dispatch({ type: "save_user_details_failure", payload: error });
    console.log(error);
    return Promise.reject(error);
  }
};
