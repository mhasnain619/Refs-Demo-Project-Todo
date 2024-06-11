import Button from './Button.jsx'

const ProjectSidebar = ({ onStartAddProject }) => {
    return (
        <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 ma:w-18 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Project</h2>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
            <ul>

            </ul>
        </aside>
    )
}

export default ProjectSidebar
