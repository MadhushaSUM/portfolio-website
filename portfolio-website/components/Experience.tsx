import '@/css/Experience.css'
import ExperienceTile from './ExperienceTile'

const Experience = () => {
    return (
        <div className='experience-wrapper'>
            <h3 className='experience-h3'>Experience</h3>
            <ExperienceTile
                timePeriod='2023 - Present'
                organization='WealthOS'
                details='I kick started my software engineering career as a intern
                    software engineer. Currently, I contribute to design and develop
                    full stack applications.'
            />
        </div>
    )
}

export default Experience