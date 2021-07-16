import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../actions/projectActions'



class CreateProject extends Component {
  state = {
    category: '',
    title: '',
    authorFirstName: '',
    authorLastName: '',
    para1: '',
    para2: '',
    para3: '',
   
  }
 
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state); 
    this.props.history.push('/')

  }
 
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h2 className="headc">WRITE AN NEW BLOG</h2>
          <div className="input-field1">
          <label htmlFor="title">Category</label>
                <select
                required 
                id='category' 
                onChange={this.handleChange}>
                    <option value="Fruit benefits">Fruit benfits</option>
                    <option value="Plant protein">Plant protein</option>
                    <option value="Immunity booster">Immunity booster</option>
                    <option value="Weight loss">Weight loss</option>
                </select>
          </div>
          <div className="input-field1">
            <label htmlFor="title">Blog Title</label>
            <input required type="text" id='title' onChange={this.handleChange} />
           
          </div>
          <div className="input-field1">
            <label htmlFor="authorFirstName">Author first Name</label>
            <input required type="text" id='authorFirstName' onChange={this.handleChange} />
           
          </div>
          <div className="input-field1">
            <label htmlFor="authorLastName">Author last Name</label>
            <input required type="text" id='authorLastName' onChange={this.handleChange} />
           
          </div>
          <div className="input-field">
          <label htmlFor="para1">Paragraph one</label>
            <textarea id="para1" required className="materialize-textarea" onChange={this.handleChange}></textarea>
            
          </div>
          
          <div className="input-field">
          <label htmlFor="para2">Paragraph two</label>
            <textarea id="para2" required className="materialize-textarea" onChange={this.handleChange}></textarea>
            
          </div>

          <div className="input-field">
          <label htmlFor="para3">Paragraph three</label>
            <textarea id="para3" className="materialize-textarea" onChange={this.handleChange} ></textarea>
            
          </div>


          <div className="input-field2">
          <button className="but" >Create</button>
          </div>
          
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))    //So whenever we press the button then it will go to createProject function as an parameter in projectAction
  }
}

export default 
  connect(null, mapDispatchToProps)(CreateProject)
  