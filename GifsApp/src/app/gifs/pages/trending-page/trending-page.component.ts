import { GifListComponent } from '@/gifs/components/gif-list/gif-list.component';
import { GifService } from '@/gifs/services/gifs.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.scss',
})
export default class TrendingPageComponent {
  gifService = inject(GifService);
}
