import { useSelector } from "react-redux";
import CreateUser from "../order/CreateUser";
import Button from "../../ui/Button";
function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="mb-10 text-center">
      <h1 className="mb-10 text-center text-2xl font-bold text-stone-800 md:text-4xl">
        The best pizza.
        <br />
        <span className="text-yellow-600">
          {" "}
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName ? (
        <Button to={"/menu"} type={"primary"}>
          Continue ordering
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
