import { ProjectsTileParams } from '@/app/types'
import TagBar from './TagBar'

const ProjectsTile = ({ timePeriod, projectName, details, tagTexts = [] }: ProjectsTileParams) => {
    return (
        <div className='glass-card p-5'>
            <div className='flex flex-col sm:flex-row gap-2'>
                <div className='sm:w-1/4'>
                    <p>
                        {timePeriod}
                    </p>
                </div>
                <div className='sm:w-3/4 flex flex-col gap-2'>
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