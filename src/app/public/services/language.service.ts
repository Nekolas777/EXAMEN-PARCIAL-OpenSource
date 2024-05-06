import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSource = new BehaviorSubject<string>('en');
  currentLanguage = this.languageSource.asObservable();

  changeLanguage() {
    const current = this.languageSource.value;
    this.languageSource.next(current === 'en' ? 'es' : 'en');
  }

}
