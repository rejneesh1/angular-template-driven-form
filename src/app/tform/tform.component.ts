import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form){
    console.log(form);
  }
}
