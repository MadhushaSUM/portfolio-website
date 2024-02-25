import { PostContentItemTypes } from "./enums"

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
    post: Post
}
export interface PostContentItem {
    type: PostContentItemTypes,
    data?: string
}
export interface Post {
    id: number,
    title: string,
    previewImageURL: string,
    createdDate: string,
    author: string,
    brief: string,
    tags: string[],
    topic: string,
    contentArray: PostContentItem[]
}
