import { GifService } from '@/gifs/services/gifs.service';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history-page.component.html',
  styleUrl: './gif-history-page.component.css',
})
export default class GifHistoryComponent {
  gifService = inject(GifService);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });

  /*query = inject(ActivatedRoute).params.subscribe((params) => {
    params['query']
  });*/
}
