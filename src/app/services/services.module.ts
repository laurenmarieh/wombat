import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GeneralService } from './general.service';

@NgModule({
    providers: [
        GeneralService
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
