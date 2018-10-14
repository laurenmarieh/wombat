import { PipeTransform, Pipe } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Language } from '../models/language.enum';
import { Translation } from '../models/translation.model';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {

  constructor(public translationService: TranslationService) {}

  transform(value: string, args: string[]): any {
    return this.translationService.tranlateText(value, Language.Spanish);
  }
}
