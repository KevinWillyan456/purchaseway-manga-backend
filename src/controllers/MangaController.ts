import { Request, Response } from 'express'
import { UpdateWithAggregationPipeline } from 'mongoose'
import { v4 as uuid } from 'uuid'
import Manga from '../models/Manga'

async function indexManga(req: Request, res: Response) {
    try {
        const mangas = await Manga.find()
            .sort({ title: 1 })
            .collation({ locale: 'pt', strength: 2 })
        res.status(200).json({ mangas })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function storeManga(req: Request, res: Response) {
    const { titulo, capa, genero } = req.body

    if (!titulo || !capa || !genero) {
        res.status(400).json({ error: 'data is missing' })
        return
    }

    const manga = new Manga({
        _id: uuid(),
        titulo,
        capa,
        genero,
        dataDeAdicao: new Date(),
    })

    try {
        await manga.save()

        res.status(201).json({ message: 'Mangá added successfully!' })
    } catch (err) {
        res.status(400).json({ error: err })
    }
}

async function updateManga(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { titulo, capa, genero, capitulos } = req.body
    const { id } = req.params

    if (!titulo && !capa && !genero && !capitulos) {
        res.status(400).json({ error: 'You must enter a new data' })
        return
    }

    const filter = { _id: id }
    const updateDoc = {
        $set: {
            titulo,
            capa,
            genero,
            capitulos,
        },
    }

    try {
        await Manga.updateOne(filter, updateDoc)
        res.status(200).json({ message: 'Mangá updated successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

async function deleteManga(
    req: Request<{ id?: UpdateWithAggregationPipeline }>,
    res: Response
) {
    const { id } = req.params
    const filter = { _id: id }

    try {
        await Manga.deleteOne(filter)
        res.status(200).json({ message: 'Mangá removed successfully!' })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export { deleteManga, indexManga, storeManga, updateManga }
