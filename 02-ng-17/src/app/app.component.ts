import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaffronDemoModule } from '../../projects/ng-saffron/src/lib/_08-saffron-demo/saffron-demo.module';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SaffronDemoModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[{ provide: APP_BASE_HREF, useValue: environment.APP_BASE_HREF },]
})
export class AppComponent {
  title = 'ng-saffron-demo';
}
