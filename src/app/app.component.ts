import { HttpClient } from '@angular/common/http';
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

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  downloadResume() {
    let file_name = "Resume_Juan_Jose_Guzman.pdf"
    let file_path = "assets/guzman_juan_resume.pdf";
    var element = document.createElement('a');
    element.setAttribute("href", file_path);
    element.setAttribute("download", file_name);
    element.style.display = 'none';
    element.click();
    element.remove();
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
