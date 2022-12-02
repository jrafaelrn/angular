import { Questao } from "./questao";

export class ProvasAlunos {
    public id: string = '';
    public nome: string = '';
    public data?: string;
    public disciplina?: string;
    public titulo?: string;
    public questao?: Questao[];
}