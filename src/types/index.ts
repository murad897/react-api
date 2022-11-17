export interface ButtonProps {
    value: number;
};

export interface Blog {
    id: number,
    title: string,
    url:string,
}
  
export interface BlogsState {
    list: Blog[];
    loading: boolean,
    error: string | null,
}

