export class Task {
  public id: string | null = null;
  public title?: string;
  public description?: string;
  public priority?: boolean;
  public created?: Date;
  public isDone?: boolean;

  constructor(data: Task){
    Object.assign(this,data);
  }
}