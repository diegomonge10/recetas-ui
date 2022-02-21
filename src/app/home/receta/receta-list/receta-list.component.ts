import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Receta } from '../../model/receta.model';
import { RecetaService } from '../../service/receta.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.scss']
})
export class RecetaListComponent implements OnInit {
  recetas: Receta[] =[];  
  displayedColumns: string[] = ['nombre','valoracion','operations'];
    dataSource!: MatTableDataSource<Receta>;

    constructor(public dialog: MatDialog, public recetaService: RecetaService) { }

    ngOnInit(): void {
      this.recetaService.recetaList().toPromise().then((respose: any) => {
        respose.data.recetas.receta.forEach((item: any) => this.recetas.push(new Receta(item.id, item.nombre, item.porciones, item.valoracion)));
  
        this.dataSource = new MatTableDataSource(this.recetas);
      }).catch(error => {
        console.log('Error al obtener las recetas');
      });
    }

    newReceta() {}

    applyFilter(event: Event) {
    }

  }
