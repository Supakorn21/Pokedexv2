export interface IPokemonListItem{
    name:string;
    url:string;
}

export interface IPokemonListResponse{
    count:number;
    next:string;
    previous:string;
    results:IPokemonListItem[]
}

