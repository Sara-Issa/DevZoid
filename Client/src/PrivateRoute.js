import { Redirect, Route } from "react-router-dom";

function PrivateRoute(props) {
  return (
    <>
      {(localStorage.getItem("token") &&
        JSON.parse(localStorage.getItem("user")).role === "freelancer") ||
      (localStorage.getItem("token") &&
        JSON.parse(localStorage.getItem("user")).role === "user") ? (
        <Route path={props.path} component={props.component} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

export default PrivateRoute;
