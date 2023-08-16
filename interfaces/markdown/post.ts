export interface IMarkdownPost {
    title: string;
    date: string;
    id: string;
}

export interface IMarkDownPostPage extends IMarkdownPost {
    content: string
}