import './App.css'
import { useState } from 'react'
import Demo from './Mytypewriter'






function App() {


  const [condition,setCondition]=useState('cancer');
  const [search, setSearch]=useState(false);

  function handleChange(event){
    setCondition(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(condition);
    setSearch(true);
  }





let searchForm=(

  <form onSubmit={handleSubmit}>
      <input 
      type='text' 
      placeholder='Enter a female condition' 
      className='p-4 mr-2 border-2 border-solid bg-sky-50' 
      onChange={handleChange}
      required/>


    <button className="border-purple-200  pr-2 pl-2 pt-3 pb-3 rounded-full bg-sky-500 hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
    </form>

)



if(search){
  return (
    searchForm
  )
}else{
  return(
    <>
    <Demo />
    {searchForm}

    </>
  )
}



 
}

export default App


