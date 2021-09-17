import { LoginInfoInterface } from "../interfaces/login-info.interface"

export class LoginInfo implements LoginInfoInterface {

    constructor(
        public otp: string,
        public principal: string,
    ) {
        this.otp = otp
        this.principal = principal
    }
}
