import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GeneralService } from './general.service';

import { ExperienceService } from './experience.service';
import { TranslationService } from './translation.service';
import { ForumService } from './forum.service';

@NgModule({
    providers: [
        GeneralService,
        ExperienceService,
        TranslationService,
        ForumService
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
