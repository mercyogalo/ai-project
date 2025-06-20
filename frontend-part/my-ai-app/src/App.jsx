import './App.css'
import { useState } from 'react'
import Demo from './Mytypewriter'
import Ai_response from './Ai_response'





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

  <form onSubmit={handleSubmit} className='text-center w-full'>
      <input 
      type='text' 
      placeholder='Enter a female condition' 
      className='p-4 mr-2 border-2 border-solid bg-sky-50 w-60'  
      onChange={handleChange}
      required/>


    <button className="border-purple-200  pr-2 pl-2 pt-3 pb-3 rounded-full bg-sky-500 hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
    </form>

)



if(search){
  return (
    <>
    <Ai_response />
    {searchForm}

    </>
  )
}else{
  return(
    <>


    <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/912/original/Group_Women_Pictures___Freepik.jpeg?1749677116" className='w-100 h-100 rounded-full d-block m-auto mt-2 mb-5 shadow-xl/20' />

    <Demo />
    {searchForm}

    </>
  )
}



 
}

export default App


