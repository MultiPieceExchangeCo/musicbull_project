import React, {useEffect, useState} from 'react'
import DashboardPage from './pages/Dasboard/DashboardPage';


const App= () => {
 
  const [backendData,setbackendData] = useState();
  const getData=() => {
    fetch("/api").then(
      response => response.json()
    ).then(data =>{
      setbackendData(data)
      console.log(backendData);
    })
  } 
  useEffect(()=> {
    getData();
  },[]);

  return (
    
    <div>
      <DashboardPage 
     />
    </div>


  )
}

export default App