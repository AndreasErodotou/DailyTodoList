export class Task {
  public id?: string;
  public title?: string;
  public description?: string;
  public priority?: boolean;
  public created?: Date;

  constructor(data: Task){
    Object.assign(this,data);
  }
}