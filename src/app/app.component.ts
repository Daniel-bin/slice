import { Component, OnInit } from "@angular/core";
import { WatchListService } from "./services/watch-list.service";
import { Watch } from "./interfaces/watch";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private watchListService: WatchListService) {}
  watchList: Watch[];
  showAll: boolean;
  ngOnInit() {
    this.watchListService
      .getWatchList()
      .subscribe(watchList => (this.watchList = watchList));
  }

  moveUp(index: number) {
    this.watchListService.moveList(true, index);
  }

  moveDown(index: number) {
    this.watchListService.moveList(false, index);
  }

  showAllClicked(){
      this.showAll = true;
  }
}
