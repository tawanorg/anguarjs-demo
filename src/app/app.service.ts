import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }),
};
 
@Injectable()
export class AppService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getCards() {
        return this.http.get('https://staging.plattar.space/api/v2/page/100e6720-cfe1-11e7-ab8d-e91080c52d84?include=cardtitle,cardparagraph,cardimage,cardbutton', httpOptions);
    }
}

export default AppService;
