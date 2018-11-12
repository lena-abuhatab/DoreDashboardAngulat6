export class ToDo {
  constructor(
    public id: number,
    public name: string,
    public alterEgo: string,
    public likes: number
  ) {}
}
// export interface TODoList {}
export class TODoList {
  constructor(
    public id: string,
    public todo_date: Date,
    public todo_name: string,
    public todo_description: string,
    public todo_categories: string,
    public todo_labels: string
  ) {}
}
