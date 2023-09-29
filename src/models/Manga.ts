import { Schema, model, Document } from "mongoose";

interface Pagina {
    numero: number;
    path: string;
}

interface Capitulo {
    numero: number;
    paginas: Pagina[];
}

interface Manga extends Document {
    _id: string;
    titulo: string;
    capa: string;
    genero: string;
    dataDeAdicao: Date;
    capitulos: Capitulo[];
}

const paginaSchema = new Schema({
    numero: { type: Number, required: true },
    path: { type: String, required: true },
});

const capituloSchema = new Schema({
    numero: { type: Number, required: true },
    paginas: [paginaSchema],
});

const mangaSchema = new Schema({
    _id: { type: String, required: true },
    titulo: { type: String, required: true },
    capa: { type: String, required: true },
    genero: { type: String, required: true },
    dataDeAdicao: { type: Date, required: true },
    capitulos: [capituloSchema],
});

export default model<Manga>("Manga", mangaSchema);
