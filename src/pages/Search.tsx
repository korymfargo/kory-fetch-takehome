import DogCard from "@components/DogCard";
import Filterbar from "@components/Filterbar";
import Navbar from "@components/Navbar";
import { Dog } from "@types";
import { fetchDogs } from "@utils";
import { useState } from "react";

function Search() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dogs, setDogs] = useState<Array<Dog>>([]);

  const handleFilter = () => {
    if (isLoading) {
      // prevent multiple api calls
      return;
    }

    setIsLoading(true);
    fetchDogs()
      .then((dogs) => {
        setDogs(dogs);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-blue-100">
      <Navbar />

      <Filterbar handleFilter={handleFilter} />

      {dogs.map((dog) => (
        <DogCard id={dog.id} key={dog.id} />
      ))}
    </div>
  );
}

export default Search;
