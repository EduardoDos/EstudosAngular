import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; //problema tá aqui

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http/src/client';

@Injectable()
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService){}

    private log(message: string){
      this.messageService.add('HeroService: ' + message);
    }

    private heroesUrl ='api/heroes';

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetches heroes');
    return of (HEROES);
    //Observable\of.d.ts
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of (HEROES.find(hero => hero.id ===id));
  }

}
