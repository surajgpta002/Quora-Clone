import React, { useState } from 'react'
import '../components/css/PopupDialog.css'

export const PopupDialog = (props) => {
  const [action, setAction] = useState();
  const [fileArray,setFileArray] = useState([]);
  const displayPopupContent = (choice) => {
    if (choice === "Add Questions") {
      return (
        <div>
          <div className="instruction-block mx-1 p-2">
            <h5 className='mx-2'>Tips on getting good answers quickly</h5>
            <ul>
              <li>Make sure your question has not been asked already</li>
              <li>Keep your question short and to the point</li>
              <li>Double-check grammar and spelling</li>
            </ul>
          </div>
        </div>
      )
    } else if (choice === "Create Post") {
      return (<></>)
    }
  }
  const displayOption = () => {
    if (action === "shift-default") {
      return (
        <div>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          </span>
          <span className='ms-1 txt-secondary mt-5'>Limited</span>
        </div>
      )
    } else {
      return (
        <div>
          <span><img src="people.svg" alt="public" /></span>
          <span className='ms-1 txt-secondary'>People</span>
        </div>
      )
    }
  }
  const dropdownChoice = (e, action = "") => {
    const element = document.querySelectorAll(".visibility-choice");
    const exceptionIndex = e.currentTarget.getAttribute("index");
    element.forEach((ele, key) => {
      if (key !== exceptionIndex) {
        ele.style.display = "none";
      }
    });
    e.currentTarget.querySelector(".visibility-choice").style.display = "inline-block";
    setAction(action);
  }
  const uploadFile = (e)=>{
    const fileList = e.target.files;
    const filesArray = [];
      for(let i = 0; i < fileList.length; i++) {
        filesArray.push(fileList[i]);
       }
    setFileArray(Array.isArray(fileArray) ? [...fileArray, ...filesArray] : [filesArray]);
  }
  const showImages = ()=>{
   if (fileArray && Array.isArray(fileArray) && fileArray.length) {
     console.log("Reached inside the condition!")
     const images = fileArray.map((item,index)=>{
       return (
         <img
           className="support-image"
           src={window.URL.createObjectURL(item)}
           key={index}
           alt={`post-${index}`}
         />
       );
     })
     return images;
   }
   return null;
 }
  const setActive = (event)=>{
    const targetElement = event.target.textContent.trim();
    props.setActive(targetElement);
  }
  const closePopup = () => {
    props.setActive("close");
    props.makeOpaque(1);
  }
  const enableSubmit= (e)=>{
    e.preventDefault();
    document.getElementById("submitQuestion").removeAttribute("disabled");
  }
  const enablePostSubmit = (e)=>{
    e.preventDefault();
    document.getElementById("SubmitPost").removeAttribute("disabled");
  }
  return (
    <div>
      {props.userAction!=="close"?(
        <div className="container main-dialog">
        <div className="nav p-2">
          <button type="button" className='btn close-btn' onClick={(e)=>closePopup()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
          {props.userAction === "Create Post" ? (
            <div className="dropdown space-dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src='globe.svg' alt="globe-icon" />
                <span className='ms-1 text-secondary'>Everyone</span>
              </button>
              <ul className="dropdown-menu menu-popup">
                <li className='dropdown-item'>
                  <div>
                    <span id="label-placeholder">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                      <span className="ms-2 txt-secondary">Choose a Space</span>
                    </span>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                  </div>
                </li>
                <li className='dropdown-item mt-2'><img src='globe.svg' alt="globe-icon" />
                  &nbsp;<span className='ms-1 text-secondary'>Everyone</span>
                </li>

              </ul>
            </div>
          ) : (<></>)}
        </div>
        <div className="section-header my-3 d-flex justify-content-around">
          <div className={props.userAction === "Add Questions" ? "fw-semibold active" : "fw-semibold"} onClick={(e)=>setActive(e)}>Add Questions</div>
          <div className={props.userAction === "Create Post" ? "fw-semibold active" : "fw-semibold"} onClick={(e)=>setActive(e)}>Create Post</div>
        </div>
        {displayPopupContent(props.userAction)}
        {props.userAction === "Add Questions"?(
        <div className="post-visibility my-3 d-flex">
          <span id="profile-icon">
            <img src="person-fill.svg" alt="profile-pic" />
          </span>
          <span className='ms-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </span>
          <span className="ms-3">
            <div className="dropdown">
              <button className="btn dropdown-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {displayOption()}
                <span className='ms-2 mt-1 caret-down-icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
                </span>
              </button>
              <ul className="dropdown-menu dropdown-visibility">
                <li className="dropdown-item" index={0} onClick={(e) => dropdownChoice(e, "")}>
                  <div className='title'>Public</div>
                  <div className='desc'>
                    <span className='list-content'>Others will see your identity alongside this question on your profile and in their feeds.</span>
                    <span className='visibility-choice'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                    </span>
                  </div>
                </li>
                <li className="dropdown-item" index={1} onClick={(e) => dropdownChoice(e, "shift-default")}>
                  <div className='title'>Limited</div>
                  <div className='desc'>
                    <span className='list-content'>Your identity will be shown but this question will not appear in your followers' feeds or your profile.</span>
                    <span className='visibility-choice'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </span>
        </div>):(<></>)}
        {props.userAction === "Create Post"?(
        <div className='post-useridentity'>
          <div id="profile-picture">
            <img id="user-pic" src="https://media.istockphoto.com/id/1147108546/photo/single-tree-with-clipping-path-and-alpha-channel.jpg?s=612x612&w=0&k=20&c=rW4rKfPGgkCyJ0Vp4PO1IfymowySIiFjFs1cCXJj3dU=" alt="profile-pic" />
          </div>
          <div className='ms-2'>
            <div className="username fw-bold">UserName</div>
            <div className="credentials">Credentials</div>
          </div>
        </div>
        ):(<></>)}
        {props.userAction === "Add Questions"?(
          <div className="my-1 mx-2 postorquesArea">
          <textarea className="form-control" onInput={enableSubmit} id="question-area" rows="3" placeholder='Start your question with "What", "How", "Why", etc.'>
          </textarea>
        </div>
        ):(<></>)}
        {props.userAction === "Create Post"?(
          <div className="my-2 mx-2 postorquesArea">
          <div id="post-area" >
            <textarea type="text" name="text-post" onInput={enablePostSubmit} id="text-post" placeholder='Say something...'></textarea>
            <div className=' my-4 image-container'>{showImages()}</div>
          </div>
        </div>
        ):(<></>)}
        <footer className='footer'>
        {props.userAction === "Add Questions"?(
          <div className='d-flex justify-content-end'>
              <button type="button" className="btn cancel-btn" onClick={(e)=>closePopup()}>Cancel</button>
              <button type="button" className="btn btn-primary submit-btn" id="submitQuestion" disabled>Add question</button>  
          </div>
          ):(<></>)}
          
          {props.userAction === "Create Post"?(
              <div className='d-flex justify-content-between'>
                <button type='button' className='file-button'>
                <input type="file" onChange={(e)=>uploadFile(e)}/>
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                  </svg>
                </span>
                </button>
                <button type="button" className="btn btn-primary submit-btn" id="SubmitPost" disabled>Post</button>  
              </div>
            ):(<></>)}
        </footer>
      </div>
      ):(<></>)}
      
    </div>
  )
}
