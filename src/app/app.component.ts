import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { AngularFirestore } from 'angularfire2/firestore';

import { config } from "./app.config";
import { Task } from "./app.model";
import { TaskService } from './task.service';


class Item {
  constructor(public title) { }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'app';

  public tasks: Observable<any[]>;

  public bShowNav: boolean = false;

  myTask: string;
  editMode: boolean = false;
  taskToEdit: any = {};

  constructor(
    private db: AngularFirestore,
    private tastService: TaskService) {

    //this.tasks = this.db.collection(config.collection_endpoint).valueChanges();
    this.tasks = this.db
      .collection(config.collection_endpoint)
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          //Get document data
          const data = a.payload.doc.data() as Task;
          //Get document id
          const id = a.payload.doc.id;
          //Use spread operator to add the id to the document data
          return { id, ...data };
        });
      }));
  }

  public toggleMenu() {
    this.bShowNav = !this.bShowNav;
  }

  public edit(task) {
    console.log(task);
    //Set taskToEdit and editMode
    this.taskToEdit = task;
    this.editMode = true;
    //Set form value
    this.myTask = task.description;
  }

  public saveTask() {
    if (this.myTask !== null) {
      //Get the input value
      let task = {
        description: this.myTask
      };
      if (!this.editMode) {
        console.log(task);
        this.tastService.addTask(task as Task);
      } else {
        //Get the task id
        let taskId = this.taskToEdit.id;
        //update the task
        this.tastService.updateTask(taskId, task);
      }
      //set edit mode to false and clear form
      this.editMode = false;
      this.myTask = "";
    }
  }

  public deleteTask(task) {
    //Get the task id
    let taskId = task.id;
    //delete the task
    this.tastService.deleteTask(taskId);
  }

  /*
  ngOnInit() {
    this.tasks = this.db.collection(config.collection_endpoint).valueChanges();
  }
  */

  /*
  public items: Observable<Item[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('/items').valueChanges();
  }

  public AddItem(): void {
      let item = new Item(`My item`);
      //this.items.push(item);
  }
  */
}
