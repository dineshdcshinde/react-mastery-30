import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function Fifteen() {
  const [formData, setFormData] = useState({
    artist: "",
    songPoster: "",
    songName: "",
  });

  const [songStore, setSongStore] = useState(() => {
    return JSON.parse(localStorage.getItem("songStore")) || [];
  });

  useEffect(() => {
    localStorage.setItem("songStore", JSON.stringify(songStore));
  }, [songStore]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.artist || !formData.songPoster || !formData.songName) {
      alert("All fields are required!");
      return;
    }

    const newSong = { ...formData, id: nanoid() };
    setSongStore([...songStore, newSong]);
    setFormData({ artist: "", songPoster: "", songName: "" });
  };

  const handleRemove = (id) => {
    setSongStore(songStore.filter((song) => song.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5">Song Collection</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-5 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={formData.artist}
          onChange={handleChange}
          className="w-full p-2 mb-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="songPoster"
          placeholder="Song Poster URL"
          value={formData.songPoster}
          onChange={handleChange}
          className="w-full p-2 mb-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="songName"
          placeholder="Song Name"
          value={formData.songName}
          onChange={handleChange}
          className="w-full p-2 mb-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
        >
          Add Song
        </button>
      </form>

      <h3 className="text-2xl mt-6">Stored Songs</h3>
      {songStore.length === 0 ? (
        <p className="text-gray-400">No songs added yet.</p>
      ) : (
        <div className="cardContainer flex  gap-3 flex-wrap w-[80%] m-auto">
          {songStore.map(({ songPoster, songName, artist, id }) => (
            <div
              key={id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col items-center w-64 h-80 overflow-hidden group"
            >
              <div className="imageSection w-full h-40 overflow-hidden flex justify-center">
                <img
                  src={songPoster}
                  alt={songName}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="cardCenter flex flex-col items-center flex-1 text-center mt-3">
                <p className="text-lg font-semibold text-white">{songName}</p>
                <p className="text-gray-400">{artist}</p>
              </div>

              <div className="deleteButton flex justify-center w-full">
                <button
                  onClick={() => handleRemove(id)}
                  className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Fifteen;
