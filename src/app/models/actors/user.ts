import { UserStatus } from './user-status.enum';

export class User {
    id?: number;
    username: string;
    password: string;
    userStatus?: UserStatus;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }
}
