import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {Md5} from 'ts-md5/dist/md5';
import { config } from '../../config';

@Injectable({
  providedIn: 'root'
})


export class HeroService {
  
  private md5 = new Md5();
  private timeStamp = Date.now().toString();
  private apiKey = config.PUBLIC_KEY;
  private privateKey = config.PRIVATE_KEY;
  private md5hash = this.md5.appendStr(this.timeStamp+this.privateKey+this.apiKey).end();
  private entriesLimit = 25;
  offset = 0;
  private apiUrl = `https://gateway.marvel.com/v1/public/characters?limit=${this.entriesLimit}&offset=${this.offset}&ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5hash}`;

  constructor() { }

  getHeroes(): Observable<any> {
    const test = of(console.log(this.apiUrl));
    return test;
  }
}
