import Filterbar from "@components/Filterbar";
import Navbar from "@components/Navbar";

function Search() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-blue-100">
      <Navbar />

      <Filterbar />
    </div>
  );
}

export default Search;
