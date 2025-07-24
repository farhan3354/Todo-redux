// import { useCallback, useState } from "react";
// import { useState } from "react";
import "./App.css";
import Child from "./component/child";
import AddTodo from "./component/Addtodo";
import { Route, Routes } from "react-router";
import CounterComponent from './component/Counter'
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  // const [count, setCount] = useState(0);

  // const handleclick = useCallback(() => {
  //   setCount(count + 1);
  // },[]);
  // function handleclick() {
  //   setCount(count + 1);
  // }
  return (
    <>
      <Routes>
        <Route path="/" element={<AddTodo></AddTodo>}></Route>
     
      </Routes>
     <Provider store={store}>
        <CounterComponent></CounterComponent>  
        </Provider>
      {/* <div className="card">
        <button className="text-2xl bg-red-700 border" onClick={handleclick}>
          count is {count}
        </button>
        <br></br>
        <Child buttonname="Click me" handleclick={handleclick}></Child>
      </div> */}
    </>
  );
}

export default App;
