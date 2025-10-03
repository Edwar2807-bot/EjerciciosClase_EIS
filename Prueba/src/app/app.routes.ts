import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { CarComponent } from './pages/car/car.component';

export const routes: Routes = [
    {
    path: '',
    component: CounterPageComponent
    },
    {
        
    path: 'car',
    component: CarComponent
    }
];
