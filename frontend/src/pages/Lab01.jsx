import ProfileCardWrapper from "../components/ProfileCardWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import useData from "../components/useData";

function Lab01() {
  const items = useData();
  return (
    <>
      <ProfileCardWrapper data={items} columnNumber={3}></ProfileCardWrapper>
    </>
  );
}

export default Lab01;
