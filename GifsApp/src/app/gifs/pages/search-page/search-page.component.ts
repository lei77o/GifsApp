import { GifListComponent } from '@/gifs/components/gif-list/gif-list.component';
import { Gif } from '@/gifs/interfaces/gif.interface';
import { GifService } from '@/gifs/services/gifs.service';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export default class SearchPageComponent {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => this.gifs.set(resp));
  }
}
