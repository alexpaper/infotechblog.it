import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/styles";
import { GlobalContext } from "../Context/GlobalState";
import { GlobalUsersContext } from "../Context/GlobalUsersMessage";
import Nav from './Nav';

//**** FUNCTION */
function Header(props) {
  const { openModalFunc, openModalSignUp, openModalLogin } = props;

  const [open, setOpen] = React.useState(false);
  const [searchInput, setSearch] = React.useState("");

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

  //**** Styles
  // const { classes } = props;

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
          <header
            className={!open ? "info-header" : "info-header back-white-color"}
          >
            <div className="contentHeader">
              <div className="switch">
                <input
                  id="switch-1"
                  type="checkbox"
                  onClick={context.darkMode}
                  className="switchInput"
                />
                <label htmlFor="switch-1" className="switchLabel"></label>
              </div>

              <h1 className={!open ? "info-title" : "info-title dark-color"}>
                {" "}
                Info Tech Blog.it
              </h1>
              <div className="info-subtitle">

                <div>{contextUsers.state.user._id !== 0 && contextUsers.state.user.fname !== undefined ?
                  `Ciao ${contextUsers.state.user.fname}`
                  :
                  'Usefull information about tech. Stay informed 🤓!'}</div>
              </div>

            </div>
          </header>

          <div className="info-search">
            <div className="info-home">
              <a href="/">
                <img src="img/home.png" className="btn-home" alt="home" />
              </a>
            </div>
            <form className="search-form" onSubmit={onSearchSubmit}>
              <input
                type="text"
                name="search"
                className="search-input"
                id="search-input"
                value={searchInput}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
              />

              <input
                type="submit"
                id="search-submit"
                className="search-submit"
              />
            </form>
          </div>
          <button onClick={() => openModalFunc()} className="info-btn-add">
            +
          </button>


          <div className="info-msg">{typeof contextUsers.state.msg != "undefined" ? contextUsers.state.msg : ""}</div>
        </div>
      </div>
    </>
  );
}

export default React.memo(withStyles(styles)(Header));
