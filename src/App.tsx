import { decrementVal, incrementVal } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks/typeHooks";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleDecrement = () => {
    if (count === 0) {
      alert("Cant perform This action");
    } else {
      dispatch(decrementVal());
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-tr from-green-500 to-blue-500">
        <section>
          <button
            className=" from-red-500 bg-gradient-to-tl to-purple-500  p-3 rounded-full text-white"
            onClick={handleDecrement}
          >
            {" "}
            Decrement
          </button>
        </section>
        <section>
          <div
            className=" border border-x-purple-500 border-y-blue-500 text-white rounded-full min-w-40  mx-12 p-3 text-center
          
          "
          >
            {count}
          </div>
        </section>
        <section>
          <button
            className=" from-red-500 bg-gradient-to-tl to-purple-500   p-3 rounded-full text-white"
            onClick={() => dispatch(incrementVal())}
          >
            {" "}
            Increment
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
