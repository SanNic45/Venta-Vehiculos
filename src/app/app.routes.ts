import { Routes } from '@angular/router';
import { RegistrarClienteComponent } from './components/registrar-cliente/registrar-cliente.component';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';

export const routes: Routes = [
    {path:'registrar-cliente', component: RegistrarClienteComponent },
    {path:'lista-vehiculos', component: ListaVehiculosComponent}
];
