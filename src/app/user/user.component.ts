import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: Http) { }
  
  usersInQueue = [];
  fetchUsersInQueue = function() {
     this.http.get("https://pcap-amd.herokuapp.com/users/userQueue").subscribe(
      (res: Response) => {
          this.usersInQueue = res.json();
      }
     )
  };

  users = [];
  fetchUsers = function() {
     this.http.get("https://pcap-amd.herokuapp.com/users").subscribe(
      (res: Response) => {
          this.users = res.json();
      }
     )
  };

  associate = {
    firstName:"",
    lastName:"",
    status:""
  };
  fetchAssociate = function() {
     this.http.get("https://pcap-amd.herokuapp.com/salesAssociate/9970011802").subscribe(
      (res: Response) => {
          this.associate = res.json();
      }
     )
  };

  toggleStatus = {
    status:"Fetching..."
  };

  getToggleStatus = function() {
     this.http.get("https://pcap-amd.herokuapp.com/salesAssociate/9970011802/toggle").subscribe(
      (res: Response) => {
          this.toggleStatus.status = res["_body"];
      }
     )
  };

  updateToggleStatus = function() {
     this.http.put("https://pcap-amd.herokuapp.com/salesAssociate/9970011802/toggle").subscribe(
      (res: Response) => {
          this.toggleStatus = res["_body"];
      }
     )
  };

  ngOnInit() {
      this.fetchUsersInQueue();
      this.fetchUsers();
      this.fetchAssociate();
      this.getToggleStatus();
      var userComponent = this;
      

      $('#toggle').click(function(){
          userComponent.updateToggleStatus();
      });


    };
}
