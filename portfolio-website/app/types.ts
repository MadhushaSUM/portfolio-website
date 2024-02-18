export interface EducationTileParams {
    timePeriod: string,
    organization: string, 
    details: string,
}
export interface ExperienceTileParams {
    timePeriod: string,
    organization: string, 
    details: string,
}
export interface ProjectsTileParams {
    timePeriod: string,
    projectName: string, 
    details: string,
    tagTexts: string[],
}
export interface TagParams {
    text: string
}
export interface TagBarParams {
    tagTexts: string[]
}
export interface PostPrevParams {
    flipped: boolean,
    imageURL: string,
    header: string,
    content: string
}