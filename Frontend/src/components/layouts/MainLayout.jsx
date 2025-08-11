import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";


export default function MainLayout(){
    function Signout(){
        axios
            .post('/api/v1/user/signout')
            .then((res)=>console.log(res.data.message))
            .catch((err)=> console.log(err))
    }
    return(
        <>
            <header>
                <nav className="bg-primary text-secondary">
                    <ul className="flex justify-around items-center font-semibold py-2.5">
                        <NavLink to='/'><h1 className="text-3xl font-semibold">LITPOST</h1></NavLink>
                        <NavLink to='/add-blog'><h2>Post</h2></NavLink>
                        <img src="/favicon.png" className="w-16 h-16"/>
                        <NavLink to='/signup'><h2>Signup</h2></NavLink>
                        <NavLink to='/signin'><h2 >Signin</h2></NavLink>
                        <button onClick={Signout}>Signout</button>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer className="bg-primary text-secondary">
                <div className="flex justify-center py-2.5">
                    <h3>Designed & Developed By <span>Vaibhav Lohani</span></h3>
                </div>
            </footer>
        </>
    )
}