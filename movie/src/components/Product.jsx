import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/MovieSlice";
import { useState } from "react";

const Product = ({ post }) => {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Movie added to favourite list");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Movie removed from favourite list");
  };

  return (
    <div
      className="flex flex-col items-center justify-between 
      hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-2xl"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.movie}
        </p>
      </div>
      <div>
        <p className="w-40 text-black-400 text-[10px] font-bold text-left">
          Rating: {post.rating}
        </p>
      </div>
      <div className="h-[180px] w-full flex items-center justify-center">
        <img
          src={post.image}
          className={`h-full w-full object-cover ${
            imageLoaded ? "" : "hidden"
          }`}
          alt={post.movie}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && <div className="h-full w-full bg-gray-200"></div>}
      </div>
      <div className="flex justify-between gap-3 items-center w-full mt-5">
        {movie.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-800 hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Movie
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-800 hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add Movie
          </button>
        )}

        <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-800 hover:text-white transition duration-300 ease-in"
          onClick={() => window.open(post.imdb_url, "_blank")}
        >
          Go to IMDB
        </button>
      </div>
    </div>
  );
};

export default Product;
