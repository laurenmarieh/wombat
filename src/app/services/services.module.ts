import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GeneralService } from './general.service';
import { TranslationService } from './translation.service';

@NgModule({
    providers: [
        GeneralService,
        TranslationService
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
