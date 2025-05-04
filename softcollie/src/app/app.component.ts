import { Component }                                                                          from '@angular/core';
import { RouterModule }                                                                       from '@angular/router';
import { ScMapHighlightAreaComponent, ScMapHighlightBrushComponent, ScMapHighlightComponent } from "@softcollie/sc-map-highlight";

@Component({
    imports: [RouterModule, ScMapHighlightComponent, ScMapHighlightAreaComponent, ScMapHighlightBrushComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'softcollie';
}
