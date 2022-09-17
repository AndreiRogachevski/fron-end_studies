import { Component, OnInit, OnChanges} from '@angular/core';
import usersData from './data.json'
interface User{
headers:[];
_id: String;
amount: String;
type: String;
name: { first: String; last: String; };
company: String;
email: String;
phone: String;
address: String;
}
@Component({
  selector: 'app-table',
  template: `
    <table>
      <thead>
        <tr>
          <th *ngFor='let head of headers'>{{head}}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of filterItemsOfType('income')">
          <td>{{user.name.first}}</td>
          <td>{{user.phone}}</td>
        </tr>
      </tbody>
    </table>
    `,
  styleUrls: ['./app.component.css']
})
export class TableComponent implements 
  OnInit,
  OnChanges {
    users = usersData.data;
    headers = ['Name', 'Phone']
    filterItemsOfType(type:string){
      return this.users.filter(x => x.type == type);
  }
    ngOnChanges(){
    }
    ngOnInit(){
  console.log(this.users);
    
    };
}
