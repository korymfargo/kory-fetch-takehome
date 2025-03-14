interface DogCardProps {
  id: string;
}

function DogCard({ id }: DogCardProps) {
  return <div>{id}</div>;
}

export default DogCard;
