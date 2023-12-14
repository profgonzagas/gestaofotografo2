import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = [
    {
      id: 1,
      title: 'Informações sobre drone',
      date: new Date(),
      image: 'assets/drone.jpg',
      excerpt: 'Em breve novas fotos'
    },
    {
      id: 2,
      title: 'Como fotografar edificações ',
      date: new Date(),
      image: 'assets/brasilia.jpg',
      excerpt: 'Em breve novas fotos'
    },
    
  ];
  public todos: Todo[]=[];
  public form: FormGroup;

 constructor(private fb: FormBuilder){
  this.form= this.fb.group({
    title1: ['', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.required
    ])]
  })
  this.load();
  this.todos.push(new Todo(1, 'teste', false));
  
 }
  add(){
    const title1=this.form.controls['title1'].value;
    const id1 = this.todos.length+1;
    this.todos.push(new Todo(id1, title1, false));
    this.save();
    this.clear();

  }

  clear(){
    this.form.reset();
  }
  remove(todo: Todo){
    const index=this.todos.indexOf(todo);
    if (index !== -1){
      this.todos.splice(index, 1);
    }
    this.save();
  }
  markAsDone(todo: Todo){
    todo.done=true;
    this.save();
  }
  markAsUndone(todo: Todo ){
    todo.done=false;
    this.save();
  }
  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }
  load() {
    const data = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
}
}
