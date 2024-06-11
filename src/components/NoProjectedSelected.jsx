import image from '../assets/noProject.png'
import Button from './Button.jsx'

const NoProjectedSelected = (onStartAddProject) => {
    return (
        <div className='mt-24 text-center w-2/3'>
            <img src={image} alt="empety task" className='w-16 h-16 object-contain mx-auto' />
            <h2 className='text-xl font-bold text-stone-500  my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'> Selected a Project or Get Started new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>Create New Project</Button>
            </p>
        </div>
    )
}

export default NoProjectedSelected
