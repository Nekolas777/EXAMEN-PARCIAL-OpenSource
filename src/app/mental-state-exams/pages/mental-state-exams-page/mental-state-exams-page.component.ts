import {Component} from '@angular/core';
import {ExamCardsComponent} from "../../components/exam-cards/exam-cards.component";

@Component({
  selector: 'app-mental-state-exams-page',
  standalone: true,
  imports: [
    ExamCardsComponent
  ],
  templateUrl: './mental-state-exams-page.component.html',
  styleUrl: './mental-state-exams-page.component.css'
})
export class MentalStateExamsPageComponent{


}
