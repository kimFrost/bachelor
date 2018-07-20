
/*
export interface IPlayer {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
}
*/
//implements IPlayer


export enum EReward {
    Multiplier,
    Points
}


export class Player {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
    points: number;
    constructor(id: number, firstName: string, lastName: string, nickName: string, points: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.points = points;
    }
}

export class Battle {
    attacker: Player;
    defender: Player;
    constructor(attacker: Player, defender: Player) {
        this.attacker = attacker;
        this.defender = defender;
    }
}

export class Reward {
    type: EReward;
    value: number;
}

export class Challenge {
    reward: Reward;
    onlyOneWinner: boolean;
    constructor(reward: Reward, onlyOneWinner: boolean = true) {
        this.reward = reward;
        this.onlyOneWinner = onlyOneWinner;
    }
}

export class HistoryEntry {

}

/*
players
- challengers won


challengers

challenge
- reward
- multiwin
- winner

*/