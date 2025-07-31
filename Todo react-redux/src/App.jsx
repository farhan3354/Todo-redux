// import { useCallback, useState } from "react";
// import { useState } from "react";
import "./App.css";
import Child from "./component/child";
import AddTodo from "./component/Addtodo";
import { Route, Routes } from "react-router";
import CounterComponent from "./component/Counter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Hero from "./component/Hero";
import UrlForm from "./component/UrlForm";
import LandingPage from "./pages/LandingPage";

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
      <Provider store={store}>
        <Routes>
          <Route path="/url" element={<UrlForm></UrlForm>}></Route>
          <Route path="/addtodo" element={<AddTodo></AddTodo>}></Route>
          {/* <Route path="/" element={<Hero></Hero>}></Route> */}
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route
            path="/cou"
            element={<CounterComponent></CounterComponent>}
          ></Route>
          {/* <CounterComponent></CounterComponent> */}
        </Routes>
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
