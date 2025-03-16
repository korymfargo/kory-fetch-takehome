import DogCard from "@components/DogCard";
import Filterbar from "@components/Filterbar";
import Navbar from "@components/Navbar";
import { ActionAddDogs, RootState } from "@store";
import { Dog, SortOrder } from "@types";
import { fetchDogs } from "@utils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dogs = useSelector((state: RootState) => state.dogs.dogs);
  const [dogIds, setDogIds] = useState<Array<string>>([]);

  const saveDogToStore = (dogs: Array<Dog>) => dispatch(ActionAddDogs(dogs));

  const handleFilter = (
    breed: string,
    minAge: number,
    maxAge: number,
    sort: SortOrder
  ) => {
    if (isLoading) {
      // prevent multiple api calls
      return;
    }

    setIsLoading(true);
    fetchDogs({ breeds: [breed], minAge, maxAge, sort }, saveDogToStore, dogs)
      .then((dogIds) => {
        setDogIds(dogIds);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-blue-100">
      <Navbar />

      <Filterbar handleFilter={handleFilter} isLoading={isLoading} />

      {dogIds.map((dogId) => (
        <DogCard id={dogId} key={dogId} />
      ))}
    </div>
  );
}

export default Search;
