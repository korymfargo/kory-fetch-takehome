import { RootState } from "@store";
import { useSelector } from "react-redux";

interface DogCardProps {
  id: string;
}

function DogCard({ id }: DogCardProps) {
  const dog = useSelector((state: RootState) => state.dogs.dogs[id]);

  if (!dog) {
    return <h2>No Available Data</h2>;
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={dog.img} alt={dog.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{dog.name}</div>
        <p className="text-gray-700 text-base">Breed: {dog.breed}</p>
        <p className="text-gray-700 text-base">Age: {dog.age} years</p>
        <p className="text-gray-700 text-base">Zip Code: {dog.zip_code}</p>
      </div>
    </div>
  );
}

export default DogCard;
