import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { delay } from "rxjs";

@Component({
    templateUrl: './pages-counter.html',
    styleUrl: './counter-page.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterPageComponent{

    counter:number = 0;
    counterSignal = signal(0);

    /**
     *
     */
    constructor() {
        setInterval(() => {
            this.counter +=1;
            console.log("Se actualizó");
        },1000);         
    }

    add(value:number) : void{
        this.counter += value;
        this.counterSignal.set(this.counterSignal() + value);
        this.counterSignal.update((currentValue:number) => currentValue + value)
    }


    disminuir(value:number) : void{
        this.counter -= value;
    }

    reset(): void{
        this.counter = 0;
    }
}

