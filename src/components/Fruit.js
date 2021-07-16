import React, { Component } from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Fruit extends Component {
  render() {
    
    // console.log(this.props);
    const { projects } = this.props;
    
    return (
      <div className="alla">
        <div className="row">
        
          <div className="col s12 m6">
            <ProjectList projects={projects.filter(project => project.category === 'Plant protein')} />
          </div>
         
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' ,
    where : [
      [
        'category',
        '==',
        'Fruit benfits'
      ]
    ]
  }
   
    ]
  )
)(Fruit)