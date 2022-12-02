import { Questao } from "./questao";

export class NovaProva {
    public id_professor: string = '';
    public data?: string;
    public disciplina?: string;
    public titulo?: string;
    public questao?: Questao[];
}