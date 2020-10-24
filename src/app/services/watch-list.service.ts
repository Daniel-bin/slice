import { Observable, of } from "rxjs";
import { Watch } from "../interfaces/watch";
import { WATCH_LIST } from "../DATA";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WatchListService {
  watchList = WATCH_LIST;

  getWatchList(): Observable<any[]> {
    return of(this.watchList);
  }

  moveList(move: Boolean, index: number) {
    let swapItem: Watch;
    let swapIndex: number;
    swapIndex = move ? index - 1 : index + 1;
    swapItem = this.watchList[index];

    this.watchList[index] = this.watchList[swapIndex];
    this.watchList[swapIndex] = swapItem;
  }
}
