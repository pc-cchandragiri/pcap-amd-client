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
     this.http.get("https://pcap-amd.herokuapp.com/salesAssociate/9970011801").subscribe(
      (res: Response) => {
          this.associate = res.json();
      }
     )
  };

  toggleStatus = {
    status:'Offline'
  };

  getToggleStatus = function() {
     this.http.ger("https://pcap-amd.herokuapp.com/salesAssociate/9970011801/toggle").subscribe(
      (res: Response) => {
          this.toggleStatus = res.json();
      }
     )
  };

  updateToggleStatus = function() {
     this.http.put("https://pcap-amd.herokuapp.com/salesAssociate/9970011801/toggle").subscribe(
      (res: Response) => {
          this.toggleStatus = res.json();
      }
     )
  };

  ngOnInit() {
      this.fetchUsersInQueue();
      this.fetchUsers();
      this.fetchAssociate();
      this.getToggleStatus();

      var userComponent = this;
      
      $('#toggle_event_editing button').click(function(){
      
      if($(this).hasClass('locked_active') || $(this).hasClass('unlocked_inactive')){
            userComponent.updateToggleStatus();
      } else{
            userComponent.updateToggleStatus();
      }
      
      /* reverse locking status */
      $('#toggle_event_editing button').eq(0).toggleClass('locked_inactive locked_active btn-default btn-info');
      $('#toggle_event_editing button').eq(1).toggleClass('unlocked_inactive unlocked_active btn-info btn-default');
    });


  }

}
