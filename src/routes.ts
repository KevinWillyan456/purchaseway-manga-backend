import express from "express";
import {
    deleteManga,
    indexManga,
    storeManga,
    updateManga,
} from "./controllers/MangaController";

export const routes = express.Router();

routes.get("/manga", indexManga);
routes.post("/manga", storeManga);
routes.put("/manga/:id", updateManga);
routes.delete("/manga/:id", deleteManga);
