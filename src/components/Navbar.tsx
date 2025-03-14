import Logo from "@assets/logo.png";
import { RootState } from "@store";
import { useSelector } from "react-redux";

function Navbar() {
  const storeUserName = useSelector((state: RootState) => state.user.name);

  return (
    <div className="flex justify-center items-center">
      <img src={Logo} alt="Dog Logo 1" className="w-10 h-10" />
      <h1 className="text-2xl font-bold text-center m-4 text-blue-600">
        Welcome {storeUserName}! You can browse all Dogs here!
      </h1>
      <img src={Logo} alt="Dog Logo 2" className="w-10 h-10" />
    </div>
  );
}

export default Navbar;
