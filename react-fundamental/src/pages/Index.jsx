import { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setPosts(filteredPosts);

    setTotalPosts(filteredPosts.length);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {/* kita destructure title, tags, dan date */}

      {/* diperpendek lagi */}
      {posts.map((props, index) => (
        // <Article title={title} tags={tags} date={date} />
        // menggunakan spread operator
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
