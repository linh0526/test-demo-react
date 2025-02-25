import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    HandleShowHide() {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        //destructuring array / object
        const { listUsers } = this.props //object

        console.log(listUsers)
        // console.table(listUsers)
        return (
            <div class="display-infor-container">
                <div>
                    <span onClick={() => { this.HandleShowHide() }}>
                        {this.state.isShowListUser ? "Hide Users" : "Show Users"}
                    </span>
                </div>

                {this.state.isShowListUser && <div>
                    {listUsers.map((user, index) => {
                        return (
                            <>
                            <div key={user.id} class={user.age > 18 ? "red" : "blue"}>
                                <p>Name: {user.name}</p>
                                <p>Age: {user.age}</p>
                            </div>
                            <div>
                                <button onClick={() => this.props.handleDeleteUser(user.id)}>X</button>
                            </div>
                            <hr/>
                            </>
                        )

                    }
                    )}
                </div >}

                <img src={logo}/>
            </div>

        )
    }
}

export default DisplayInfor;