import { afterRender, Component, Input, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent  implements OnInit {
  @Input() messages:any
  scrollTop=0
  scroll=true
  constructor() { 
    afterRender(
      ()=>{
        if (this.scroll){
          document.getElementsByClassName("vege")[0]
          .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
      }
    )
  }

  ngOnInit() {}
  handleScrollStart() {
    console.log('scroll start');
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', JSON.stringify(ev.detail));
    this.scroll=false
    this.scrollTop=Number(ev.detail.scrollTop)
  }

  handleScrollEnd() {
    let cHeight= document.getElementsByClassName('ion-padding')[0].clientHeight
    // console.log("Client Height (ionPadding):", cHeight)
    // let sHeight= document.getElementsByClassName('ion-padding')[0].scrollHeight
    // console.log("Scroll Height (ionPadding):", sHeight)
    // let conHeight= document.getElementsByClassName('container')[0].clientHeight
    // console.log("Client Height (container):", conHeight)
    let sonHeight= document.getElementsByClassName('container')[0].scrollHeight
    
    
    // console.log("Scroll Height (container):", sonHeight)
    // console.log('scroll end');

    console.log("scrollEnd:", this.scrollTop+cHeight)
    console.log("scrollEnd:", sonHeight)
    if (this.scrollTop+cHeight>=sonHeight) this.scroll=true
    else {
      console.log("Kikapcs")
      this.scroll=false
      }
  }

}
