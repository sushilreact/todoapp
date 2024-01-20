import React, { useEffect, useState } from 'react'

const Todoaction = () => {
const [formval, useformval]=useState({
title_form:'',
desc_form:'',
enddate_form:'',
assign_form:''

})
const [records, setRecords]= useState([])

const handleInputChange = (event)=>{
const {name,value}= event.target
useformval({...formval,[name]:value})


}

const submitHandle=(e)=>{
e.preventDefault()

const newRecords= {...formval, id:new Date().getTime().toString()}
console.log(records)
setRecords([...records,newRecords])

}


  return (
    <div className='container-fluid'>
      <div className='container todoinBui flexcolum'>
       <div className='todoCard'>
       
       <form className='todoRwo' onSubmit={submitHandle}>
       
        <input type="text" name='title_form' value={formval.title_form} className='form-control'  placeholder='Enter Title' onChange={handleInputChange}/>
        <textarea className='form-control' name='desc_form' value={formval.desc_form}  cols="30" rows="5" placeholder='Enter Descrption' onChange={handleInputChange}></textarea>
        <input type="date" name='enddate_form' value={formval.enddate_form}  className='form-control' onChange={handleInputChange}/>
        <select  className='form-select' name='assign_form' value={formval.assign_form} onChange={handleInputChange}>
          <option value="Designer">Designer</option>
          <option value="Developer">Developer</option>
        </select>
        <input type="submit" className='btn btn-success' value="Add Task" />
        
       </form>
      
       </div>

<div className='todoshow'>
{
records.map((item)=>{
  const {title_form,enddate_form,desc_form,assign_form,id}= item
  return(
    <div className='card' key={id}>
<p>{title_form}</p>
<p>{enddate_form}</p>
<p>{desc_form}</p>
<p>{assign_form}</p>

    </div>
  )
})

}
</div>

      </div>
    </div>
  )
}

export default Todoaction
