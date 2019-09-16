import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static: false}) amountInputRef: ElementRef;
  // @Output() ingradiantAdded = new EventEmitter();

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddItem(){
    const newIngradiant = new Ingrediant(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
       );

       this.shoppingService.addIngradiant(newIngradiant);
       
      //  this.ingradiantAdded.emit(newIngradiant);
       
  }
}
