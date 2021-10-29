class Task {
  text: string;
  id: string;
  completed: boolean;

  constructor(taskText: string) {
    this.text = taskText;
    this.id = new Date().toISOString();
    this.completed = false;
  }
}

export default Task;