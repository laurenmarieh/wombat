import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Language } from '../models/language.enum';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { TranslationResponse } from '../models/google-response/translation-response.model';
import { deserialize } from 'json-typescript-mapper';
import { Translation } from '../models/translation.model';

@Injectable()
export class TranslationService {
  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:max-line-length
  private googleTranslateUrl = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyAqlE6rgTnCjv_KezxSEJzknwTFWzxIaq4&model=base';

  public tranlateText(value: string, language: Language): Observable<Translation[]> {
    return this.httpClient.get<TranslationResponse>(`${this.googleTranslateUrl}&q=${value}&target=${language}`)
      .pipe(
        map((raw: any) => {
          const result = deserialize(TranslationResponse, raw);
          return result.data.translations;
        }),
        catchError((error: any) => {
          return throwError(error);
        }),
        shareReplay(1)
      );
  }
}
