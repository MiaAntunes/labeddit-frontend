import like from "../../assets/like.png";
import deslike from "../../assets/deslike.png";

export const ButtonLike = (props) => {
  return (
    <div>
      <button>
        <img src={like} alt="Button do Like" />
        <p>{props.valueLike}</p>
      </button>
      <button>
        <img src={deslike} alt="Button do deslike" />
        <p>{props.valueDeslike}</p>
      </button>
    </div>
  );
};
