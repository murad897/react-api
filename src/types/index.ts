export interface ButtonProps {
    value: number;
    key:number;
    chooseLimit: (value:number) => void;
};

export interface HeaderProps {
    limit: number;
    chooseLimit: (value:number) => void;
}

export interface Blog {
    id: number,
    title: string,
    url:string,
}
  
export interface BlogsState {
    list: Blog[];
    loading: boolean,
    limit: number,
    error: string | null,
}

