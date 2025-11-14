import ProfileCard from "./ProfileCard";

function ProfileCardWrapper({ data, columnNumber }) {
  let size = (1 / columnNumber) * 100;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
      {data.map((el, index) =>
        <ProfileCard key={index} profile={el} />
      )}
    </div>
  );
}

export default ProfileCardWrapper;
