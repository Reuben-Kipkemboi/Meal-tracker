export class Meal {
    static calories(meal: Meal, calories: any) {
      throw new Error('Method not implemented.');
    }
    length(length: any) {
      throw new Error('Method not implemented.');
    }
    constructor(public name:string,public calories:number,public detail:string){}
}
