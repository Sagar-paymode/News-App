import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  apiKey = '220b5bd4686640058bb7ff95e60944b4'
  state = {
    progress : 0
  }
  setProgress = (progress) => (
    this.setState({progress:progress})
  )
  
  render() {
    return (
      
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress= {this.state.progress}
        height= {3}
        
      />
        <NavBar/>
          <Routes>
            
            <Route  path='/'  element={ <News setProgress = {this.setProgress}  apiKey={this.apiKey}    key="general" pageSize={this.pageSize} country="in" category ="general"/>}/>
            <Route  path='/business'  element={ <News setProgress = {this.setProgress}  apiKey={this.apiKey}     key="business" pageSize={this.pageSize} country="in" category ="business"/>}/>
            <Route  path='/entertainment'  element={<News setProgress = {this.setProgress}  apiKey={this.apiKey}    key ="entertainment" pageSize={this.pageSize} country="in" category ="entertainment"/>}/>
            <Route  path='/health'  element={<News setProgress = {this.setProgress}  apiKey={this.apiKey}     key="health" pageSize={this.pageSize} country="in" category ="health"/>}/>
            <Route  path='/science'  element={<News setProgress = {this.setProgress}  apiKey={this.apiKey}    key="science" pageSize={this.pageSize} country="in" category ="science"/>}/>
            <Route  path='/sports'  element={<News setProgress = {this.setProgress}  apiKey={this.apiKey}    key="sports" pageSize={this.pageSize} country="in" category ="sports"/>}/>
            <Route  path='/technology' element={<News setProgress = {this.setProgress}  apiKey={this.apiKey}     key="technology" pageSize={this.pageSize  } country="in" category ="technology"/>}/>
            
          </Routes>
        </Router>
      </div>
    )
  }
}




