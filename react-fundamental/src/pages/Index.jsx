import { useState } from "react";
import posts from "../posts.json";
import Article from "../components/Article";

function Homepage() {
  //   let search = "";
  const [search, setSearch] = useState("");
  const changeSearch = (event) => {
    // console.log(event.target.value);
    // search = event.target.value;
    setSearch(event.target.value);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Cari Artikel: <input onChange={changeSearch}></input>{" "}
      </div>
      <small>Ditemukan 0 data dengan pencarian kata {search}</small>
      {/* kita destructure title, tags, dan date */}
      {posts.map(({ title, tags, date }, index) => (
        // <Article title={title} tags={tags} date={date} />
        // menggunakan spread operator
        <Article {...{ title, tags, date }} key={index} />
      ))}
    </>
  );
}

export default Homepage;
