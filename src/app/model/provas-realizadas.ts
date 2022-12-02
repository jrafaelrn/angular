import { Questao } from "./questao";

export class ProvasRealizadas {
    public id?: string;
    public idAluno: string = '';
    public idProva: string = '';
    public data?: string;
    public disciplina?: string;
    public titulo?: string;
    public nota?: number;
    public avaliacao?: string;
    public questoes?: Questao[];
}