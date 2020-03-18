import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

const MatrialCompontests = [
    MatBadgeModule,
    MatButtonModule
];

@NgModule({
    imports: [MatBadgeModule, MatButtonModule],
    exports: [MatBadgeModule, MatButtonModule]

})

export class MaterialModule {}
