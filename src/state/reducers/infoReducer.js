const intialState = {
  data: []
};

export default function InfoReducer(state = intialState, action) {
  switch (action.type) {
    case "GET_INFO":
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
}
