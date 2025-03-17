import { RootState } from "@store";
import { useSelector } from "react-redux";

interface DogCardProps {
  id: string;
  handleClick: (id: string) => void;
}

function DogCard({ id, handleClick }: DogCardProps) {
  const dog = useSelector((state: RootState) => state.dogs.dogs[id]);

  if (!dog) {
    return <h2>No Available Data</h2>;
  }

  return (
    <div
      className="flex items-center w-full p-4 rounded-lg cursor-pointer hover:bg-gray-50 transition"
      onClick={() => handleClick(id)}
    >
      {/* Dog Image */}
      <img
        className="w-16 h-16 rounded-md object-cover mr-4"
        src={dog.img}
        alt={dog.name}
      />

      {/* Dog Details */}
      <div className="flex-1">
        <h3 className="font-bold text-lg">{dog.name}</h3>
        <p className="text-gray-600 text-sm">Breed: {dog.breed}</p>
        <p className="text-gray-600 text-sm">Age: {dog.age} years</p>
        <p className="text-gray-600 text-sm">Zip Code: {dog.zip_code}</p>
      </div>
    </div>
  );
}

export default DogCard;
