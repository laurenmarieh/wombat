import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GeneralService } from './general.service';

import { ExperienceService } from './experience.service';
import { TranslationService } from './translation.service';
import { ForumService } from './forum.service';
import { SpeechService } from './speech.service';
import { ApiService } from './api.service';
import { CustomerService } from './customer.service';
import { StoryService } from './story.service';

@NgModule({
    providers: [
        GeneralService,
        ExperienceService,
        TranslationService,
        ForumService,
        SpeechService,
        ApiService,
        CustomerService,
        StoryService
    ],
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [],
    entryComponents: [],
    bootstrap: [],
    schemas: []
})
export class ServicesModule { }
