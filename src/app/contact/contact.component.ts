import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  lable:any;
  showLabel(e:any){
    console.log(e.target.value.length)
    if(e.target.value.length>0){
      this.lable =e.target.previousElementSibling;
      this.lable.classList.remove("opacity-0");
      this.lable.classList.remove("animate__fadeOutDown");
      this.lable.classList.add("animate__fadeInUp");
    }
    else{
      this.lable =e.target.previousElementSibling;
      this.lable.classList.remove("animate__fadeInUp");
      this.lable.classList.add("animate__fadeOutDown");
    }
  }

}

