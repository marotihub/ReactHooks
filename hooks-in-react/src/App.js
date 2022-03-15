import logo from './logo.svg';
import './App.css';
import UseStateHook from './Hooks/useState_hooks/UseStateHook';
import StateInClass from './Hooks/classcomp/StateInClass'
import StatePrevState from './Hooks/useState_hooks/StatePrevState';
import UseStateObject from './Hooks/useState_hooks/UseStateObject';
import UseStateArray from './Hooks/useState_hooks/UseStateArray';
import HookCounterOne from './Hooks/useEffect_Hooks/HookCounterOne';
import HookCounterTwo from './Hooks/useEffect_Hooks/HookCounterTwo';
import MouseContainer from './Hooks/useEffect_Hooks/MouseContainer';
import IntervalHookCounter from './Hooks/useEffect_Hooks/IntervalHookCounter';
import DataFetching from './Hooks/useEffect_Hooks/DataFetching';
import DataFetchingOneAt from './Hooks/useEffect_Hooks/DataFetchingOneAt';
import ComponentC from './Hooks/Context/ComponentC';
import CounterOne from './Hooks/useReducers/CounterOne';
import CounterTwo from './Hooks/useReducers/CounterTwo';
import CounterThree from './Hooks/useReducers/CounterThree';
import DataFetchuseState from './Hooks/useReducers/DataFetchuseState';
import DataFetchUseReducer from './Hooks/useReducers/DataFetchUseReducer';
import FocusInput from './Hooks/useRef/FocusInput';
import HookTimer from './Hooks/useRef/HookTimer';
import Parent from './childToparent/Parent';
// import Parent from './reactMemo/Parent';
import ForceUpdate from './reactMemo/ForceUpdate';
import Axios from './practiceAxios/Axios';
import ControlledComponent from './Hooks/useRef/ControlledComponent';
import UncontrolledComponent from './Hooks/useRef/UncontrolledComponent';
import FormValidationReact from './FormValidatation/FormValidationReact';
import ToggleDisplay from './toggleDisplay/ToggleDisplay';

// const UserContext= React.createContext()
// const ChannelContext= React.createContext()
function App() {
  return (
    <div className="App">
    {/* <UseStateHook/> */}
      {/* <StateInClass/> */}
      {/* <StatePrevState/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateArray/> */}
{/* *********UseEffectHooks **** */}
          {/* <HookCounterOne/> */}
          {/* <HookCounterTwo/> */}
          {/* <MouseContainer/> */}
          {/* <IntervalHookCounter/> */}
          {/* <DataFetching/> */}
          {/* <DataFetchingOneAt/> */}

{/* <UserContext.Provider value={"Maroti"}>
  <ChannelContext.Provider value={"Mern stack"}>
          <ComponentC/>
  </ChannelContext.Provider>
 </UserContext.Provider> */}


 {/* *************useReducer */}
   {/* <CounterOne/> */}
   {/* <CounterTwo /> */}
   {/* <CounterThree/> */}
   {/* <DataFetchuseState/> */}
   {/* <DataFetchUseReducer/> */}
   {/* ******************** */}

{/* *********useRef Hook** */}
   {/* <FocusInput/> */}
   {/* <HookTimer/> */}
   {/* <ControlledComponent/> */}
   <UncontrolledComponent/>
   {/* *************data pass child to parent */}
   {/* <Parent/> */}
   {/* <Parent/> */}
   {/* <ForceUpdate/> */}
   {/* *********practice example of axios */}
   {/* <Axios/> */}

   {/* ***********Form  Validation**************** */}
   {/* <FormValidationReact/> */}
   {/* <ToggleDisplay/> */}
          </div>
  );
}

export default App;
