import axios from "axios";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";



export default function MainLayout(){
    const { loggedIn, setLoggedIn } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false);

    async function Signout(){
        await axios
                .post('/api/v1/user/signout')
                .then(()=>{
                  setLoggedIn(false)
                  alert('Signed Out Successfully !')
                })
                .catch((err)=> console.log(err))
    }
    return(
        <>
             <header>
        <nav className="bg-[#faf7ef] text-[#9d0619] shadow-md">
          <div className="flex justify-between items-center px-6 py-3">
            {/* Brand */}
            <NavLink
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
                <img
                    src="/favicon.png"
                    alt="logo"
                    className="w-12 h-12 rounded-full border-2 border-[#9d0619]"
                />
              <h1 className="text-3xl font-bold tracking-wide">LITPOST</h1>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 font-semibold">
                
              <NavLink
                to="/add-blog"
                className="hover:text-white hover:bg-[#9d0619] px-3 py-1 rounded-md transition"
              >
                Post
              </NavLink>

              {!loggedIn && (
                <>
                  <NavLink
                    to="/signup"
                    className="hover:text-white hover:bg-[#9d0619] px-3 py-1 rounded-md transition"
                  >
                    Signup
                  </NavLink>
                  <NavLink
                    to="/signin"
                    className="hover:text-white hover:bg-[#9d0619] px-3 py-1 rounded-md transition"
                  >
                    Signin
                  </NavLink>
                </>
              )}

              {loggedIn && (
                <button
                  onClick={Signout}
                  className="!bg-transparent !text-[#9d0619] hover:!text-white hover:!bg-[#9d0619] px-3 py-1 rounded-md transition"
                >
                  Signout
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col gap-3 px-6 pb-4 font-semibold bg-[#faf7ef] border-t border-[#9d0619]/20">
              <NavLink
                to="/add-blog"
                className="hover:text-white hover:bg-[#9d0619] px-3 py-1 rounded-md transition text-center mt-4"
                onClick={() => setMenuOpen(false)}
              >
                Post
              </NavLink>

              {!loggedIn && (
                <>
                  <NavLink
                    to="/signup"
                    className="hover:text-white hover:bg-[#9d0619] px-3 py-1 rounded-md transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Signup
                  </NavLink>
                  <NavLink
                    to="/signin"
                    className="hover:text-white hover:bg-[#9d0619] px-3 py-1 rounded-md transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    Signin
                  </NavLink>
                </>
              )}

              {loggedIn && (
                <button
                  onClick={() => {
                    Signout();
                    setMenuOpen(false);
                  }}
                  className="!bg-transparent !text-[#9d0619] hover:!text-white hover:!bg-[#9d0619] px-3 py-1 rounded-md transition"
                >
                  Signout
                </button>
              )}
            </div>
          )}
        </nav>
      </header>

            <div className="flex flex-col min-h-screen">
                <main className="flex-grow p-12">
                    <Outlet />
                </main>

            <footer className="mt-auto  fixed bottom-0 left-0 w-full bg-[#faf7ef] text-[#9d0619] border-t border-[#9d0619]/20">
                <div className="flex justify-center py-3 text-sm">
                <h3>
                    Designed & Developed By{" "}
                    <span className="font-semibold underline">Vaibhav Lohani</span>
                </h3>
                </div>
            </footer>
            </div>
        </>
    )
}