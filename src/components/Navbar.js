import { useEffect } from 'react';
import './css/Navbar.css'

export const Navbar = (props) => {
    const makeActive = (e)=> {
        // e.preventDefault();
        const clickedElement = e.currentTarget.previousElementSibling.textContent;
        window.localStorage.setItem("activated-item",clickedElement);
        // // Remove the "active" class from all elements with the class name ".icon-Link"
        // document.querySelectorAll(".icon-Link").forEach((ele) => {
        //     ele.classList.remove("activated-header");
        // });

        // Add the "active" class to the clicked element
    }
    const activateHoverHelp = (e)=>{
        e.preventDefault();
        const link = e.currentTarget;
        const hoverHelp = link.nextSibling;
        hoverHelp.style.display = "block";
       
        link.addEventListener("mouseout", () => {
            hoverHelp.style.display = "none";
          });
    }
    const activatePopup = (event)=>{
        const tabType = event.target.textContent.trim();
        const func = props.onTabClick;
        props.makeOpaque(0.5);
        document.querySelector(".navbar").style.opacity = "0.5";
        func(tabType);
    }
    const opacityHandler = ()=>{
        if (props.opaque === 1){
            document.querySelector(".navbar").style.opacity = "1";
        }
    }
    const handleActivation = ()=>{
        const elementName = window.localStorage.getItem("activated-item");
        console.log(elementName);
        if (elementName === "Home")
            document.querySelectorAll(".icon-Link")[0].classList.add("activated-header");
        else if (elementName === "Following")
            document.querySelectorAll(".icon-Link")[1].classList.add("activated-header");
        else if (elementName === "Q&A")
            document.querySelectorAll(".icon-Link")[2].classList.add("activated-header");
        else if (elementName === "Spaces")
            document.querySelectorAll(".icon-Link")[3].classList.add("activated-header");
        else if (elementName === "Notification")
            document.querySelectorAll(".icon-Link")[4].classList.add("activated-header");
        
        window.localStorage.clear();
    }
    opacityHandler();
   useEffect(()=>{
    handleActivation();
   },[])
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/homepage">
                        <img id="pri-logo" src="logo.png" alt="quora-logo" />
                    </a>
                    {/* Profile icon displayed on lower screen resolution */}
                    <div className='toggle-view' id="profile-image">
                        <img id="profile-pic" src="person-fill.svg" alt="profile" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-1">
                                <span className='toggle-view'>Home</span>
                                <a className="nav-link icon-Link px-3" aria-current="page" href="/homepage" onClick={(e) => makeActive(e)} onMouseOver={(e)=>activateHoverHelp(e)}>
                                    <img className="nav-img" src="house-door.svg" alt="home" />
                                </a>
                                <span className="badge rounded-pill text-secondary hover-help">Home</span>
                            </li>
                            <li className="nav-item mx-1">
                                <span className='toggle-view'>Following</span>
                                <a className="nav-link icon-Link px-3" href="/homepage" onClick={(e) => makeActive(e)} onMouseOver={(e)=>activateHoverHelp(e)}>
                                    <img className="nav-img" src="card-checklist.svg" alt="q&a" />
                                </a>
                                <span className="badge rounded-pill text-secondary hover-help">Following</span>
                            </li>
                            <li className="nav-item mx-1">
                                <span className='toggle-view'>Q&A</span>
                                <a className="nav-link icon-Link px-3" href="/homepage" onClick={(e) => makeActive(e)} onMouseOver={(e)=>activateHoverHelp(e)}>
                                    <img className="nav-img" src="pencil-square.svg" alt="answer" />
                                </a>
                                <span className="badge rounded-pill text-secondary hover-help">Answer</span>
                            </li>
                            <li className="nav-item mx-1">
                                <span className='toggle-view'>Spaces</span>
                                <a className="nav-link icon-Link px-3" href="/homepage" onClick={(e) => makeActive(e)} onMouseOver={(e)=>activateHoverHelp(e)}>
                                    <img className="nav-img" src="people.svg" alt="follow" />
                                </a>
                                <span className="badge rounded-pill text-secondary hover-help">Spaces</span>
                            </li>
                            <li className="nav-item mx-1">
                                <span className='toggle-view'>Notification</span>
                                <a className="nav-link icon-Link px-3" href="/homepage" onClick={(e) => makeActive(e)} onMouseOver={(e)=>activateHoverHelp(e)}>
                                    <img className="nav-img" src="bell.svg" alt="notification" />
                                </a>
                                <span className="badge rounded-pill text-secondary hover-help">Notification</span>
                            </li>
                            <li className='nav-item mx-1 rem-sm nav-search' id="default-hover">
                                <form id="search-form" role="search">
                                    <span id="floating-span">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                        <span className="ms-2 placeholder-text txt-secondary">Search Quora</span>
                                    </span>
                                    <input id="searchBar" className="form-control me-2" type="search" aria-label="Search" />

                                </form>
                            </li>
                            <li className="nav-item mx-1 rem-sm">
                                <a className="nav-link" href="/" id="default-hover">
                                    <span className="badge rounded-pill text-secondary" id="quoraPlus">Try Quora+</span>
                                </a>
                            </li>
                            <li className="nav-item mx-1 rem-sm">
                                <a className="nav-link px-3" href="/">
                                    <img id="profile-pic" src="person-fill.svg" alt="profile" />
                                </a>
                            </li>
                            <li className="nav-item mx-1 rem-sm">
                                <a className="nav-link px-3" href="/">
                                    <img src="globe.svg" alt="language" />
                                </a>
                            </li>
                            <li className="nav-item mx-1 rem-sm" id="default-hover">
                                <div id="dropdown-block" className="btn-group dropdown">
                                    <button type="button" className="btn btn-danger" onClick={(e)=>activatePopup(e)}>
                                        Add Questions
                                    </button>
                                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu create-post-menu">
                                        <li onClick={(e)=>activatePopup(e)}>
                                            &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>&nbsp;&nbsp;
                                            Create Post
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
