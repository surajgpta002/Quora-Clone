import React from 'react'
import './css/Posts.css'
import { PopupDialog } from './PopupDialog';

export const Posts = (props) => {
  const hashBackground = () => {
    document.querySelector(".post-section").style.opacity = "0.5";
  }
  const returnState = () => {
    document.querySelector(".post-section").style.opacity = "1";
  }
  const toggleHeight = (e)=>{
    e.preventDefault();
      const parent =  e.currentTarget.parentNode;
      parent.classList.toggle('expanded');
    if (parent.classList.contains('expanded')){
      e.currentTarget.innerHTML = `(<span className='text-primary'>less</span>)`;
      e.currentTarget.classList.add("text-primary");
    }else{
      e.currentTarget.innerHTML = `(<span className='text-primary'>more</span>)`;
      e.currentTarget.classList.add("text-primary");
    }
  }
  const handlePostPopup = (e)=>{
    e.preventDefault();
    //Open the create post dialog
    props.onTabClick("Create Post")
  }
  // Fake Data in JSON Array format
  const suggestionLists = [
    {
      id:1,
      icon:"code-slash.svg",
      title:"The Programmer's Guide",
      description: "The space is to guide the newbies with coding ideas"
    },
    {
      id:2,
      icon:"globe.svg",
      title:"The Python Guide",
      description: "The space is to introduce python libraries"
    },
    {
      id:3,
      icon:"chat-dots.svg",
      title:"ChatGPT discussion",
      description: "The space is to discuss about ChatGPT"
    },
    {
      id:4,
      icon:"book.svg",
      title:"Physics Gyan",
      description: "Physics gyan space is to teach undergrad students with elementary physics problems"
    },
    {
      id:5,
      icon:"database-check.svg",
      title:"AI and ML",
      description: "Space is discuss about recent updates in AI and ML world"
    }
  ]
  const postList = [
    {
      id:1,
      userLogo: "	https://this-person-does-not-exist.com/img/avatar-gen11b045994049652ab4f797409becc2d9.jpg",
      spaceName:"Stoicism",
      userName:"Ramesh Salgoakar",
      showDate:"Dec 22",
      questionTitle:"How can I learn to focus well?",
      answer:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi totam, necessitatibus eligendi laudantium consequatur dolorem esse iure repellendus quam odit debitis, accusamus cupiditate assumenda, aliquid molestias illum sed aperiam. Expedita?",
      postImage:"https://randomwordgenerator.com/img/picture-generator/57e2d54a4954a814f1dc8460962e33791c3ad6e04e50744172297bd4944bc3_640.jpg",
      upvoteCount:"23.2K",
      downvoteCount:"",
      commentCount:"28",
      shareCount:"20"
    },
    {
      id:2,
      userLogo: "https://this-person-does-not-exist.com/img/avatar-gen116ca5b5d7ff10e680515754da7fd019.jpg",
      spaceName:"Litreature",
      userName:"Cara Bloom",
      showDate:"Jan 23",
      questionTitle:"What are the questions of life?",
      answer:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nobis culpa, est porro, corporis officia, veritatis sapiente labore corrupti eum id? Error, ab odio? Aperiam corporis hic consequuntur eos dolore?
      Quidem velit incidunt provident laborum? Deleniti repellendus eum quo ratione reiciendis inventore illo ducimus hic explicabo. Exercitationem est ut quod ad earum eum. Ex laudantium voluptatum et ipsa, minima totam.`,
      postImage:"https://randomwordgenerator.com/img/picture-generator/57e5d3464f5bab14f1dc8460962e33791c3ad6e04e50744172297cdc904dcc_640.jpg",
      upvoteCount:"18K",
      downvoteCount:"12",
      commentCount:"15",
      shareCount:"10"
    },
    {
      id:3,
      userLogo: "https://this-person-does-not-exist.com/img/avatar-gen11212b13ad1cabcdab5bc98a0c087c0b.jpg",
      spaceName:"Gardening",
      userName:"Jonathan Grey",
      showDate:"Feb 23",
      questionTitle:"A quick guide for a beautiful garden",
      answer:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus error illo recusandae molestias explicabo, quae voluptate. Dolores debitis assumenda deleniti quod harum enim, maxime quis, modi voluptate dolorem consectetur at.
      Cum velit culpa hic, obcaecati perferendis fugiat sunt, rem sapiente earum corporis ducimus, nemo molestiae. Fuga magnam, fugit ipsam cum ipsa dolorem molestias animi! Ad sit velit dolore perspiciatis quam?
      Quasi excepturi illum asperiores cum, velit est consequuntur quis non perspiciatis, obcaecati molestias dolore dolorem id, voluptatem atque quibusdam at nulla accusantium saepe harum maxime veniam. Soluta obcaecati ratione quos?`,
      postImage:"https://randompicturegenerator.com/img/flower-generator/gf299d366bbc56be504e7e344beb52b9eb4aa5c632fe33195509a07c2baaa26c1ea4df31b66606c58b152c822aaca1ae4_640.jpg",
      upvoteCount:"6K",
      downvoteCount:"",
      commentCount:"19",
      shareCount:"15"
    },
    {
      id:4,
      userLogo: "https://this-person-does-not-exist.com/img/avatar-gen118a4c0309e56208d939a1d05ee8e79d.jpg",
      spaceName:"WorldGame",
      userName:"Kristen Lobo",
      showDate:"Jan 23",
      questionTitle:"Can we make this world a beautiful place?",
      answer:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus error illo recusandae molestias explicabo, quae voluptate. Dolores debitis assumenda deleniti quod harum enim, maxime quis, modi voluptate dolorem consectetur at.
      Cum velit culpa hic, obcaecati perferendis fugiat sunt, rem sapiente earum corporis ducimus, nemo molestiae. Fuga magnam, fugit ipsam cum ipsa dolorem molestias animi! Ad sit velit dolore perspiciatis quam?
      Quasi excepturi illum asperiores cum, velit est consequuntur quis non perspiciatis, obcaecati molestias dolore dolorem id, voluptatem atque quibusdam at nulla accusantium saepe harum maxime veniam. Soluta obcaecati ratione quos?`,
      postImage:"https://randompicturegenerator.com/img/car-generator/g60484024736433d51b312f5756e1d8a2a6138c9a1389b828dd78b4dd231af3e9420f4974587763c4312a7fced92821de_640.png",
      upvoteCount:"9K",
      downvoteCount:"2K",
      commentCount:"12",
      shareCount:"30"
    },
    {
      id:5,
      userLogo: "https://this-person-does-not-exist.com/img/avatar-gen2a49caf2ce08040779a32adc677a3d10.jpg",
      spaceName:"Banking",
      userName:"Connor Macmillan",
      showDate:"Jan 23",
      questionTitle:"How to be a smart Banker and its disadvantages",
      answer:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus error illo recusandae molestias explicabo, quae voluptate. Dolores debitis assumenda deleniti quod harum enim, maxime quis, modi voluptate dolorem consectetur at.
      Cum velit culpa hic, obcaecati perferendis fugiat sunt, rem sapiente earum corporis ducimus, nemo molestiae. Fuga magnam, fugit ipsam cum ipsa dolorem molestias animi! Ad sit velit dolore perspiciatis quam?
      Quasi excepturi illum asperiores cum, velit est consequuntur quis non perspiciatis, obcaecati molestias dolore dolorem id, voluptatem atque quibusdam at nulla accusantium saepe harum maxime veniam. Soluta obcaecati ratione quos?`,
      postImage:"https://randomwordgenerator.com/img/picture-generator/57e9dd474952a414f1dc8460962e33791c3ad6e04e5074417d2e72d6944cc1_640.jpg",
      upvoteCount:"10K",
      downvoteCount:"12K",
      commentCount:"10",
      shareCount:"10"
    }
  ]
  return (
    <div>
      <div className='my-5 post-section'>
        <div className="container text-centered" id="post-container">
          <div className="row" id="post-row">
            <div className="col-2 me-4" id="space-section">
              <ul className="space-list">
                <li className='d-flex'>
                  <button type='button' className='btn' id="add-space">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                  </svg>
                  </button>
                  <div className='ms-2'>Create Space</div>
                </li>
                <li className='d-flex'>
                  <img src="code-slash.svg" alt="" />
                  <div className='ms-2'>Unboxing Full-Stack</div>
                </li>
                <li className='d-flex'>
                  <img src="book.svg" alt="" />
                  <div className='ms-2'>UPSC CSE</div>
                </li>
                <li className='d-flex'>
                  <img src="gear.svg" alt="" />
                  <div className='ms-2'>Engineering</div>
                </li>
                <li className='d-flex'>
                  <img src="cash-coin.svg" alt="" />
                  <div className='ms-2'>Business</div>
                </li>
                <li className='d-flex'>
                  <img src="bank.svg" alt="" />
                  <div className='ms-2'>Banking</div>
                </li>
              </ul>

            </div>
            <div className="col-6 me-3" id="user-post-section">
              <div className="container-create">
                <div className="d-flex">
                  <img className='profile-pic' src="person-fill.svg" alt="profile" />
                  <div className="input-container mb-1 ms-4">
                    <input type="text" className="form-control" id="post-input" placeholder="What do you want to ask or share?"/>
                  </div>
                </div>
                <div className="footer-buttons d-flex">
                  <button className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                    </svg>
                    <span className='ms-1'>Ask</span>
                  </button>
                  <span className='seperator'></span>
                  <button className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    <span className="ms-1">Answer</span>
                  </button>
                  <span className='seperator'></span>
                  <button className="btn" onClick={(e)=>handlePostPopup(e)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                  <span className='ms-1'>Post</span>
                  </button>
                </div>
              </div>
              {postList.map((item,index)=>{
                return <div className="individualPosts mt-3" key={index}>
                  <div className="postheader d-flex p-3">
                    <img className="user-logo" src={item.userLogo} alt={`logo-${index}`}/>
                    <div className='desc ms-3'>
                      <div className='fw-bold'>{item.spaceName} <img src="dot.svg" alt="" /> <span className='follow-link text-primary'>Follow</span></div>
                      <div className='text-secondary'>Answered By {item.userName} <img src="dot.svg" alt="" />  <span className='date text-decoration-underline'>{item.showDate}</span></div>
                    </div>
                  </div>
                  <div className='post-text mt-2 px-3 pt-1'>
                    <p className='question fw-bold'>{item.questionTitle}</p>
                    <div className='text-container'>
                      <p className="answerArea">
                        {item.answer}
                      </p>
                      <span className='more-link text-primary' onClick={toggleHeight}>(<span>more</span>)</span>
                    </div>
                  </div>
                  <div className="image-div mt-2">
                    <img src={item.postImage} alt={`post-${index}`}/>
                  </div>
                  <div className='reaction-section d-flex mx-2 mt-2'>
                    <div className='d-flex justify-content-center capsule-btns'>
                        <button type='button' className='btn upvote-button pe-2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4 3 15h6v5h6v-5h6z" className="icon_svg-stroke icon_svg-fill" strokeWidth="1.5" stroke="#666" fill="none" strokeLinejoin="round"></path></svg>
                            <span className='ms-2 reaction-count'>{item.upvoteCount}</span>
                        </button>
                        <button className="btn downvote-button">
                          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" className="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" strokeWidth="1.5" strokeLinejoin="round"></path></svg>
                          <span className='ms-2 reaction-count'>{item.downvoteCount}</span>
                        </button>
                    </div>
                    <div className="comment-section ms-2">
                      <button type='button' className='btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z" className="icon_svg-stroke icon_svg-fill" stroke="#666" strokeWidth="1.5" fill="none"></path></svg>
                        <span className='ms-2 mt-2 reaction-count'>{item.commentCount}</span>
                    </button>
                    </div>
                    <div className="share-section ms-2">
                      <button type="button" className="btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g className="icon_svg-stroke" stroke="#666" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round"><path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path><path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path></g></svg>
                        <span className='ms-2 mt-2 reaction-count'>{item.shareCount}</span>
                      </button>
                    </div>
                  </div>
                </div>
              })}
            </div>
            <div className="col-3" id="suggestion-section">
              <div className="head px-3 pb-2 mt-2 fw-bold">Spaces to follow</div>
              <ul className='suggestion-list'>
                {suggestionLists.map((element,index)=>{
                  return <li className='d-flex px-3 pt-1' key={index}>
                    <img className="sugg-logo" src={element.icon} alt={`icon-${index}`}/>
                    <div className='ms-2'>
                      <small className="sugg-header fw-bold">{element.title}</small>
                      <p className="sugg-desc">{element.description}</p>
                    </div>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Darken background */}
      {props.activeTab != null ? hashBackground() : ""}
      {props.opaque === 1 ? returnState() : ""}
      {props.activeTab !== null ? <PopupDialog userAction={props.activeTab} setActive={props.onTabClick}
        opaque={props.opaque} makeOpaque={props.makeOpaque} /> : ""}
    </div>
  )
}
