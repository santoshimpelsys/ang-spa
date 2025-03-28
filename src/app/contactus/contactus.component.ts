import {Component,Input,OnInit} from '@angular/core';
// import { ContactAddressComponent } from './contact-address/contact-address.component';

@Component({
  selector: 'app-contactus',
  standalone: false,
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  message : string = "I am Parent";
  childmessage : string = "I am passed from PARENT to CHILD"
}
