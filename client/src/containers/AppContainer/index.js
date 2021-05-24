import { Route } from "react-router-dom";
import HomeContainer from "../HomeContainer";
import MoviesContainer from "../MoviesContainer";
import ProfileContainer from "../ProfileContainer";

import { connect } from "react-redux";

import { fetchUserAction } from "./../../redux/actions";
import { useEffect } from "react";

const AppContainer = (props) => {
  useEffect(() => {
    props.fetchUserAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container mt-5">
      <Route path="/" exact render={(props) => <HomeContainer {...props} />} />
      <Route
        path="/movies"
        exact
        render={(props) => <MoviesContainer {...props} />}
      />
      <Route
        path="/profile"
        exact
        render={(props) => <ProfileContainer {...props} />}
      />
    </main>
  );
};

const mapStateToProps = (state) => ({
  profile: state,
});

export default connect(mapStateToProps, {
  fetchUserAction,
})(AppContainer);
