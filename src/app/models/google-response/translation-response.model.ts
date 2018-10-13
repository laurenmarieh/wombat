import { JsonProperty } from 'json-typescript-mapper';
import { TranslationResponseData } from './translation-response-data.model';

export class TranslationResponse {
  @JsonProperty({ clazz: TranslationResponseData, name: 'data' })
  data: TranslationResponseData;

  constructor() {
    this.data = undefined;
  }
}
