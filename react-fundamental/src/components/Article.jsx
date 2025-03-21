import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span>-- Baru</span>;
};

// const NewArticle = () => {
//   return <span>-- Baru</span>;
// };

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date}, tags: {props.tags.join(", ")}{" "}
        {/* {props.isNew ? "--> New" : "lama"} */}
        {/*  cara singkat conditional rendering */}
        <ArticleStatus isNew={props.isNew} />
        {/* {props.isNew && NewArticle()} */}
      </small>
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
}

export default Article;
