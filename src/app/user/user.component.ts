import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: Http) { }
  
  users = [];
  fetchUsers = function() {
     this.http.get("http://pcap-amd.herokuapp.com/users").subscribe(
     	(res: Response) => {
     	    this.users = res.json();
     	}
     )
  }

  ngOnInit() {
      this.fetchUsers();
  }

}
