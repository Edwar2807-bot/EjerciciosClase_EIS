import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './car.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarComponent {
    brand = signal<string>('Renault');
    year = signal<number>(2020);
    student = signal<string>('aqui nombre del estudiante en minuscula');


    getCarDescription() : string{
        return `${this.brand()} - ${this.year()}`;
    }

    changeCar() {
        this.brand.set('kia');
        this.year.set(2021);        
    }

    resetForm() {
        this.brand.set('Renault');
        this.year.set(2020);
    }

    changeYear() {
        this.year.set(2025);
    }
}
