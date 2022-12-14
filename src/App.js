import React from 'react'


const App=()=>{
  const[count,setCount]=React.useState(0)
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>button </button>
      </div>
  )
}
export default App;