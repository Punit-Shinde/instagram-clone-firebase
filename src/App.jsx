import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import { db } from "./components/firebase";

const App = () => {
  const [posts, setposts] = useState([
    {
      username: "Monkey_D_luffy",
      caption: "My ship thousand sunny",
      postimageURL:
        "https://cdna.artstation.com/p/assets/images/images/067/288/518/large/nico-bechennec-shousand-sunny.jpg?1695032256",
    },
    {
      username: "Monkey_D_luffy",
      caption: "My ship thousand sunny",
      postimageURL:
        "https://wallpapersmug.com/download/3840x2400/01e1be/pirate-monkey-d-luffy-from-one-piece-anime.jpg",
    },
  ]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      // every time new post(doc) is added to the collection it will be pushed into posts array
      setposts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App bg-[#fafafa]">
      <Header />

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          postimageURL={post.postimageURL}
        />
      ))}
    </div>
  );
};

export default App;
