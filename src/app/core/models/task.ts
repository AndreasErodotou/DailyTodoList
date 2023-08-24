export class Task {
  public id?: number;
  public title?: string;
  public description?: string;
  public priority?: boolean;

  constructor(data: Task){
    Object.assign(this,data);
  }
}