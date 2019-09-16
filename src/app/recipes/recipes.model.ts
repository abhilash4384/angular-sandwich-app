import { Ingrediant } from '../shared/ingrediant.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingradiants: Ingrediant[];

    constructor(name: string, description: string, imagePath: string, ingradiants: Ingrediant[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingradiants = ingradiants;
    }
}