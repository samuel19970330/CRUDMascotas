import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';



const listMascotas: Mascota[] = [
{ nombre: 'Nala', edad: 1, raza: 'Pastor Alemán', color: 'Café', peso: 25},
{ nombre: 'Lupe', edad: 14, raza: 'Schnauzer', color: 'Gris', peso: 7},
{ nombre: 'Dana', edad: 6, raza: 'Maine Coon', color: 'Pardo', peso: 5},
{ nombre: 'Rose', edad: 2, raza: 'Maine Coon', color: 'Blanco', peso: 3},
{ nombre: 'Roger', edad: 11, raza: 'Criollo', color: 'Gris', peso: 8},
{ nombre: 'Mona', edad: 12, raza: 'Schnauzer', color: 'Café', peso: 10}

];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre','edad','raza','color','peso','acciones'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);
  loading: boolean = false; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por Página'
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarMascota(){
this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('La Mascota fue Eliminada con Exito','',{
        duration: 4000,
        horizontalPosition: 'right'
      })
    }, 3000);
    
  }

}
