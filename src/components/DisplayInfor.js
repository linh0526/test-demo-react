import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

const DisplayInfor = (props) => {
    //destructuring 
    const { listUsers } = props //object

    //destructuring assignment
    const [isShowHideListUser, setShowHideListUser] = useState(true); //array, function,
    
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    
    useEffect(() => {
        setTimeout(() => {
            document.title = "Lyan Web";
        }, 3000);
        console.log('>> call me useEfect');
    });

    return (
        <div className="display-infor-container"> 
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser ? "Hide List User" : "Show List User"}
                    </span>
            </div>
            {isShowHideListUser && 
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id}>
                                <div  className={user.age > 18 ? "red" : "blue"}>
                                    <p>Name: {user.name}</p>
                                    <p>Age: {user.age}</p>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>X</button>
                                </div>
                                <hr/>
                            </div>
                        )

                    }
                    )}
                </>
            }

            <img src={logo}/>
        </div>

    )
}

export default DisplayInfor;