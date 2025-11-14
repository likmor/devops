import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useData from "./useData";
import useDispatch from "./useDispatch";

function chunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}
function MyContainer({ El }) {
  const items = useData();
  const dispatch = useDispatch();
  const rows = chunkArray(items, 1);
  return (
    <div style={{display: "flex", alignItems: "stretch", flexDirection: "column", width: "600px"}}>
      {rows.map((pair, index) => (
        <Row key={index}>
          {pair.map((person) => (
            <Col key={person.id}>
              <El {...person} dispatch={dispatch} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default MyContainer;
