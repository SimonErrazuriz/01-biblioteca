import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Libro } from 'src/app/models/libro.models';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
  providers: [LibrosService]
})
export class LibrosComponent implements OnInit {

  libros!: Libro[];
  libroSelected: Libro = {
    _id: '',
    title: '',
    author: '',
    genre: '',
    editorial: '',
    year: ''
  };

  constructor(public librosService: LibrosService) { }

  ngOnInit(): void {
    this.getLibros();
  }

  resetForm(libroForm: NgForm) {
    libroForm.reset();
    this.getLibros(); /* No se obtienen los documentos si se pulsa repetidamente el boton limpiar */
  }

  getLibros() {
    this.librosService.getLibros().subscribe(
      res => { this.libros = res },
      err => console.log(err)
    );
  }

  addLibro(libroForm: NgForm) {
    if (libroForm.value._id) {
      this.librosService.editLibro(libroForm.value).subscribe(
        res => {
          console.log(res);
          this.getLibros();
          libroForm.reset();
        },
        err => console.log(err)
      );

    } else {
      libroForm.controls['_id'].reset();
      this.librosService.addLibro(libroForm.value).subscribe(
        res => {
          console.log(res);
          this.getLibros();
          libroForm.reset();
        },
        err => console.log(err)
      );
    }
  }

  editLibro(libro: Libro) {
    this.libroSelected = libro;
  }

  deleteLibro(id: string) {
    if (confirm('¿Estás seguro? ')) {
      this.librosService.deleteLibro(id).subscribe(
        res => {
          console.log(res);
          this.getLibros();
        },
        err => console.log(err)
      );
    }
  }

}

