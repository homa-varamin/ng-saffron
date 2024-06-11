import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'saffron-loader',
  templateUrl: './saffron-loader.component.html',
  styleUrls: ['./saffron-loader.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule],
})
export class SaffronLoaderComponent {}
