export * from "./store";

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface Dog {
    id: string
    img: string
    name: string
    age: number
    zip_code: string
    breed: string
}

export interface ResponseSearchDog {
    total: number;
    resultIds: Array<string>;
    next: string;
}

export type ResponseFetchDog = Array<Dog>;