export class Questao {
    public id: string = '';
    public alternativaA?: string;
    public alternativaB?: string;
    public alternativaC?: string;
    public alternativaD?: string;
    public alternativaCorreta?: string;
    public textoAberta: string = '';
    public abertaOuFechada: number = 0;
    public disciplina?: string;
    public titulo?: string;
    public enunciado?: string;
    public notaQuestaoAberta: any;
    public notaQuestao: any;
}