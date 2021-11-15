import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../models/libro.models';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  URL_API = 'http://localhost:3000/api/libros';

  constructor(private http: HttpClient) { }

  getLibros() {
    return this.http.get<Libro[]>(this.URL_API);
  }

  addLibro(libro: Libro) {
    return this.http.post(this.URL_API, libro);
  }

  editLibro(libro: Libro) {
    return this.http.put(this.URL_API + '/' + libro._id, libro);
  }

  deleteLibro(id: string) {
    return this.http.delete(this.URL_API + '/' + id);
  }
}
