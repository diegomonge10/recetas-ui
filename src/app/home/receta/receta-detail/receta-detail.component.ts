import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from '../../service/receta.service';
import { Receta } from '../../model/receta.model';

@Component({
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.component.html',
  styleUrls: ['./receta-detail.component.css']
})
export class RecetaDetailComponent implements OnInit {
  isLoading = true;
  idReceta!: number;
  receta!: Receta;
  constructor(private recetaService: RecetaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idReceta = Number(this.route.snapshot.queryParamMap.get('id'));
    this.recetaService.getReceta(this.idReceta).toPromise().then((respose: any) => {
      this.receta = respose.data.receta;
      this.isLoading = false;
    }).catch(error => {
      console.log('Error al obtener las recetas');
      this.isLoading = false;
    });
  }

}
