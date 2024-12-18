import { Works } from "./works";

export interface Books {
    id:          number;
    name:        string;
    birthYear:   number;
    deathYear:   number;
    nationality: string|string[];
    works:       Works[];
}
