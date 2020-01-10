import { Component, Output, EventEmitter } from "@angular/core";
@Component({
   selector: "app-search",
   templateUrl: "./search.component.html"
})
export class SearchComponent {
   @Output() searchInputEvent = new EventEmitter();
   doSearch(e) {
      this.searchInputEvent.emit(e.target.value);
   }
}
