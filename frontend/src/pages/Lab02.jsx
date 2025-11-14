import ProfileCard from "../components/ProfileCard";
import { useParams } from "react-router";
import useData from "../components/useData";

function Lab02() {
  const people = useData();
  
  const { id } = useParams();
  const person = people.filter((el) => el.id == id)[0];
  if (id == null) {
    return <h2>Brak identyfikatora osoby</h2>;
  }
  return (
    <>
      {person ? (
        <ProfileCard profile={person} />
      ) : (
        <h2>Nie znaleziono osoby o tym identyfikatorze</h2>
      )}
    </>
  );
}

export default Lab02;
