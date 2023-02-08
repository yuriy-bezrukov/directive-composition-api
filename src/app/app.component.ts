import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly searchForm = new FormGroup({
    text: new FormControl<string>('', {
      nonNullable: true
    }),
  });

  public readonly searchText$ = this.searchForm.controls.text.valueChanges; 

  public testArray = new Array(1000);
  public isCompositionVersion = true;
  public showCard = true;

}
