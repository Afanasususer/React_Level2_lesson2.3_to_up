import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();


const initialData = {name : "abdelo" , age : 22 , counter : 0, clss : "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
    case "CHANGE_MODE":
      return { ...state, clss: action.newValue };
    case "CHANGE_AGE":
      return { ...state, age: action.newValue };
    case "CHANGE_COUNTER":
      return { ...state, counter: action.newValue };
    case "CHANGE_THEME":
      return { ...state, clss: action.newValue };
    // case "CHANGE_GREY":
    //   return { ...state, clss: action.newValue };
    // case "CHANGE_DARK":
    //   return { ...state, clss: action.newValue };
    // case "CHANGE_LIGHT":
    //   return { ...state, clss: action.newValue };
    default:
      return state;
  }}

  // dataprovider
export function DataProvider({children}) { 
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeName = (newName) => {dispatch({ type: "CHANGE_NAME", newValue: newName });}
  // const changeMode = () => {dispatch({ type: "CHANGE_MODE", newValue: firstState.clss == "" ? "dark" : "" }) }
  const changeAge = (newAge) => {dispatch({ type: "CHANGE_AGE", newValue: newAge }) }
  const changeCounter = (newCounter) => {dispatch({ type: "CHANGE_COUNTER", newValue: newCounter }) }
  const changeTheme = (newTheme) => {dispatch({ type: "CHANGE_THEME", newValue: newTheme }) }
  // const changeGrey = () => {dispatch({ type: "CHANGE_GREY", newValue: "grey"}) }
  // const changeDark = () => {dispatch({ type: "CHANGE_DARK", newValue: "dark"}) }
  // const changeLight = () => {dispatch({ type: "CHANGE_LIGHT", newValue: "light"}) }
  return (
     <ThemeContexttt.Provider value={{ ...firstState, changeName, changeAge, changeCounter,changeTheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;