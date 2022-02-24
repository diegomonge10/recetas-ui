import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Receta } from '../../model/receta.model';
import { RecetaService } from '../../service/receta.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.scss']
})
export class RecetaListComponent implements OnInit {
  isLoading = false;
  recetas: Receta[] =[];  
  displayedColumns: string[] = ['nombre','valoracion','operations'];
  dataSource?: MatTableDataSource<Receta>;

    constructor(public dialog: MatDialog, private recetaService: RecetaService, private router: Router) { }

    ngOnInit(): void {
      this.recetaService.recetaList().toPromise().then((respose: any) => {
        respose.data.recetas.receta.forEach((item: any) => this.recetas.push(new Receta(item.id, item.nombre, item.porciones, item.valoracion)));
  
        this.dataSource = new MatTableDataSource(this.recetas);
      }).catch(error => {
        console.log('Error al obtener las recetas');
      });
    }

    newReceta() {}

    applyFilter(data: String) {
      this.isLoading = true;
      this.recetas = []; 
      this.recetaService.recetaFilterList(data).toPromise().then((respose: any) => {        
        respose.data.recetas.receta.forEach((item: any) => this.recetas.push(new Receta(item.id, item.nombre, item.porciones, item.valoracion)));
        this.dataSource = new MatTableDataSource(this.recetas);
        this.isLoading = false;
      }).catch(error => {
        console.log('Error al obtener las recetas');
        this.isLoading = false;
      });
    }

    editValoracionnewReceta(id: number, valoracion: number) {
      console.log('id: ' + id);
      console.log('valoracion: ' + valoracion);
      this.isLoading = true;
      let body = {
        id: id,
        valoracion: valoracion
      };
      this.recetaService.edit(id, body).toPromise().then((respose: any) => {        
        this.isLoading = false;
      }).catch(error => {
        console.log('Error al editar las recetas');
        this.isLoading = false;
      });
    }

    goToReceta(id: number) {
      this.router.navigate(['/detalle'], {queryParams: { id: id }});
    }
  }
