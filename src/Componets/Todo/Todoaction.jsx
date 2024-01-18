import React, { useState } from 'react'

const Todoaction = () => {
    const [title, usetitle] = useState("")
    const [desc, usedesc] = useState("")
    const [collect, usecollect]= useState([])

    const handleChange=(e)=>{
     usetitle(e.target.value)
    }
    const handleChangedes=(e)=>{

        usedesc(e.target.value)
    }

const submitaction=(e)=>{
    e.preventDefault()
    usecollect([...collect, {title,desc}])
    console.log(collect)
    if(title==="")
    {
        alert("Please enter title")
    }
    usetitle("")
    usedesc("")

}
let todoResult= "No Task"

if(collect.length>0){
    todoResult = collect.map((item,i)=>{
        return <div className='row' >
        <div className='col'>{item.title}</div>
        <div className='col'>{item.desc}</div>
        <div className='col' key={i}><button onClick={()=>{deletemet(i)}}>X</button></div>
        </div>
        })
}
 

const deletemet =(i)=>{
let dublicate = [...collect]
console.log(dublicate)
dublicate.splice(i,1)
usecollect(dublicate)
}

  return <>
 <div className='container'>
    <div className='row'>
        <form onSubmit={submitaction}>
         <input type="text" className="form-control" value={title}  placeholder="enter title" onChange={handleChange}/>
         <input type="text" className="form-control" value={desc}  placeholder="enter description" onChange={handleChangedes}/>
         <input type="submit" value="Submit" />

        </form>
    </div>

  
     {todoResult}
   
 </div>
  </>
}

export default Todoaction
