const ProjectSummary = ({project}) => {
    return (  
        <div className="blogsA">
        <div className="blog-preview">
          <span className="tit">{project.title}</span>
          <p className='aut'>Author- {project.authorFirstName} {project.authorLastName}</p>
    <p className='cattt'>Category- {project.category}</p>
          <p className="time">12:15 Monday 2021</p>
        </div>
      </div>
    );
}
 
export default ProjectSummary; 