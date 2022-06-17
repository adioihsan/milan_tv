import stars0 from "../../assets/images/stars0.png";
import stars1 from "../../assets/images/stars1.png";
import stars2 from "../../assets/images/stars2.png";
import stars3 from "../../assets/images/stars3.png";
import stars4 from "../../assets/images/stars4.png";
import stars5 from "../../assets/images/stars5.png";
import stars0_5 from "../../assets/images/stars0_5.png";
import stars1_5 from "../../assets/images/stars1_5.png";
import stars2_5 from "../../assets/images/stars2_5.png";
import stars3_5 from "../../assets/images/stars3_5.png";
import stars4_5 from "../../assets/images/stars4_5.png";

function getStarsCmp(rating) {
  let stars = stars0;
  switch (true) {
    case rating > 0 && rating < 0.7:
      stars = stars0_5;
      break;
    case rating >= 0.7 && rating < 1.3:
      stars = stars1;
      break;
    case rating >= 1.3 && rating < 1.7:
      stars = stars1_5;
      break;
    case rating >= 1.7 && rating < 2.3:
      stars = stars2;
      break;
    case rating >= 2.3 && rating <= 2.7:
      stars = stars2_5;
      break;
    case rating >= 2.7 && rating < 3.3:
      stars = stars3;
      break;
    case rating >= 3.3 && rating <= 3.7:
      stars = stars3_5;
      break;
    case rating >= 3.7 && rating < 4.3:
      stars = stars4;
      break;
    case rating >= 4.3 && rating < 4.7:
      stars = stars4_5;
      break;
    case rating >= 4.7 && rating <= 5:
      stars = stars5;
      break;
    default:
      stars = stars0;
  }
  return stars;
}
export default getStarsCmp;
