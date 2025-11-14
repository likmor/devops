function RatingBar({rating}) {
  let text = "";
  for (let i = 0; i < rating; i++) {
    text = text + "★";
  }
  for (let i = 0; i < 10 - rating; i++) {
    text += "☆";
  }

  return (text);
}

export default RatingBar;
