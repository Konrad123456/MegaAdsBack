import { AdRecord } from './../records/ad.record';

let ad: AdRecord;

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