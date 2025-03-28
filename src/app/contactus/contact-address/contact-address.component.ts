import {Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-address',
  standalone: false,
  templateUrl: './contact-address.component.html',
  styleUrl: './contact-address.component.css'
})
export class ContactAddressComponent implements OnInit{
  @Input() greetMessage!: string ;
  constructor(){
    
  }
  ngOnInit(): void {
    
  }
}
