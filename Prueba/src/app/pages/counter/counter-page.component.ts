import { Component } from "@angular/core";

@Component({
    templateUrl: './pages-counter.html',
    styleUrl: './counter-page.css'
})

export class CounterPageComponent{
    counter:number = 0;

    add(value:number) : void{
        this.counter += value;
    }

    disminuir(value:number) : void{
        this.counter -= value;
    }

    reset(): void{
        this.counter = 0;
    }
}

