import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgScr:any;
  displayView(e:any){
    console.log(e.target)
    this.imgScr=e.target.previousElementSibling.firstElementChild.src;
    document.querySelector(".img-view")?.classList.remove("d-none")
  }

  removeView(e:any){
    console.log(e.target.src)
    if(e.target.src== undefined){
      document.querySelector(".img-view")?.classList.add("d-none")

    }
  }


}
