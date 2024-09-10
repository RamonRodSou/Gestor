import IUser from "../interface/IUser";

class User implements IUser {
  registrationNumber: number;
  registrationDate: Date;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  cpf: number;
  birthDate: Date;
  maritalStatus: {
    id: number;
    description: string;
  };
  marriageDate?: Date;
  isBaptized: boolean;
  baptismDate?: Date;
  father: string;
  mother: string;
  role: {
    id: number;
    role: string;
  };
  position: {
    id: number;
    position: string;
  };
  password: string;

  constructor(
    registrationNumber: number,
    registrationDate: Date,
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    cpf: number,
    birthDate: Date,
    maritalStatus: { id: number; description: string },
    marriageDate: Date | undefined,
    isBaptized: boolean,
    baptismDate: Date | undefined,
    father: string,
    mother: string,
    role: { id: number; role: string },
    position: { id: number; position: string },
    password: string
  ) {
    this.registrationNumber = registrationNumber;
    this.registrationDate = registrationDate;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.cpf = cpf;
    this.birthDate = birthDate;
    this.maritalStatus = maritalStatus;
    this.marriageDate = marriageDate;
    this.isBaptized = isBaptized;
    this.baptismDate = baptismDate;
    this.father = father;
    this.mother = mother;
    this.role = role;
    this.position = position;
    this.password = password;
  }

  getRegistrationNumber(): number {
    return this.registrationNumber;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): number {
    return this.phone;
  }

  getCpf(): number {
    return this.cpf;
  }

  getMaritalStatus(): { id: number; description: string } {
    return this.maritalStatus;
  }

  getMarriageDate(): Date | undefined {
    return this.marriageDate;
  }

  getIsBaptized(): boolean {
    return this.isBaptized;
  }

  getBaptismDate(): Date | undefined {
    return this.baptismDate;
  }

  getRole(): { id: number; role: string } {
    return this.role;
  }

  getPosition(): { id: number; position: string } {
    return this.position;
  }

  getPassword(): string {
    return this.password;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPhone(phone: number): void {
    this.phone = phone;
  }

  setMaritalStatus(maritalStatus: { id: number; description: string }): void {
    this.maritalStatus = maritalStatus;
  }

  setMarriageDate(marriageDate: Date | undefined): void {
    this.marriageDate = marriageDate;
  }

  setIsBaptized(isBaptized: boolean): void {
    this.isBaptized = isBaptized;
  }

  setBaptismDate(baptismDate: Date | undefined): void {
    this.baptismDate = baptismDate;
  }

  setRole(role: { id: number; role: string }): void {
    this.role = role;
  }

  setPosition(position: { id: number; position: string }): void {
    this.position = position;
  }

  setPassword(password: string): void {
    this.password = password;
  }
}

export default User;