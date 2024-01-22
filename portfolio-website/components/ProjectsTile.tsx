import { ProjectsTileParams } from '@/app/types'
import TagBar from './TagBar'

const ProjectsTile = ({ timePeriod, projectName, details, tagTexts = [] }: ProjectsTileParams) => {
    return (
        <div className='glass-card p-5'>
            <div className='flex flex-row'>
                <div className='w-1/4'>
                    <p>
                        {timePeriod}
                    </p>
                </div>
                <div className='w-3/4 flex flex-col space-y-5'>
                    <p>
                        <b>{projectName}</b>
                    </p>
                    <p>
                        {details}
                    </p>
                    <TagBar tagTexts={tagTexts} />
                </div>
            </div>
        </div>
    )
}

export default ProjectsTile