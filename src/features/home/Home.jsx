import CreateUser from "../order/CreateUser";

function Home() {
  return (
    <div className="mb-10 text-center">
      <h1 className="mb-10 text-center text-2xl font-bold text-stone-600 md:text-4xl">
        The best pizza.
        <br />
        <span className="text-yellow-600">
          {" "}
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
