import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-panel',
  templateUrl: './friend-panel.component.html',
  styleUrls: ['./friend-panel.component.css']
})
export class FriendPanelComponent implements OnInit {

mockFriends = ['Anthony', 'Braedan','Anthony', 'Braedan','Anthony', 'Braedan','Anthony', 'Braedan','Anthony', 'Braedan','Anthony', 'Braedan','Anthony', 'Braedan','Anthony', 'Braedan'];

  constructor() { }

  ngOnInit(): void {
  }

}
