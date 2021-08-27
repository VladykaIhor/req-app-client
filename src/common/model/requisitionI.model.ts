import { RequisitionIInterface } from '../interfaces/requisitionI.interface';

export class RequisitionI implements RequisitionIInterface {

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
