import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UsersList from './users/UsersList';
import Search from './partials/Search'
import User from '../entites/User';
import { userService } from './services/UserService';
import Loader from "./partials/loader"
import  "../App.css"



class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      load:true,
      users: [],
      filteredUsers: [],
      isGrid: localStorage.getItem('isGrid') === "true",
    }
  }

  componentDidMount() {
    this.onLoad();
  }

  onClickChangeView = event => {
    event.preventDefault();

    if (this.state.isGrid) {
      this.setState({ isGrid: false })
      localStorage.setItem("isGrid", false);
    } else {
      this.setState({ isGrid: true });
      localStorage.setItem("isGrid", true);
    }
  }
  onClickRefreshPage = (event) => {
    event.preventDefault();
    this.onLoad();
    this.setState({
      load :true
    })
  }

  onLoad = () => {
    userService.fetchUsers()
      .then((users) => {
        this.setState({
          users: users,
          filteredUsers: users,
          load: false
        })

      })
  }
  onSearchValueChange = (searchValue) => {
    const filteredUsers = this.state.users.filter((user, index, array) => {
      if (user.firstName.includes(searchValue)) {
        return user;
      }
    })
    this.setState({ filteredUsers })

  }
  render() {

    return (
      <div className='container'>
        <Header viewChange={this.onClickChangeView} refreshPage={this.onClickRefreshPage} isGrid={this.state.isGrid} />
        <Search onSearchValueChange={this.onSearchValueChange} />

       {this.state.load ? <Loader/> : <UsersList data={this.state.filteredUsers} isGrid={this.state.isGrid} />}

        <Footer />
      </div>
    )

  }
}


export default App;
