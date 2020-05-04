import { Bet } from '../system/bet';
import { User } from './user';
import { UserStatus } from './user-status.enum';

export class Buyer extends User {
    bets: Bet[];

    constructor(id: number, username: string, password: string,
        userStatus: UserStatus, bets: Bet[]) {
        super(username, password, id);
        this.userStatus = userStatus;
        this.bets = bets;
    }
}
