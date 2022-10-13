
export class Products { 
  public _id: string;
  public name: string;
  public prev: Number;
  public curr: Number;


  constructor(name: string, prev: Number, curr: Number) {
    this.name = name;
    this.prev = prev;
    this.curr = curr;
  }
}
