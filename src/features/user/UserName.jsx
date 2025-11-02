import { useSelector } from "react-redux";
import { getUserName } from "./userSlice";

function UserName() {
  const userName = useSelector(getUserName);
  if (!userName) return;
  return (
    <p className="hidden text-sm font-bold tracking-wider text-stone-800 uppercase sm:block md:text-base">
      {userName}
    </p>
  );
}

export default UserName;
