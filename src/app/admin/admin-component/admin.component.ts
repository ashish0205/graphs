import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
 import * as productAction from '../../store/product.actions'
import * as fromApp from '../../app.reducer'
import { Products } from 'src/app/model/product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  myForm: FormGroup;
  selectedItem:Products

  constructor(
    private store: Store<{}>
  ) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      pName: new FormControl('',Validators.required),
      prevSale: new FormControl('',Validators.required),
      currSale: new FormControl('',Validators.required)
    });
  }


  get registerFormControl() {
    return this.myForm.controls;
  }
  onSubmit(form: FormGroup) {

    console.log(form.value.pName);
    if (form.valid) {
      this.selectedItem=new Products(form.value.pName,form.value.currSale,form.value.prevSale)
     
      // this.selectedItem.curr = form.value.currSale;
      // this.selectedItem.prev=form.value.prevSale
      // const payload = {
      //   productName: form.value.pName,
      //   currentYear: form.value.currSale, previousYear: form.value.prevSale
      // }
      this.store.dispatch(new productAction.Create(this.selectedItem))

    }


    console.log('Valid?', form.valid); // true or false
  
  }

}
