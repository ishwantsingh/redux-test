// const likeAction = (clicked, likes) => {
//   return {
//     type: "LIKE_ME",
//     payload: {
//       clicked,
//       likes
//     }
//   };
// };

const likeAction = () => {
  return {
    type: "LIKE_ME",
    payload: {}
  };
};

export default likeAction;
