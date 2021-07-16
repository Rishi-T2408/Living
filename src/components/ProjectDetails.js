import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import DetailList from "./Images/DetailList.png"
import details1 from "./Images/details1.png"

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="Details">
        <article>
                    <div className="Centre">
                     <h2 className="cate">Category - {project.category}</h2>
                    <h1 className="tits">{ project.title }</h1>
                    <img  alt="Designed by freepik" src={DetailList} className="Dil"/>
                    </div>
                    <div className="Gridss">
                <img src={details1} className="Picd" alt="diet pic"  />
                    <div className="div">
                        <p className="Effect">{project.para1}</p>
                        <p className="Effect">{project.para2}</p>
                        <p className="Effect">{project.para3}</p>
                    </div>

    <h4 className="rishi">Written by - {project.authorFirstName} {project.authorLastName}</h4>
                    </div>
                </article>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  let id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects',

  }])
)(ProjectDetails)