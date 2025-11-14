import { Button } from "react-bootstrap";
import RatingBar from "./RatingBar";
import { useContext } from "react";
import AppContext from "../data/AppContext";
import { useNavigate } from "react-router";

function ProfileCard2({ profile }) {
  const context = useContext(AppContext);
  const dispatch = context.dispatch;

  let navigate = useNavigate();

  return (
    <div className="d-flex justify-content-between">
      <h2>{profile.name}</h2>

      <div>
        <RatingBar rating={profile.rating}></RatingBar>
        <Button
          onClick={() => navigate(`/lab04/edit/${profile.id}`)}
          className="m-1"
        >
          Edit
        </Button>
        <Button
          className="m-1"
          onClick={() => dispatch({ type: "check", id: profile.id })}
        >
          Check
        </Button>

        <Button
          className="m-1"
          onClick={() => dispatch({ type: "rate", id: profile.id })}
        >
          Rate
        </Button>
        <Button
          className="btn-danger m-1"
          onClick={() => {
            dispatch({ type: "delete", id: profile.id });
          }}
        >
          Delete
        </Button>
        {profile.checked && "✔"}
      </div>
    </div>
  );
}

export default ProfileCard2;
