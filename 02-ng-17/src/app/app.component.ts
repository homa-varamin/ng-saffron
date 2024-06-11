import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaffronDemoModule } from '../../projects/ng-saffron/src/lib/_08-saffron-demo/saffron-demo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SaffronDemoModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-saffron-demo';
}
