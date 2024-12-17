import express from 'express'
import {
    deleteManga,
    indexManga,
    storeManga,
    updateManga,
} from './controllers/MangaController'
import ApiKeyMiddleware from './middlewares/ApiKeyMiddleware'

export const routes = express.Router()

routes.get('/manga', ApiKeyMiddleware, indexManga)
routes.post('/manga', ApiKeyMiddleware, storeManga)
routes.put('/manga/:id', ApiKeyMiddleware, updateManga)
routes.delete('/manga/:id', ApiKeyMiddleware, deleteManga)
