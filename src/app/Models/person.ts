

/*
export interface IPerson {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
}
*/
//implements IPerson

export class Person {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
    constructor(
        id: number,
        firstName: string,
        lastName: string,
        nickName: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
    }
}