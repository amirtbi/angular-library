import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-library/my-component/my-component.component';
import { MyComponent } from './my-library.component';
import { MyService } from './my-library.service';

import { ReactiveFormsModule } from '@angular/forms'; // For reactive forms
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MyComponent, MyComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [MyComponent,],
  providers: [MyService]
})
export class MyLibraryModule { }
