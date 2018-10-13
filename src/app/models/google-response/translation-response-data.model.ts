import { JsonProperty } from 'json-typescript-mapper';
import { Translation } from '../translation.model';

export class TranslationResponseData {
  @JsonProperty({ clazz: Translation, name: 'translations' })
  translations: Translation[];

  constructor() {
    this.translations = undefined;
  }
}
