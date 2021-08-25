import "./app.css";
import { Padre } from "./components/07-tarea-memo/Padre";
import Layout from "./components/useLayoutEffect/Layout";
import CallBackHook from "./components/useMemo/CallbackHook";
import { Memo } from "./components/useMemo/Memo";
import { MemoHook } from "./components/useMemo/MemoHook";
import TodoApp from "./components/useReducer/TodoApp";
// import MultipleCustomHooks from "./components/examples/MultipleCustomHooks";
// import FocusScreen from "./components/useRef/FocusScreen";
// import { RealExample } from "./components/useRef/RealExample";
// import CleanUp from "./components/useEffect/CleanUp";
// import CustomHookForm from "./components/useEffect/CustomHookForm";
// import CounterCustomHook from "./components/counterCustomHook/CounterCustomHook";
// import UseEffect from "./components/useEffect/UseEffect";
function App() {
  return (
    <div className="app">
      {/* <UseEffect /> */}
      {/* <CounterCustomHook /> */}
      {/* <CleanUp /> */}
      {/* <CustomHookForm /> */}
      {/* <MultipleCustomHooks /> */}
      {/* <FocusScreen /> */}
      {/* <RealExample /> */}
      {/* <Layout /> */}
      {/* <MemoHook /> */}
      {/* <CallBackHook /> */}
      {/* <Padre /> */}
      <TodoApp />
    </div>
  );
}

export default App;
