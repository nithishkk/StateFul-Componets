import React from 'react'
import Test from './Test'

const App=()=>{
  const[count,setCount]=React.useState(0)
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>button </button>
      <Test count={count}/>
      </div>
  )
}
export default App;