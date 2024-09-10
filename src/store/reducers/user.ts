import { createSlice } from "@reduxjs/toolkit";
import User from "../../class/User";

const initialState = new User(
  100000,  // registrationNumber
  new Date(),  // registrationDate
  '',  // firstName
  '',  // lastName
  '',  // email
  0,  // phone
  0,  // cpf
  new Date(),  // birthDate
  {
    id: 0,
    description: ''
  },  // maritalStatus
  undefined,  // marriageDate
  false,  // isBaptized
  undefined,  // baptismDate
  '',  // father
  '',  // mother
  {
    id: 0,
    role: ''
  },  // role
  {
    id: 0,
    position: ''
  },  // position
  ''  // password
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },

  }
});

export const { setUser } = userSlice.actions;
export default userSlice;
