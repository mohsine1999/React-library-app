import { Link } from "react-router-dom";

export const Footer = () =>  {
       return (
           <div className="bg-dark">
               <footer className="container d-flex flex-wrap justify-content-between 
                    align-items-center py-5 bg-dark">
                    <p className="col-md-4 mb-0 text-white">© Example Library App, Inc</p>
                    <ul className="nav navbar-dark col-md-4 justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link px-2 text-white" to="/home" onClick={() => window.scrollTo(0,0)}>
                            Home
                        </Link>                
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link px-2 text-white" to="/search" onClick={() => window.scrollTo(0,0)}>
                       
                            Search Books
                        </Link>            
                    </li>
                    </ul>
               </footer>     
           </div>         
       );             
} 