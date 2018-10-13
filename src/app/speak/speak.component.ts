import { Component, OnInit, Input } from '@angular/core';
import { SpeechService } from '../services/speech.service';

@Component({
  selector: 'app-speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.css']
})
export class SpeakComponent implements OnInit {

  @Input()
  text: string;

  displaySpeech = false;

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
    this.speechService.canSpeak()
      .subscribe(res => this.displaySpeech = res);
  }

  public speak(): void {
    this.speechService.speak(this.text);
  }

}
