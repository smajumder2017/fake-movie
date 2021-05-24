const initialState = {
  name: "",
  email: "",
  phone: "",
  image: "",
  address: "",
  loading: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_user_details_request":
      state = { ...state, loading: true };
      break;

    case "fetch_user_details_success":
      state = { ...state, ...action.payload, loading: false };
      break;

    case "fetch_user_details_failure":
      state = { ...state, loading: false };
      break;
    case "save_user_details_request":
      state = { ...state, loading: false };
      break;
    case "save_user_details_success":
      state = { ...state, ...action.payload, loading: false };
      break;
    case "save_user_details_failure":
      state = { ...state, loading: false };
      break;
    default:
      break;
  }
  return state;
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_movies_request":
      state = { ...state, loading: true };
      break;

    case "fetch_movies_success":
      state = { ...state, ...action.payload, loading: false };
      break;

    case "fetch_movies_failure":
      state = { ...state, loading: false };
      break;
    case "save_movies_request":
      state = { ...state, loading: false };
      break;
    case "save_movies_success":
      state = { ...state, ...action.payload, loading: false };
      break;
    case "save_movies_failure":
      state = { ...state, loading: false };
      break;
    default:
      break;
  }
  return state;
};
