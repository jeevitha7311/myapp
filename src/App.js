import react,{useState ,useRef, useEffect, useReducer, useMemo, useCallback} from "react";
import MyContext from "./MyContext";
import Child from './Child';
import Header from "./Header";
// const App = () => {
//   const[count,setCount] = useState(0);
//     return(
//       <div>
//         <h1>You typed {count} times</h1>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//       </div>
//     )
// }
// const App = () => {
//   const [inputValue,setInputValue] = useState("");
//   return(
//     <div>
//       <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
//       <p>You typed: {inputValue}</p>
//     </div>
//   )
// }

// useeffect -componetdidmount,componntdidupdate,componntwillunmount
// const App = () => {
//   const [data,setData] = useState([]);
//   useEffect(()=>{
//       fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res)=>res.json())
//       .then((data)=>setData(data))
//   },[])

//   return(
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {data.map((post)=>(
//         <li key={post.id}>{post.title}</li>))}
//       </ul>
//     </div>
//   )
// }

// useref
// const App = () => {
//   const[value,setValue] = useState("")
//   const inputRef = useRef(null)
//   const Show = () => {
//     const typedValue= inputRef.current.value;
//         setValue(typedValue)
//   }
//   // useEffect(()=>{
//   //   console.log(inputRef.current && inputRef.current.focus);
    
//   // },[])
//   return(
//     <div>
//       <input type="text" ref={inputRef}/>
//       <button onClick={Show}>Show</button>
//       <p>You typed:{value}</p>
//     </div>
//   )
// }

//usecontext
// const App = () => {
//   const contextValue = "Hello from Jeevitha";
//   return(
//   <MyContext.Provider value={contextValue}>
//    <Child/>
//   </MyContext.Provider>
//   )
// }

//useReducer
// var initialState=0
// function counterReducer(state,action) {
//  switch(action.type){
//   case "INCREMENT":
//     return state+1;
//   case "DECREMENT":
//     return state-1;
//   case "RESET":
//     return 0;
//   default:
//     return state;
//  }
// }
// const App = () => {
//   const[count,dispatch] = useReducer(counterReducer,initialState)
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>dispatch({type: "INCREMENT"})}>+</button>
//       <button onClick={()=>dispatch({type: "DECREMENT"})}>-</button>
//       <button onClick={()=>dispatch({type: "RESET"})}>Reset</button>
//     </div>
//   )
// }

//useMemo
// The React usememo hook returns a memoized value(its like caching a value so that it doesn't need to be recalculated)
// It runs only when one of its depencies changes
// This can improve performance in react
// const App = () => {
//   const[number,setNumber] = useState(0);
//   const[counter,setCounter] = useState(0);
//   function cubeNumber(num){
//     console.log("Calculation done!");
//     return Math.pow(num,3);
//   }
//   const result = useMemo(()=>cubeNumber(number),[number]);
//   return(
//      <div>
//       <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
//       <h1>Cube of the nuber: {result}</h1>

//       <button onClick={()=>setCounter(counter+1)}>Counter++</button>
//       <h1>Counter: {counter}</h1>
//      </div>
//   )
// }

// useCallback
// It caches  function definition between re-render,it means it doesn't create multiple instance of same function when re-renders happens,
// Instead of creating new instance of the function it provides the cached function on re-render of the component
// const App = () => {
//   const [count,setCount] = useState(0);
//   const newFn = useCallback(() => {},[]);
//   // const newFn = useCallback(() => {},[count]);

//   return(
//     <div>
//       <Header newFn={newFn}/>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(prev=>prev+1)}>Click Here</button>
//     </div>
//   )
// }

const App = () => {
  const [data,setData] = useState([]);
  console.log(data);
  
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((data) => setData(data.data))
  },[])
  return(
    <>
     <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
  <thead>
    <tr>
      <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
      <th style={{ border: "1px solid black", padding: "8px" }}>First Name</th>
      <th style={{ border: "1px solid black", padding: "8px" }}>Last Name</th>
    </tr>
  </thead>
  <tbody>
    {data.map((user) => (
      <tr key={user.id}>
        <td style={{ border: "1px solid black", padding: "8px" }}>{user.email}</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{user.first_name}</td>
        <td style={{ border: "1px solid black", padding: "8px" }}>{user.last_name}</td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  )
}

export default App;

