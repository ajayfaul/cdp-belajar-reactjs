function Article(props) {
  return (
    <>
      <div>{props.name}</div>
      <div>
        {props.titles.map((title) => {
          return <p>{title}</p>;
        })}
      </div>
    </>
  );
}

export default Article;
