import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import http from './jedes/http-axios'
import MainPage from './jedes/mainPage' 
import Search from './jedes/searchPage'
import Anmeldung from './jedes/anmeldung'
import Mitgliedbearbeiten from './jedes/mitgliedbearbeiten'

class MainFrame extends Component {
  constructor () {
    super ();
    this.state = {
      logStauts: "Log-in",
      projectSearch: null
    }
    this.sortOutData = this.sortOutData.bind(this) 
  }
  componentDidMount () {
    const zertifikat = {"token": localStorage.getItem('token')}
    http.post("/api/post", zertifikat).then((res) => {
        if (res.data.status === 'login') { 
          this.setState({ logStauts: "@" })
        } else if (res.data.status === '400' || res.data.status === '401') {
          //token expire
          this.setState({ logStauts: "Log-in" })
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        } else {
          //token expire
          this.setState({ logStauts: "Log-in" })
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        }
    })
  }
  sortOutData () {
      if (this.state.projectSearch == null) {
          this.setState({ searchResult: "Please input something before search" })
      } else { 
          this.setState({ searchResult: null })
      }
      http.post("/searchPerformance", {search: this.state.projectSearch.replace(/\W+/g, '-').toLowerCase()}).then((res) => {
         if (res.data.negative === "empty") {
             this.setState({ searchResult: "Search no result" })
          } else if (res.data.negative === "error") {
              this.setState({ searchResult: res.data.error })
          } else {
              this.setState({ importDefualtList: res.data.vollList })
          } 
      })
  }
  render () {
    return (
      <Router>
      <body className="main-frame-tighten">
        <div className="title-row separate-two-side title-bottom-linie">
          <div className="title-text text-pointer" onClick={() => {window.location = `/`}}>makrTrade</div>
          {/*<div className="title-row">
              <div><input className="searchbar-input-project" type="text" onChange={(e) => {this.setState({projectSearch: e.target.value})}}/></div>
              <div><button className="search" onClick={() => {this.sortOutData()}}>Search</button></div>
          </div>*/}
          <div className="title-row">
            <div className="width-option text-pointer title-text" onClick={() => {window.location = '/search'}}>Search</div>
            {this.state.logStauts === "Log-in" && <div className="width-option text-pointer title-text" onClick={() => {window.location = '/anmeldung'}}>{this.state.logStauts}</div>}
            {this.state.logStauts === "@" && <div className="width-option text-pointer title-text" onClick={() => {window.location = `/mitglied/id=${localStorage.getItem('user')}`}}>{this.state.logStauts}</div>}
          </div>
        </div>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/anmeldung' element={<Anmeldung/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/mitgliedbearbeiten/id=:kontoname' element={<Mitgliedbearbeiten />}/> {/*render={(props) => <Mitgliedbearbeiten {...props}/>} */}
        </Routes>
        <br />
        <div className="boden-text">
          <div className="boden-linie"></div>
          <div>@2022 makrTrade, All Rights Reserved. Fernenda Limited</div>
        </div>
      </body>
      </Router>
    )
  }
}

export default MainFrame;
