import { Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";

const HomeContainer = (props) => (
  <div>
    {props.profile.loading && <div>Loading....</div>}
    <Jumbotron>
      <h3>{`Good Morning! ${props?.profile?.name}`}</h3>
    </Jumbotron>
  </div>
);

export default connect((state) => ({ profile: state.user }))(HomeContainer);
