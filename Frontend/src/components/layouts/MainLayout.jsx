import { NavLink, Outlet } from "react-router-dom";


export default function MainLayout(){
    return(
        <>
            <header>
                <nav className="border border-amber-500">
                    <ul className="flex justify-around items-center">
                        <NavLink to='/'><h1 className="text-3xl font-semibold">Litpost</h1></NavLink>
                        <NavLink to='/create-blog'><h2>Post</h2></NavLink>
                        <img src="/favicon.png" className="w-16 h-16"/>
                        <NavLink to='/signup'><h2>Signup</h2></NavLink>
                        <NavLink to='/signin'><h2>Signin</h2></NavLink>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer>
                <div className="flex justify-center border border-amber-500">
                    <h3>Designed & Developed By <span>Vaibhav Lohani</span></h3>
                </div>
            </footer>
        </>
    )
}