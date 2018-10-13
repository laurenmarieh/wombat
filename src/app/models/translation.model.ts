import { JsonProperty } from 'json-typescript-mapper';
import { Language } from './language.enum';

export class Translation {
  @JsonProperty('detectedSourceLanguage')
  detectedSourceLanguage: Language;

  @JsonProperty('model')
  model: string;

  @JsonProperty('translatedText')
  translatedText: string;

  constructor() {
    this.detectedSourceLanguage = undefined;
    this.model = undefined;
    this.translatedText = undefined;
  }
}
