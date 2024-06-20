
import { useState } from 'react'
import './App.css'
import NewProject from './components/NewProject'
import NoProjectedSelected from './components/NoProjectedSelected'
import ProjectSidebar from './components/ProjectSidebar'

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddNewProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    }
    )
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    }
    )

  }


  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectedSelected onStartAddProject={handleStartAddNewProject} />
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar onStartAddProject={handleStartAddNewProject} />
      {content}

    </main>
  )
}

export default App
