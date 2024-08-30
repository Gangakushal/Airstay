import React, { useEffect, useState } from 'react'
import IconsList from '../components/Home/IconsList'
import Card from '../components/Card'



export default function Home() {
  const [cardData, setCardData] = useState([]);
  
  const  fetchData= async()=>{
    const response =await fetch('http://localhost:2000/');
    const data = await response.json();
    setCardData(data);
  } 
  
  useEffect(()=>{
    fetchData();
  },[]);
  
  return (
    <div >
        <IconsList/>
        <div className="flex flex-wrap justify-center p-12 gap-7 ">
          {
            cardData.map((card, index) => 
              <Card key={index} card={card} />
            )
          }
          <Card  card={{}} />
        </div>
        
    </div>
  )
}