import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directives';
 courses :any;
  viewMode='c';

  // courses =[
  //   {
  //     id: 1,
  //     name: 'AngularPhone XL',
  //     price: 100,
  //     description: 'Angular course'
  //   },
  //   {
  //     id: 2,
  //     name: 'Java Script',
  //     price: 20,
  //     description: 'JS Course'
  //   },
  //   {
  //     id: 3,
  //     name: 'Python',
  //     price: 200,
  //     description: ''
  //   }
  // ];
  onAdd(){
    this.courses.push({id:1,name:'Docker'});
  }

  onRemove(course:any){
    // let index= this.courses.indexOf(course);
    // this.courses.splice(index, 1);
    course.name='Updated';
  }

  loadCourses(){
   this.courses = [
      {id:1,name:'course1'},
      {id:2,name:'course2'},
      {id:3,name:'course3'},
      {id:4,name:'course4'}
    ];
  }

  trackCourse(course:any){
    return course? course.id: undefined;
  
  }
  
}


interface Course{
  id:number;
  name:string;
}
