import useFetch from "../components/useFetch";
import { useParams } from "react-router";
import { Card } from "react-bootstrap"

function Commment({ name, body, email }) {
  return (
    <Card style={{ width: '800px' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

function Lab05Comments() {
  const { id } = useParams();
  const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (comments.length == 0  || post.length == 0) {
    return <h3>Loading...</h3>
  }

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", gap: "14px", width: "900px" }}>
      <h1>Comments</h1>
      <h2>{post?.body}</h2>
      {comments?.map((el) => <Commment key={el.id} name={el.name} body={el.body} email={el.email}></Commment>)}
    </div>
  );
}

export default Lab05Comments;
