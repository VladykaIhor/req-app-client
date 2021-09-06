import { NameInfoInterface } from '../interfaces/name-info.interface';

export class NameInfo implements NameInfoInterface {

    constructor(
        public firstName?: string,
        public lastName?: string,
        public fathersName?: string
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.fathersName = fathersName
    }
}
