import { Injectable } from '@angular/core';
import Speech from 'speak-tts';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable()
export class SpeechService {

  private speech: Speech;
  private ready: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor() {
    this.speech = new Speech();
    this.speech
      .init({
        volume: 1,
        lang: 'en',
        rate: 1,
        pitch: 1,
        voice: 'Google UK English Male',
      })
      .then(data => {
        console.log('Speech is ready', data);
        this.ready.next(true);
      })
      .catch(e => {
        console.error('An error occurred while initializing : ', e);
        this.ready.next(false);
      });
  }

  public canSpeak(): Observable<boolean> {
    return this.ready;
  }

  public speak(value): void {
    this.ready.subscribe(r => {
      if (r) {
        this.speech.setLanguage('en');
        this.speech.setVoice('Google UK English Male');
        this.speech
          .speak({
            text: value
          })
          .then(() => {
            console.log('Successfully spoken !');
          })
          .catch(e => {
            console.error('An error occurred while speaking :', e);
          });
      }
    });

  }
}
