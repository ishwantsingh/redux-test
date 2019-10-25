const intialState = {
  clicked: false,
  likes: 0
};

// export default function LikeReducer(state = intialState, action) {
//   switch (action.type) {
//     case "LIKE_ME":
//       return {
//         ...state,
//         likes: action.payload.likes + 1,
//         clicked: action.payload.clicked
//       };
//     default:
//       return state;
//   }
// }

export default function LikeReducer(state = intialState, action) {
  switch (action.type) {
    case "LIKE_ME":
      return {
        ...state,
        likes: state.likes + 1,
        clicked: true
      };
    default:
      return state;
  }
}
