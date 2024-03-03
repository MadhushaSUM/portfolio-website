import { EducationTileParams } from "@/app/types"
import '@/css/EducationTile.css'

const EducationTile = ({timePeriod, organization, details}: EducationTileParams) => {
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
                    <b>{organization}</b>
                </p>
                <p>
                    {details}
                </p>
            </div>
        </div>
        </div>
    )
}

export default EducationTile