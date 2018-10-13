import { Component, OnInit } from '@angular/core';
import Speech from "speak-tts";

@Component({
  selector: 'speak',
  templateUrl: './speak..component.html'
})

export class SpeakComponent implements OnInit{

  textModel: string = '';

  ngOnInit():void {
    const speech = new Speech();
    speech
      .init({
        volume: 1,
        lang: "en",
        rate: 1,
        pitch: 1,
        voice: 'Google UK English Male',
        //'splitSentences': false
      })
      .then(data => {
        console.log("Speech is ready", data);
        this._addVoicesList(data.voices);
        this._prepareSpeakButton(speech);
      })
      .catch(e => {
        console.error("An error occurred while initializing : ", e);
      });
    const text = speech.hasBrowserSupport()
      ? "Hurray, your browser supports speech synthesis"
      : "Your browser does NOT support speech synthesis. Try using Chrome of Safari instead !";
    document.getElementById("support").innerHTML = text;
  }

  _addVoicesList(voices: any): void {
    const list = window.document.createElement("div");
    let html =
      '<h2>Available Voices</h2><select id="languages"><option value="">autodetect language</option>';
    voices.forEach(voice => {
      html += `<option value="${voice.lang}" data-name="${voice.name}">${
        voice.name
      } (${voice.lang})</option>`;
    });
    list.innerHTML = html;
    window.document.body.appendChild(list);
  };

  _prepareSpeakButton(speech: any): void {
    const speakButton = document.getElementById("play");
    const languages = 'en'; // document.getElementById("languages");
    console.log('WHY!!!', languages)
    speakButton.addEventListener("click", () => {
      const language = languages;
      const voice = 'Google UK English Male'; //'en-GB' // languages.options[languages.selectedIndex].dataset.name;
      if (language) speech.setLanguage(languages); //.value
      if (voice) speech.setVoice(voice);
      speech
        .speak({
          text: this.textModel
        })
        .then(() => {
          console.log("Successfully spoken !");
        })
        .catch(e => {
          console.error("An error occurred while speaking :", e);
        });
    });
  }
}
