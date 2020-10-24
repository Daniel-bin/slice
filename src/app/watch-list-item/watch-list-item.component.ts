import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "my-watch-list-item",
  templateUrl: "./watch-list-item.component.html",
  styles: ["i {cursor:pointer}"]
})
export class WatchListItemComponent {
  @Input() item;
  @Input() index;
  @Input() last;
  @Output() moveUpEvent = new EventEmitter();
  @Output() moveDownEvent = new EventEmitter();
  ngOnInit() {}

  moveUp() {
    console.log("move up event");
    this.moveUpEvent.emit(this.index);
  }

  moveDown() {
    console.log("move down event");
    this.moveDownEvent.emit(this.index);
  }
}
