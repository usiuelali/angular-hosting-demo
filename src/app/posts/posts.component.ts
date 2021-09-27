import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/posts').subscribe((value) => {
      console.log(value);
    });
  }
}
