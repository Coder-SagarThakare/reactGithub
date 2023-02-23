import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./Components/action";
import { store } from "./Components/store";

function App() {
  const dispatch = useDispatch();
  const storeData = useSelector(state =>   state);

  console.log(storeData);

  // console.log(store.getStete());
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}> + </button>
      <h6>{storeData.updatedNumber}</h6>
      {console.log(storeData.updatedNumber)}
      <button onClick={()=>dispatch(decrement())}> - </button>
    </div>
  );
}

export default App;
