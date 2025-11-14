import { Table, Button } from "react-bootstrap";
import useFetch from "../components/useFetch";
import { useReducer, useEffect } from "react";
import Lab05Reducer from "../data/Lab05Reducer";
import { useNavigate } from "react-router";
import { PostAccordion } from "../components/PostAccordion";
import { TableDropdown } from "../components/TableDropdown";

function Lab05() {
  const navigate = useNavigate();
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
  const tableData = posts.map((p) => {
    return {
      user: users.find((u) => u.id === p.userId),
      post: p,
      comments: comments.filter((c) => c.postId === p.id),
    };
  });
  const [state, tableDispatch] = useReducer(Lab05Reducer, tableData);

  useEffect(() => {
    if (posts.length && users.length && comments.length) {
      tableDispatch({ type: "init", init: tableData });
    }
  }, [posts, users, comments]);
  if (state.length == 0) {
    return <h3>Loading...</h3>;
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Table striped bordered hover style={{ width: "900px" }}>
        <thead>
          <tr>
            <th>
              <TableDropdown
                name="User"
                action="user"
                dispatch={tableDispatch}
              ></TableDropdown>
            </th>
            <th style={{ width: "900px" }}>
              <TableDropdown
                name="Post title"
                action="title"
                dispatch={tableDispatch}
              ></TableDropdown>
            </th>
            <th>
              <TableDropdown
                name="Comment count"
                action="commentCount"
                dispatch={tableDispatch}
              ></TableDropdown>
            </th>
          </tr>
        </thead>
        <tbody>
          {state.map((el) => (
            <tr key={el.post?.id}>
              <td>
                <Button
                  variant="link"
                  onClick={() => navigate(`/lab05/users/${el.user?.id}`)}
                >
                  {el.user?.name}
                </Button>
              </td>
              <td>
                {el.post ? (
                  <PostAccordion
                    name={el.post?.title}
                    body={el.post?.body}
                  ></PostAccordion>
                ) : null}
              </td>
              <td>
                <Button
                  variant="link"
                  onClick={() =>
                    navigate(`/lab05/posts/${el.post?.id}/comments`)
                  }
                >
                  {el.comments?.length}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Lab05;
