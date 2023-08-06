export class Student {
    roll_no: string;
    name: string;
    dob: Date;
    score: number;

    constructor(roll_no: string, name: string, dob: Date, score: number) {
        this.roll_no = roll_no;
        this.name = name;
        this.dob = dob;
        this.score = score;
    }
}