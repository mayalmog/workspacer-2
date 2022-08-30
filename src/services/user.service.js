import { users } from "../assets/data/users";

import { storageService } from "./storage.service";

export const userService = {
  query,
};

const KEY = "usersDB";
let gUsers = [];
_createUsers();

function query() {
  // return Promise.resolve(gUsers);
  return gUsers;
}

function _createUsers() {
  //   gUsers = storageService.loadFromStorage(KEY);
  //   console.log(gUsers);
  //   if (!gUsers || !gUsers.length) {
  //     gUsers = users;
  //     _saveUsersToStorage();
  //   }
  gUsers = users;
}

function _saveUsersToStorage() {
  storageService.saveToStorage(KEY, gUsers);
}
