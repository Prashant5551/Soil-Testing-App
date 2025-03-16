export class User {
    userId: number
    userName: string
    emailId: string
    fullName: string
    password: string

    constructor() {
        this.emailId = '';
        this.userId = 0;
        this.userName = '';
        this.fullName = '';
        this.password = '';
    }
}

export interface ApiResponse {
    message: string,
    result: boolean,
    data: any
}

export interface UserList {
    userId: number
    userName: string
    emailId: string
    fullName: string
    role: string
    createdDate: string
    password: string
    projectName: string
    refreshToken: string
    refreshTokenExpiryTime: string
  }