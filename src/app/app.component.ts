import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTableComponent } from 'eyhenij-rt-table';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AppTableComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'test-table';

    public onRowClick(e: any): void {
        console.log(e);
    }

    public onEmptyEvent(e: any): void {
        console.log(e);
    }

    public onErrorEvent(e: any): void {
        console.log(e);
    }

    public onUpdatedEvent(e: any): void {
        console.log(e);
    }
}
