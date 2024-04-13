import {useContext} from "react";
 import ThemeContext from "../context/Datacontext";


export default function Page2() {
  const {name, clss} = useContext(ThemeContext);

  return (
  <div className={`app ${clss}`}>
      <h1>Welcom to Page 1, hi</h1>
      <h1>Im {name}</h1>
  </div>
  )
} 


