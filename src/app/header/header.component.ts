import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent {
    @Output() selectedFeature:EventEmitter<string>=new EventEmitter<string>()
    onRecipeSelect(feature:string){
        this.selectedFeature.emit(feature)
    }
    onShoppingListSelect(feature:string){
        this.selectedFeature.emit(feature)
    }
}