import { RootState } from "@store";
import { useSelector } from "react-redux";

interface DogLargeViewProps {
  id: string | undefined;
}

function DogLargeView({ id }: DogLargeViewProps) {
  const dog = useSelector((state: RootState) =>
    id ? state.dogs.dogs[id] : undefined
  );

  if (!dog || !id) {
    return (
      <div className="max-w-0 transition-[max-width] duration-500 ease-in-out"></div>
    );
  }

  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg ml-5 my-2 p-5 bg-white transition-[max-width] duration-500 ease-in-out">
      <div className="min-w-72">
        <img
          className="w-72 h-auto object-cover"
          src={dog.img}
          alt={dog.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{dog.name}</div>
          <p className="text-gray-700 text-base">Breed: {dog.breed}</p>
          <p className="text-gray-700 text-base">Age: {dog.age} years</p>
          <p className="text-gray-700 text-base">Zip Code: {dog.zip_code}</p>
        </div>
      </div>
    </div>
  );
}

export default DogLargeView;
