import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" href="#">Income</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Outcome</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Loans</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Investments</a>
      </li>
    </ul>
    <app-table>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
