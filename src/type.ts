export interface IPart{
    starships: string[] | [],
    vehicles: string[] | [],
    species: string[] | [],
    created: string,
    edited:string,
    url:string
}


export interface ICharacter extends IPart {
    name: string,
    height: string,
    mass: 77,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[] | [],
    id: string
}

export interface IFilms extends IPart {
    title: string,
    episode_id: string,
    opening_crawl: string,
    producer:string,
    release_date: string,
    characters: string[],
    planets: string[] ,

 }

export interface ICharacterData {
    count: number,
    next: string | null,
    previus: string | null,
    results: ICharacter[]
}

export interface IFilmsData{
    count: number,
    next: string | null,
    previus: string | null,
    results: IFilms[]
}


