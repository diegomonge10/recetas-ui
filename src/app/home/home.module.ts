import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeRoutes } from './home.routing';
import { RecetaListComponent } from './receta/receta-list/receta-list.component';
import { RecetaDetailComponent } from './receta/receta-detail/receta-detail.component';
import { RecetaValoracionComponent } from './receta/receta-valoracion/receta-valoracion.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
    RecetaListComponent,
    RecetaDetailComponent,
    RecetaValoracionComponent,
  ]
})
export class HomeComponentsModule {}
