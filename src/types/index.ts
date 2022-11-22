interface DataProps { 
    albumId: number;
    id: number,
    thumbnailUrl: string;
    title: string;
    url: string;
}

export interface ButtonProps {
    value: number;
    key:number;
    chooseLimit: (value:number) => void;
    fetchBlogs: (page:number, limit:number) => DataProps[] | object;
    changeCurrentPage: () => void;
};


export interface HeaderProps {
    limit: number;
    chooseLimit: (value:number) => void;
    fetchBlogs: (page:number, limit:number) => DataProps[] | object;
    changeCurrentPage: () => void;
}

export interface Blog {
    id: number,
    title: string,
    url:string,
}

export interface ButtonsProps {
    value: number, 
    active?:boolean
}
  
export interface BlogsState {
    list: Blog[];
    loading: boolean,
    fullArrayLength: Blog[],
    limit: number,
    page: number,
    show: string,
    currentStart:number,
    currentEnd:number,
    error: string | null,
}

