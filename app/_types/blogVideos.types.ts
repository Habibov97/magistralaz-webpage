export type BlogVideosTypes = {
    id: number;
    link: string;
    title: string;
}

export type BlogItemsTypes = {
    id: number;
    title: string;
    videos: BlogVideosTypes[];
}
