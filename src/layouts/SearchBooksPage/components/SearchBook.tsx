import { Link } from "react-router-dom";
import BookModel from "../../../models/BookModel";

export const SearchBook: React.FC <{book : BookModel}> = (props) => {
     return (
         <div className="card mt-3 shadow mb-3 bg-body rounded">
             <div className="row g-0">
                 <div className="col-md-2">  
                      <div className="d-none d-lg-block">
                         {props.book.img ?
                          <img src={props.book.img}
                          width = "123"
                          height= "196"
                          alt="Book" 
                      />
                      :

                         <img src={require("./../../../Images/BooksImages/book-luv2code-1000.png")}
                         width = "123"
                         height= "196"
                         alt="Book" 
                         />

                         }
                      </div>
                    <div className="d-lg-none d-flex justify-content-center
                         align-items-center">
{props.book.img ?
                          <img src={props.book.img}
                          width = "123"
                          height= "196"
                          alt="Book" 
                      />
                      :

                         <img src={require("./../../../Images/BooksImages/book-luv2code-1000.png")}
                         width = "123"
                         height= "196"
                         alt="Book" 
                         />

                         }
                    </div>   
                   </div>
                   <div className="col-md-6">
                    <div className="card-body">
                        <h5>
                            {props.book.author}
                        </h5>
                        <h4>
                            {props.book.title}
                        </h4>
                        <p className="card-text">
                        {props.book.description}             
                        </p>

                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <Link className="btn btn-md main-color text-white" to={`/checkout/${props.book.id}`}
                    onClick={() => window.scrollTo(0,0)}>
                            View Details
                    </Link>
                </div>      
             </div>
         </div>
     );
}
