import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {
courses=[
  {id:1,name:'Development'},
  {id:2,name:'Arts'},
  {id:3,name:'Sceince'}
]

log(x:any){
  console.log(x);
}
  

}
