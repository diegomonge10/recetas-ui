import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Receta } from '../../model/receta.model';
import { RecetaService } from '../../service/receta.service';

@Component({
  selector: 'app-receta-valoracion',
  templateUrl: './receta-valoracion.component.html',
  styleUrls: ['./receta-valoracion.component.css']
})
export class RecetaValoracionComponent implements OnInit {

  isLoadingAsc = true;
  isLoadingDesc = true;
  recetasAsc: Receta[] =[];
  recetasDesc: Receta[] =[];    
  displayedColumns: string[] = ['nombre','valoracion'];
  dataSourceAsc?: MatTableDataSource<Receta>;
  dataSourceDesc?: MatTableDataSource<Receta>;
  constructor(public recetaService: RecetaService) { }

  ngOnInit(): void {
    this.recetaService.getRecetaOderByValorizacion('asc').toPromise().then((respose: any) => {
      respose.data.recetas.receta.forEach((item: any) => this.recetasAsc.push(new Receta(item.id, item.nombre, item.porciones, item.valoracion)));
      this.dataSourceAsc = new MatTableDataSource(this.recetasAsc);
      this.isLoadingAsc = false;
    }).catch(error => {
      console.log('Error al obtener las recetas mas valoradas');
      this.isLoadingAsc = false;
    });
    this.recetaService.getRecetaOderByValorizacion('desc').toPromise().then((respose: any) => {
      respose.data.recetas.receta.forEach((item: any) => this.recetasDesc.push(new Receta(item.id, item.nombre, item.porciones, item.valoracion)));
      this.dataSourceDesc = new MatTableDataSource(this.recetasDesc);
      this.isLoadingDesc = false;
    }).catch(error => {
      console.log('Error al obtener las recetas menos valoradas');
      this.isLoadingDesc = false;
    })
  }

}
