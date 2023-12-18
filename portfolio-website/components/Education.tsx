import '@/css/Education.css'
import EducationTile from './EducationTile'

const Education = () => {
    return (
        <div className='education-wrapper'>
            <h3 className='education-h3'>Education</h3>
            <EducationTile 
                timePeriod='2021 - Present'
                organization='University of Moraruwa' 
                details='The University of Moratuwa is the most popular technical university 
                in Sri Lanka. I qualified for admission based on my A/L results. Currently, 
                I am studying in the Department of Electrical Engineering.'
            />
            <EducationTile 
                timePeriod='2011 - 2019'
                organization='Telijjawila Central Collage' 
                details='I qualified to enter Telijjawila Central College after the Grade 5 
                    scholarship exam, where I completed both my O/Ls and A/Ls. I pursued the 
                    physical science stream and sat for the A/Ls in 2019. I ranked 17th (New 
                    Syllabus) in the Matara District, and my z-score was 2.511.'
            />
        </div>
    )
}

export default Education