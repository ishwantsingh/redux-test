import axios from "axios";

const infoAction = () => {
  return dispatch => {
    axios
      .get("https://facebook.github.io/react-native/movies.json")
      .then(function(res) {
        console.log(res);
        let data = res.data.movies;
        dispatch({ type: "GET_INFO", payload: { data } });
        //return res;
      })
      //   .then(data => {
      //     dispatch({ type: "GET_INFO", payload: { data } });
      //   })
      .catch(err => console.log(err, "err"));
    //   return {
    //     type: "GET_INFO",
    //     payload: {
    //       data : data
    //     }
    //   };
  };
};

export default infoAction;
