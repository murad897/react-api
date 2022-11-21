import { AppDispatch } from './../store/index';

export interface ButtonProps {
    value: number;
    key:number;
    limit?: number;
};

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

