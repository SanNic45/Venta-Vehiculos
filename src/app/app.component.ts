import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';
import { RegistrarClienteComponent } from './components/registrar-cliente/registrar-cliente.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaVehiculosComponent, RegistrarClienteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'venta-auto';
}