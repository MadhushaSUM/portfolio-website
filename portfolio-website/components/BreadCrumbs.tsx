
export default function BreadCrumbs({ pathArr }: { pathArr: {name: string, path: string}[] }) {
    return (
        <div className="flex flex-wrap">
            {pathArr.map( (dir, index) => {
                return (
                    <span key={index}>
                        <span className='PostDetailsValues'>
                            {index === pathArr.length - 1 ? `${dir.name} ` : <a href={dir.path}>{`${dir.name} `}</a>}                            
                        </span>
                        {
                            index != pathArr.length - 1 &&
                                <span className='PostDetails'>
                                    {`/ `}
                                </span>
                        }
                    </span>
                )
            })}
        </div>
    )
}