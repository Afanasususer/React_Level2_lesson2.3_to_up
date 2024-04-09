
import './App.css'
import './mycss.css'
import { useState } from "react";

function App() {
const [person, setPerson] = useState("abdelouahab");
const [age, setAge] = useState(22);
let [counter, setCounter] = useState(0);
let [backgroundColor, setbackgroundColor] = useState("");
 




const setage = (eo) => { setAge(100) ,document.getElementById("age").style.color = "pink", eo.target.style.backgroundColor = "green"}

  return (
    <div className = {`app ${backgroundColor}`} >
      <h1 id='txt'>Hi my name is {person}</h1> 
      <button id='btn1' onClick={(eo) => {setPerson("SAMADI"), document.getElementById("txt").style.color = "pink" ,eo.target.style.backgroundColor = "green" }}>change name</button>

      <br />
      <br />

      <h1 id='age'>Hi my age is {age}</h1> 
      <button id='btn2' onClick={setage}>change age</button>

      <br />
      <br />

      <button id='btn3' onClick={(eo) => {setCounter(counter+1), eo.target.style.backgroundColor = "green"}}>counter is {counter}</button>
      <br /> <br /> <br />

      <button style={{marginRight : "20px"}} onClick={() => { setbackgroundColor("dark")}}> dark </button>    
      <button style={{marginRight : "20px"}} onClick={() => {setbackgroundColor("grey")}}> grey </button>    
      <button style={{marginRight : "20px"}} onClick={() => {setbackgroundColor("pink")}}> pink </button>    
      <button                                onClick={() => {setbackgroundColor("")}}> light </button>    
    </div>
  )
}

export default App



// f jsx lvariable kidar haka {variable}

// let person = "abdelouahab"
//  const changeName = () => { person = "ali hassan" , console.log(` new name is ${person}`); document.getElementById("txt").style.color = "blue"}
// 3la ma fhemt lhad l2an f lblassa dyal java script mn l2a7ssen n5edmo b functions f ay haja, w ghaliban 3la makibanli dak addEventLis.. ghat3awed b onclick 
// w dak document.getEleme.... kan5edmo biha 3adi ghir houa ymkn kayna xi hwayej li ana mazal ma 3rafthoom 
// khssni n3raf kifah n5adem eo.trget m3a onclick blast ma nbqa ndir kol mera document.getElementById("")

// unused codes : const darkmode = (eo) => { eo.target.parentElement.parentElement.classList.toggle("dark") }
// fhad lethode hadi kanbedel lawn dyal body w sed9atli ghy f lawn wahed fch jit n5ademha 3la bezaf dyal l2alwan lqit mushkilla soit dert toggle soit dert add kant kaderli machakil wa5a kat5dem , wabittali khadaemt useState 
// ila bghiti dir ghir light w dark mode b hooks, 5essk dirhom bjuj bhl lighadir dyal dark dir dyal light w kkol wahede b button dyalo, toggle dyal lclass list hiya lwahida likat5alina ndirohom f nefs lbutton

//       <button style={{marginRight : "20px"}} onClick={(eo) => {eo.target.parentElement.style.backgroundColor = "pink"}}> pink </button>    
// ahd atriqa hadi 5edma wallakin b chart anana ndirohom kolhoom haka 
// donc kayna hadi w usestate
// rabt dyal css teqdar diro hna teqdar diro f index.js