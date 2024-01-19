import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  toppings = new FormControl('');

  toppingList: string[] = ['Más Recientes', 'Más Alumnos', 'Mejor Calificado'];

  categories: string[] = ['Desarrollo Web', 'Diseño Web'];

  levels: string[] = ['Nivel Básico', 'Nivel Intermedio', 'Nivel Avanzado', 'Todos los Niveles'];

  prices: string[] = ['Gratis', 'De Pago'];
}
