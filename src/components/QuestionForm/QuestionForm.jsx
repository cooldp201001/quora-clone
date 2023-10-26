import React, { useState } from 'react'
import './QuestionForm.css'
import AddQuestion from './AddQuestion/AddQuestion'
import CreatePost from './CreatePost/CreatePost'
const QuestionForm = ( {DialogBoxCom} ) => {


  const[createPostCom,setCreatePostCom] = useState(false)
  const [addQuescom,setAddQuesCom] = useState(true)
  const showCreatePostComp =()=>{
    if(addQuescom)
    setAddQuesCom(!addQuescom)
   if(!createPostCom)
    setCreatePostCom(!createPostCom)
    
  }
  const showAddQuesCom =()=>{
    if(createPostCom)
    setCreatePostCom(!createPostCom)
     if(!addQuescom)
    setAddQuesCom(!addQuescom)
  }
  return (
     <div className="questionBoxContainer">
    
    <div className='QuestionDialogBox'>

      <button onClick={()=>DialogBoxCom(false)} className='closeBtn'><i className="fa-solid fa-xmark"></i></button>
      <div className="AddQuestionAndCreatePostBtnBox">

        <div className= {`addQuestionBtnBox ${addQuescom?"activeBox":""}` } >
        <button className="addQuestionBtn" onClick={()=>showAddQuesCom()}  >Add Question</button
        ></div>
         
         <div className= {`createPostBtnBox ${createPostCom?"activeBox":""}` } > 
          <button className="createPostBtn" onClick={()=>showCreatePostComp()}>create Post</button>
          </div>
      </div>
           {  addQuescom &&<AddQuestion/>} 
         { createPostCom&&<  CreatePost/>} 

      </div>
      </div>
  )
}

export default QuestionForm