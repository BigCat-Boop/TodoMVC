import { Component } from '@angular/core';
const todos = [
  {
    id: 1,
    title: '吃饭',
    done: true
  },
  {
    id: 2,
    title: '打篮球',
    done: true
  },
  {
    id: 3,
    title: '写代码',
    done: true
  }
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: {
    id: number,
    title: string,
    done: boolean
  }[] = todos

  public currentEditing: {
    id: number,
    title: string,
    done: boolean
  } = null

  addTodo(e):void {
   const titleText = e.target.value;
   if (!titleText.length) {
     return
   }
   const last = this.todos.length + 1
   this.todos.push({
     id: last,
     title: titleText,
     done: false
   })
  //  清除文本框
   e.target.value = '';
  }

  get toggleAll() {
    return this.todos.every(t => t.done)
  }
  set toggleAll(val) {
    this.todos.forEach(t => t.done = val);
  }

  removeTodo (index: number) {
    this.todos.splice(index, 1)
  }

  saveEdit(e, todo) {
    todo.title = e.target.value;
    this.currentEditing = null;
  }

  handleEditKeyup(e) {
    const {keyCode, target} = e;
    if (keyCode === 27) {
      // 取消编辑
      // 同时把文本框的值赋值为之前的值
      target.value = this.currentEditing.title
      this.currentEditing = null;
    }
  }
}
