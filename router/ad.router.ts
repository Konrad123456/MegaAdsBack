import { AdRecord } from './../records/ad.record';
import { Router } from "express";

export const adRouter = Router()
    .get('/search/:name?', async (req, res) => {
        const ads = await AdRecord.findAll(req.params.name ?? '');
        return res.json(ads);
    })    
    
    .get('/:id', async (req, res) => {
        const ads = await AdRecord.getOne(req.params.id);
        return res.json(ads);
    })     
    
    .post('/', async (req, res) => {
        const ads = new AdRecord(req.body);
        await ads.insert();
        return res.json(ads);
    })    
    
    .get('/', (req, res) => {
        console.log('Work');
    })