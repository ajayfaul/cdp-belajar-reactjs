import { useState, useEffect } from "react";
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

  // dulu kita menggunakan lifecycle method componentDidMount
  // terus ada componentDidUpdate
  // terus ada componentWillUnmount
  // sekarang kita menggunakan useEffect hook untuk menggantikan ketiga lifecycle method tersebut

  useEffect(() => {
    console.log("Render");
    // useEffect ini akan dijalankan setiap kali ada perubahan pada posts
    // mengganti componentWillUnmount dengan return di useEffect
    return () => {
      console.log("cleanup");
    };
  }, [posts]);

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
