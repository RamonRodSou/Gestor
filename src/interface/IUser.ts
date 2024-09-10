export default interface IUser {
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
}
