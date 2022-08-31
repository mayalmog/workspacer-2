import { users } from "../assets/data/users";

import { storageService } from "./storage.service";

export const userService = {
  query,
  validateAdmin,
  onLoginUser,
};

const KEY = "usersDB";
let gUsers = [];
_createUsers();

function query() {
  return gUsers;
}

function onLoginUser(userName) {
  return gUsers.find((user) => user.fullname === userName);
}

function validateAdmin(adminInput, passwordInput) {
  if (
    adminInput.email === "admin.fireblocks.com" &&
    passwordInput.password === "123456789"
  ) {
    return true;
  }
  return false;
}

function _createUsers() {
  gUsers = storageService.loadFromStorage(KEY);
  if (!gUsers || !gUsers.length) {
    gUsers = users;
    _saveUsersToStorage();
  }
  // gUsers = users;
}

function _saveUsersToStorage() {
  storageService.saveToStorage(KEY, gUsers);
}
