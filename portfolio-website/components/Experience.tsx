import '@/css/Experience.css'
import ExperienceTile from './ExperienceTile'

const Experience = () => {
    return (
        <div id='experience-section' className='experience-wrapper'>
            <h3 className='experience-h3'>Experience</h3>
            <ExperienceTile
                timePeriod='2023 - Present'
                organization='WealthOS'
                details='I kick started my software engineering career as a intern
                    software engineer. Currently, I contribute to design, develop, 
                    test, and deploy full stack applications.'
            />
        </div>
    )
}

export default Experience