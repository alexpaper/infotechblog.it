import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/styles";
import { GlobalContext } from "../Context/GlobalState";
import { GlobalUsersContext } from "../Context/GlobalUsersMessage";
import Nav from './Nav';
import Enter from './enter.svg';
import Info from './Info.svg';
import Home from './home.svg';
import Login from './login.svg';
import Plus from './plus.svg';


//**** FUNCTION */
function Header(props) {
  const { openModalFunc, openModalSignUp, openModalLogin } = props;

  const [open, setOpen] = React.useState(false);
  const [searchInput, setSearch] = React.useState("");
  const [isDarkLocal, setIsDarkLocal] = React.useState(false);

  // Import CONTEXT
  const context = React.useContext(GlobalContext);
  const contextUsers = React.useContext(GlobalUsersContext);
   // console.log(contextUsers)
  const { searchPosts } = context;
  // Function handleClick open Drawer
  const openDrawer = () => {
    setOpen(!open);
  };
  //*** ONSUBMIT ACTION */
  const onSearchSubmit = e => {
    // Prevent refresh
    e.preventDefault();
    // Search in the backend database
    searchPosts(searchInput);
    setSearch("");
  };

  // USE EFFECT
  React.useEffect(()=>{
    if(context.isDark){
      setIsDarkLocal(true);
    }
  },[context])

  //*** HIDE HEADER ON SCROLL  DOWN  */
  // let lastScrollTop = 0;
  let headerToHide = React.useRef();
  // console.log(headerToHide.current)
  // Add event listener
  let prevScrollpos = window.pageYOffset;

  window.addEventListener('scroll', function () {
    // console.log(window.pageYOffset)
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      // headerToHide.current.classList.remove('d-none')
      headerToHide.current.style.opacity = 1;
      setTimeout(() => {
        headerToHide.current.style.display = 'block';
      }, 1800)
    } else {
      // headerToHide.current.classList.add('d-none')
      headerToHide.current.style.opacity = 0;
      setTimeout(() => {
        headerToHide.current.style.display = 'none';
      }, 1800)

    }
    // console.log(prevScrollpos)
    prevScrollpos = currentScrollPos;
  });

  //**** HANDLE DARK MODE
  const handleDarkMode = ()=>{
    setIsDarkLocal(!isDarkLocal);
    context.darkMode()
  };

  //******************************************** RETURN */
  return (
    <>
      {/* NAV  */}
      <Nav
        open={open}
        openDrawer={openDrawer}
        openModalSignUp={openModalSignUp}
        openModalLogin={openModalLogin}
      />
      {/* STICKY  */}
      <div className="content-stcky">
        <div className="sticky">
          {/* HEADER  */}
          <header ref={headerToHide}
            className={!open ? "info-header" : "info-header back-white-color"}
          >
            <div className="contentHeader">
              <div className="switch">
                <input
                  id="switch-1"
                  type="checkbox"
                  checked={isDarkLocal}
                  onChange={handleDarkMode}
                  className="switchInput"
                />
                <label htmlFor="switch-1" className="switchLabel"> </label>
                <div className='sun-moon'>{isDarkLocal ? '☀️' : '🌘'}</div>
              </div>
              
              
              <div className="info-title-div">
                <img src={Info} className='info-img' alt="info"/>
                <h1 className={!open ? "info-title" : "info-title dark-color"}>
                Info Tech Blog.it
              </h1>
              </div>
            </div>
          </header>
          <div className="info-search">
            <div className="info-home">
              <a href="/">
                <img src={Home} className="btn-home" alt="home" />
              </a>
            </div>
            <form 
            className="search-form"
             onSubmit={onSearchSubmit}
             autoComplete='off'
             >
              <input
                type="text"
                name="search"
                className="search-input"
                id="search-input"
                value={searchInput}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
              />

              <button
                type="submit"
                id="search-submit"
                className="search-submit"
              >
                <img className='btn-enter' src={Enter} alt="enter"/>
              </button>
            </form>
          </div>
          <div className='info-add-post'>{contextUsers.state.user._id !== 0 && contextUsers.state.user.fname !== undefined ?
                  
                 <span onClick={openModalFunc} className="info-btn-add" role='img'><img className='info-login'  src={Plus} alt="enter"/></span>
                
                  :
                  <img className='info-login' onClick={()=>openModalLogin()} src={Login} alt="enter"/>}
            </div>
         
            <div className="info-subtitle">
                <div>{contextUsers.state.user._id !== 0 && contextUsers.state.user.fname !== undefined ?
                  `Ciao ${contextUsers.state.user.fname}`
                  :
                  'Tech info. Errors are our friends! Stay informed!'}
                  </div>
              </div>
          <div className={contextUsers.state.msg.length === 0 ? "info-msg" : "info-msg bck"}>{typeof contextUsers.state.msg != "undefined" ? contextUsers.state.msg : ""}</div>
        </div>
      </div>
    </>
  );
}

export default React.memo(withStyles(styles)(Header));
