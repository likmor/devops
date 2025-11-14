import "bootstrap/dist/css/bootstrap.min.css";
import MyContainer from "../components/MyContainer";
import ProfileCard2 from "../components/ProfileCard2";

function Lab03() {
  const Item = ({ name, id, rating, checked, dispatch }) => <ProfileCard2 profile={{ id, name, checked, rating }} dispatch={dispatch} />;
  return (
    <>
      <MyContainer El={Item}></MyContainer>
    </>
  );
}

export default Lab03;
