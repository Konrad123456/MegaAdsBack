import { pool } from '../utils/db';
import { AdRecord } from './../records/ad.record';

let ad: AdRecord;

const defaultObject = {
    name: '[TEST] Testowa nazwa',
    description: 'Someeeeee',
    url: 'http://testowa.com',
    price: 0,
    lat: 10,
    lon:10
};

afterAll(async () => {
    await pool.end();
})

describe('AdRecord.GetOne()', () => {
    test('AdRecord returns data from database for one entry', async () => {
        const add = await AdRecord.getOne('asd');
        expect(add).toBeDefined();
        if(add) {
            expect(add.id).toBe('asd');
            expect(add.name).toBe('test');
            expect(add.description).toBe('testowy opis');
            expect(add.url).toBe('http://testowy.com');
            expect(add.price).toBe(10);
            expect(add.lat).toBe(45);
            expect(add.lon).toBe(45);
        }
    });
    
    test('AdRecord returns null from database for unexisting entry', async () => {
        const add = await AdRecord.getOne('---');
    
        expect(add).toBeNull();
    });
});

describe('AdRecord.findAll', () => {
    
    test('AdRecord returns data from database for all entry when searching for "a"', async () => {
        const add = await AdRecord.findAll('te');
        expect(add).not.toEqual([]);
    });    
    
    test('AdRecord returns data empty array when searching something doesnt exist', async () => {
        const add = await AdRecord.findAll('cbf');
        expect(add).toEqual([]);
    });    
    
    test('AdRecord returns smaller amount of data', async () => {
        const add = await AdRecord.findAll('te');
        expect(add[0].id).toBeDefined();
        expect(add[0].lat).toBeDefined();
        expect(add[0].lon).toBeDefined();
    });
});

describe('AdRecord.insert', () => {
    
    test('AdRecord.insert returns new UUID', async () => {
        const add = new AdRecord(defaultObject);
        expect(add.id).toBeDefined();
        expect(typeof add.id).toBe('string');
    });        
    
    test('AdRecord.insert add data to database', async () => {
        const add = new AdRecord(defaultObject);
        await add.insert();

        const foundAd = await AdRecord.getOne(add.id);

        expect(foundAd).toBeDefined();
        expect(foundAd).not.toBeNull();
        expect(foundAd!.id).toBe(add.id);
    });    

});
