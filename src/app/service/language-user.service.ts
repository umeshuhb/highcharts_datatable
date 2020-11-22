import { Injectable } from '@angular/core';

import {LanguageUser} from '../shared/userLanguage';
import {LanguageUsers} from '../shared/usersLanguage';

@Injectable({
  providedIn: 'root'
})
export class LanguageUserService {

  constructor() { }
  getUsers():LanguageUser[]{
      return LanguageUsers;
  }
}
