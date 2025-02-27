import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         age: ''
//     }

//     handleOnChangeName = (e) => {
//         this.setState({
//             name: e.target.value
//         })
//     }
//     handleOnChangeAge = (e) => {
//         this.setState({
//             age: e.target.value
//         })
//     }

//     handleOnSubmit = (e) => {
//         e.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + "-random",
//             name: this.state.name,
//             age: this.state.age
//         });

//     }

//     render() {
//         return (
//             <div>
//                 my name is {this.state.name} and my age is {this.state.age} <br />

//                 <form onSubmit={(e) => this.handleOnSubmit(e)}>
//                     <label>Enter your name</label>
//                     <input
//                         type="text" placeholder="Enter your age"
//                         value={this.state.name}
//                         onChange={(e) => this.handleOnChangeName(e)}
//                     />
//                     <br />
//                     <label>Enter your age</label>
//                     <input
//                         value={this.state.age}
//                         type="text" placeholder="Enter your age"
//                         onChange={(e) => this.handleOnChangeAge(e)}
//                     />
//                     <br />

//                     <button>Submit</button>

//                 </form>
//             </div>
//         )
//     }
// }


const AddUserInfor = (props) => {
    
    // state = {
    //     name: '',
    //     age: ''
    // }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleOnChangeName = (e) => {
        setName(e.target.value);
    }
    const handleOnChangeAge = (e) => {
        setAge(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: name,
            age: age
        });

    }
    return (
            <div>
                my name is {name} and my age is {age} <br />

                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <label>Enter your name</label>
                    <input
                        type="text" placeholder="Enter your age"
                        value={name}
                        onChange={(e) => handleOnChangeName(e)}
                    />
                    <br />
                    <label>Enter your age</label>
                    <input
                        value={age}
                        type="text" placeholder="Enter your age"
                        onChange={(e) => handleOnChangeAge(e)}
                    />
                    <br />

                    <button>Submit</button>

                </form>
            </div>
    )
}

export default AddUserInfor;