import { useState } from 'react'
import './App.css'
import Courses from './components/Courses'
import Carts from './components/Carts'
import './components/Course.css'

function App() {
  const [selects,setSelects] = useState([]);
  const [remaining,setRemaining] =useState(20)
  const [totalCredit,setTotalCredit] =useState(0)
  const [totalUsd,setTotalUsd] =useState(0)
  
  
  const handleAddName = name =>{
    const isExist = selects.find(item => item.id == name.id);
    let count = name.credit;
    let odd = name.price;
    if(isExist){
      alert('Already added this course')
    }else{
      selects.forEach(item =>{
        count = count + item.credit;
     })
      const totalRemaining = 20 - count;
      if(count>20){
         return alert('Exceed 20 credit not allowed')
      }else{
        selects.forEach(money =>{
          odd = odd + money.price;
       })
       setTotalUsd(odd);
      setTotalCredit(count);
      setRemaining(totalRemaining);
      const newSelect = [...selects , name]
      setSelects(newSelect);
      }
    }
 
  }
  return (
    <>
       <div style={{backgroundColor:'#F3F3F3'}}>
      <div className='max-w-screen-2xl mx-auto'>
      <h1 className='text-3xl font-bold text-center py-10'>Course Registration</h1>
      <div style={{display:'flex',gap:'25px',justifyContent:'center'}} id='course-div'>
      <Courses handleAddName={handleAddName}></Courses>
      <Carts 
      selects={selects}
      remaining={remaining}
      totalCredit={totalCredit}
      totalUsd={totalUsd}>
      </Carts>
      </div>
      
      </div>
      </div>
      
    </>
  )
}

export default App
