function ProfileParagraph({ label, title }) {
  return (
    <div>
      <strong>{label}:</strong>
      <p className="p-1" >{title}</p>
    </div>
  );
}

export default ProfileParagraph;
