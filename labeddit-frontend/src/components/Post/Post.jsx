import { ButtonComments } from "../ButtonComment/ButtonComment";
import { ButtonLike } from "../ButtonLike/ButtonLike";

export const Post = () => {
  return (
    <article>
      <a href="">
        <p>Enviado por: {}</p>
        {/* V Aqui será o content */}
        <p>{}</p>

        <ButtonLike 
        valueLike="" 
        valueDeslike="" />
        
        <ButtonComments 
        valueComments="" />
      </a>
    </article>
  );
};
