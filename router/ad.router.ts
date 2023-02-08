import { Router } from "express";

export const adRouter = Router()
    .get('/', (req, res) => {
        console.log('Work');
    })