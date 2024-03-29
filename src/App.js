import React from "react";
import { connect } from "react-redux";

import { Button, Icon, Label } from "semantic-ui-react";

import likeAction from "./state/actions/likeActionCreator";
import infoAction from "./state/actions/infoAction";

class App extends React.Component {
  // state = {
  //   clicked: false,
  //   likes: 0
  // };

  // increaseLikes = () => {
  //   this.setState({
  //     clicked: true,
  //     likes: this.state.likes
  //   });
  // };

  submitHandler = () => {
    // e.preventDefault();
    // this.props.likeAction(this.state.clicked, this.state.likes);
    this.props.likeAction();
  };
  infoHandler = () => {
    this.props.infoAction();
  };

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.submitHandler}>Like me ples</Button>
        </div>
        <div>{this.props.likes}</div>
        <div>
          <button onClick={this.infoHandler}> get info</button>
        </div>

        <div>
          movies:
          <div>
            {this.props.movies &&
              this.props.movies.map(movie => {
                return (
                  <div key={movie.id}>
                    {movie.id}
                    {""}:{movie.title} : {movie.releaseYear}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    likeAction: () => {
      dispatch(likeAction());
    },
    infoAction: () => dispatch(infoAction())
  };
}
function mapStateToProps(state) {
  console.log(state);
  return {
    likes: state.likeReducer.likes,
    movies: state.infoReducer.data
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
