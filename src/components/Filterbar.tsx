import { useEffect, useState } from "react";
import { fetchBreeds } from "@utils";

function Filterbar() {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [minAge, setMinAge] = useState<number>(0);
  const [maxAge, setMaxAge] = useState<number>(50);

  const fetchAllBreeds = async () => {
    fetchBreeds().then((breeds) => {
      setBreeds(breeds);
    });
  };

  useEffect(() => {
    fetchAllBreeds();
  }, []);

  return (
    <div className="w-full shadow-md flex p-5 rounded-md bg-white">
      <select
        className="p-2 border rounded"
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        <option value="">All Breeds</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Min Age"
        className="p-2 border rounded-lg w-20"
        value={minAge}
        onChange={(e) => setMinAge(parseInt(e.target.value))}
      />

      <input
        type="number"
        placeholder="Max Age"
        className="p-2 border rounded-lg w-20"
        value={maxAge}
        onChange={(e) => setMaxAge(parseInt(e.target.value))}
      />
    </div>
  );
}

export default Filterbar;
