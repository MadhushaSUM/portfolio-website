import { ExperienceTileParams } from "@/app/types"
import '@/css/EducationTile.css'

const ExperienceTile = ({timePeriod, organization, details}: ExperienceTileParams) => {
    return (
        <div className='flex flex-row'>
            <div className='w-1/4'>
                <p>
                    {timePeriod}
                </p>
            </div>
            <div className='w-3/4 flex flex-col space-y-5'>
                <p>
                    <b>{organization}</b>
                </p>
                <p>
                    {details}
                </p>
            </div>
        </div>
    )
}

export default ExperienceTile