import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Resume';

  show_option: string = "... more";
  show_more_about_me: boolean = false;
  year = new Date().getFullYear();

  constructor() {

  }

  ngOnInit(): void {
  }

  showMoreAboutMe() {
    this.show_more_about_me = !this.show_more_about_me;
    if(this.show_more_about_me) {
      this.show_option = "... less";
    } else {
      this.show_option = "... more";
    }
    
  }

  
}
