import React, { useState, useEffect } from "react";
import reactSvg from "../../../assets/react.svg";
import { nanoid } from "nanoid";
const Seventeen = () => {
  const [pageNumber, setPageNumber] = useState(3);
  const [photoData, setPhotoData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPhotos = async () => {
    setLoading(true);
    const photos = await fetch(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=10`
    );
    const data = await photos.json();
    setPhotoData((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getPhotos();
  }, [pageNumber]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPageNumber((prev) => prev + 1);
    }
  };
  console.log(pageNumber);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="infiniteWrapper w-full">
      <h2 className="text-center pt-2 font-sans font-semibold text-3xl">
        Infinite Scrolling
      </h2>
      <div className="randomPhotosWrapper flex justify-center flex-wrap items-center  mt-2 w-full overflow-x-hidden">
        {photoData.map((photo) => {
          const { download_url, author } = photo;
          return (
            <div
              className="photoWrapper w-full sm:w-1/2 lg:w-1/3 p-2 hover:scale-105 transition-all cursor-pointer"
              key={nanoid()}
            >
              <img
                src={download_url}
                alt={author}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          );
        })}

        {loading && (
          <div className="flex sm:flex-col lg:flex-row justify-center w-full flex-wrap ">
            {[...Array(6)].map(() => (
              <div key={nanoid()} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="w-full h-48 bg-gray-300 animate-pulse rounded-lg"></div>
              </div>
            ))}
          </div>
        )}
      </div>
      ;
    </div>
  );
};

export default Seventeen;
