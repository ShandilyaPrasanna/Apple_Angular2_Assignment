import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'my-app',
  template: `<h1>HELLO from App Component</h1>
              <app-users></app-users>`,
  providers: [UsersService]
})
export class AppComponent {
}
