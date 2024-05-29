import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://dummyapi.online/api/movies";
  console.log("API URL", API_URL);

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      // Sort movies by rating from highest to lowest
      const sortedMovies = [...data].sort((a, b) => b.rating - a.rating);

      setPosts(sortedMovies);
    } catch (error) {
      console.log("Error fetching data:", error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  let postElements = [];
  posts.forEach((post) => {
    postElements.push(<Product key={post.id} post={post} />);
    console.log("Image show ", post.image);
  });

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[180vh]">
          {postElements}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
