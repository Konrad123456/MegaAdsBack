import { ValidationError } from '../utils/errors';
import { AdRecord } from '../records/ad.record';

let ad: AdRecord;

const record = new AdRecord({
    id: '123-123',
    name: 'Samochód',
    description: 'dsadsadsadas',
    price: 10,
    url: 'https://samochody.pl',
    lat: 45,
    lon: 45
});

describe('Ad.record', () => {
    test('can create new AdRecord', () => {
        expect(record).toBeInstanceOf(AdRecord);
        expect(record.id).toBe('123-123');
        expect(record.name).toBe('Samochód');
        expect(record.price).toBe(10);
        expect(record.url).toBe('https://samochody.pl');
        expect(record.lat).toBe(45);
        expect(record.lon).toBe(45);
    });
    
    test('Name to short', () => {
        let ourRecord: AdRecord;
        const toShortName = () => {
            ourRecord = new AdRecord({...record, name: 'as'});
        }
    
        expect(toShortName).toThrow(ValidationError);
    });
    
    test('Name to long', () => {
        let ourRecord: AdRecord;
        const toLongName = () => {
            ourRecord = new AdRecord({...record, name: 'bb{@)hFFG]aK);C{Hp_Fqkh#Xm7j=]bXQp/(tXBKLn9/$Q6f-p(T3nSWb7vJVWN,w;EX3d=n3}N7)+bTJ+hm+LY,,%e8Tm%djc9c)'});
        }
    
        expect(toLongName).toThrow(ValidationError);
    });
    
    test('Description empty', () => {
        let ourRecord: AdRecord;
        const emptyDescription = () => {
            ourRecord = new AdRecord({...record, description: ''});
        }
    
        expect(emptyDescription).toThrow(ValidationError);
    });
    
    test('Description to long', () => {
        let ourRecord: AdRecord;
        const toLongDescription = () => {
            ourRecord = new AdRecord({...record, description: 'ew:t4X-.C#NDT4]*Z+i256%z!DD=xS&w{DnA{bE(9hwkw&wwA(5!3crUgAr3!P{uRUmYC:-ip67Shk?QT5$z]}A4KiaDWFZCjQK7#;5)WJJ6TwA,+AzuA).[%JR]FiRGiXE(thNRjz{e_VQV),wW2=%%tBp}Yq]TChY.S)jk=G76z}Pc/Un6}jSd@#+[]A=hMU@T(qYLmE+#yBk*4VT2vCe_NGp:)6,GD@mQv$5-q(&;X(5_zNwx9-Z!w{gJpWWu!Pgcq*Xc)R:MVLAeyV5vqRDV[%AwVB2u#fH8+@jyDC#w}qrd}E?U@.DN#n]NkctwCeVWK.(VR;@rP}bK(x:qJMF6UZmE;(d$!AwK8_+]=VSL4e?S,hQT}h*[tN*4_w%ZpXf:3!7KDd}fw?/+bLP:Q6h_]b!8-.na7y[}n@:bF(MQSnv_Rj9*4&hhCWy&wAhy5Gm}3UrhC9Ym{%t*MVA(9!z-GqrJ=@Lw6Ywp6(uaRhi=Cnd7a)S.FK,brENxL.XrxnTB8_Ck#h9cU5LjBYjCt7n9A}%vWJ=r:d?V)%R:#%4[iW9eL:/CR+}#[/Ff=9Cef)nP$kK_U=m!!Vw;_Dru*94)i?*MPQQYduR_GCVg_$78Ma-iW}hQE?D,&,P)YF3cHC{p+fnPX[)xeTuetf+=4i+eJf#8z-:)pN76gWt{[AjPe!BVgXF/2U}Vb/A[gJ7/!hT;TTT=Y9*7P;uF2/MZfutRUc%mRd*hk86jpD-JK8en]aBSezC6/yCSukFJy;i}W}U)j)S6vUWg$y,YeD}_YH7;h97rq3p.@J3%C)w;W/npVN]BRpw=@}wAB@VB]tASr/tupVQfE*&tfw=!{z:G6eXRN3iU4Q:]J4iyR6er}!(HCTZQ+K8%Ahy%bnFW_A/X*#p5(++nzDm3NpWpyZQdYZ=tVPk&_:jY*dCP]3+xcU/$=ZG;%c6h,v_vQJ)6pEg_GZc[_#_$+Wy,VQQ.xQ*NpaJivL{E:Dy3B=d]FCDnaE.pSSdv3:R{u7A!f-mFyH8/b'});
        }
    
        expect(toLongDescription).toThrow(ValidationError);
    });
    
    test('Price to low', () => {
        let ourRecord: AdRecord;
        const toLowPrice = () => {
            ourRecord = new AdRecord({...record, price: -1});
        }
    
        expect(toLowPrice).toThrow(ValidationError);
    });
    
    test('Price to hight', () => {
        let ourRecord: AdRecord;
        const toHightPrice = () => {
            ourRecord = new AdRecord({...record, price: 1000000});
        }
    
        expect(toHightPrice).toThrow(ValidationError);
    });
    
    test('Url to long', () => {
        let ourRecord: AdRecord;
        const urlToLong = () => {
            ourRecord = new AdRecord({...record, url: 'Ji?KixTeeCY&,%u-699imkWi=)j(CEEF2n]qW3kWZ;PH/Y:;[q5cDPpr%EcMijQ@h8h8-TYm]XFar$?tbL7T9u]:Sy7P(M}a5mgCq.c+6KZ%FWckbmAgAJvf=B:gqU{ak6eQ,{gk!*YnC24(mnqhi:cQL&]}*X!),[6W.G99jfiRbd%2C_C/n-vkJ%nWC&wd:twG+2T!pvYLAkLUfM}RK/B4Jc#zvAWM?#f+743]e5hfuydjc+.;vw6*.eJb:]H-U#3P+hrg7,q-.C}zN5Q?e;V-Zz]j=9qPn=+KUHC9Td!k$'});
        }
    
        expect(urlToLong).toThrow(ValidationError);
    });
    
    test('Lon to hight', () => {
        let ourRecord: AdRecord;
        const toHightLon = () => {
            ourRecord = new AdRecord({...record, lon: 181});
        }
    
        expect(toHightLon).toThrow(ValidationError);
    });
    
    test('Lon to low', () => {
        let ourRecord: AdRecord;
        const toLonLow = () => {
            ourRecord = new AdRecord({...record, lon: -181});
        }
    
        expect(toLonLow).toThrow(ValidationError);
    });
    
    test('Lon to hight', () => {
        let ourRecord: AdRecord;
        const toLonHight = () => {
            ourRecord = new AdRecord({...record, lat: 91});
        }
    
        expect(toLonHight).toThrow(ValidationError);
    });
    
    test('lat to low', () => {
        let ourRecord: AdRecord;
        const toLatLow = () => {
            ourRecord = new AdRecord({...record, lat: -91});
        }
    
        expect(toLatLow).toThrow(ValidationError);
    });
})
