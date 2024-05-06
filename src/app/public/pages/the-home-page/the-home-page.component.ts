import { Component } from '@angular/core';
import {LanguageService} from "../../services/language.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-the-home-page',
  standalone: true,
  imports: [],
  templateUrl: './the-home-page.component.html',
  styleUrl: './the-home-page.component.css'
})
export class TheHomePageComponent {

  language!: string;
  languageSubscription!: Subscription;

  constructor(public languageService: LanguageService) {
  }

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage.subscribe(language => {
      this.language = language;
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

}
