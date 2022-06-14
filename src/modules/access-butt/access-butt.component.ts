import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-access-butt',
  templateUrl: './access-butt.component.html',
  styleUrls: ['./access-butt.component.css']
})
export class AccessButtComponent implements OnInit {

  @Input()
  title : string | undefined ;
  @Input()
  lien : string | undefined ;
  @Input()
  icon : string | undefined ;


  constructor() { }

  ngOnInit(): void {
  }

}
