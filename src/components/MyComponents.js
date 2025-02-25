import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponents extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Linh Nguyen', age: 10 },
            { id: 2, name: 'Lyan Nguyen', age: 20 },
            { id: 3, name: 'Ligg Ruan', age: 30 }
        ]
    };

    handleAddNewUser = (newUser) => {
        // let listUsersClone = [...this.state.listUsers]
        // listUsersClone.unshift(newUser)

        // this.setState({
        //     listUsers: listUsersClone
        // })

        this.setState({
            listUsers: [newUser, ...this.state.listUsers]
        });
    }

    handleDeleteUser = (id) => { 
        let listUsersClone = this.state.listUsers.filter(user => user.id !== id)
        this.setState({
            listUsers: listUsersClone
        })

        // let listUsersClone = [...this.state.listUsers]
        // let index = listUsersClone.findIndex(user => user.id === id)
        // listUsersClone.splice(index, 1)

        // this.setState({
        //     listUsers: listUsersClone
        // })
    }

    //JSX
    render() {
        //props
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </div >
        );
    }
}

export default MyComponents;