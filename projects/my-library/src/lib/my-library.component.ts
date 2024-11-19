import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-my-component',
  templateUrl: "./my-library.component.html",
  styles: ["./my-library.component.scss"],
})
export class MyComponent implements OnInit {
  form: FormGroup;
  users = [];

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => this.users.push(...data));
  }
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}