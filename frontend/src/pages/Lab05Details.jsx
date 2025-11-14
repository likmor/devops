import useFetch from "../components/useFetch";
import { useParams } from "react-router";

function Lab05Details() {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const renderObject = (obj) => {
    return Object.entries(obj).map(([key, value]) => (
      <div key={key} style={{ display: "flex", alignContent: "center" }}>
        <b>{key}:</b>&nbsp;
        {typeof value === "object" && value !== null ? (
          <>
            <div style={{ marginTop: "1rem" }}>{renderObject(value)}</div>
          </>
        ) : (
          <span>{value}</span>
        )}
      </div>
    ));
  };

  return (
    <div>
      <h2>User Details</h2>
      {user?.length != 0 ? (
        renderObject(user)
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Lab05Details;
