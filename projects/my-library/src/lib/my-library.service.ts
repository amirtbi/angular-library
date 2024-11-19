import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  getMessage() {
    return 'Hello from MyService';
  }
}