import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {DatePipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {MentalApiService} from "../../services/mental-api.service";
import {Patient} from "../../models/patient.entity";
import {Examiner} from "../../models/examiner.entity";
import {Exam} from "../../models/exam.entity";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-exam-cards',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage,
    NgOptimizedImage,
    NgForOf,
    DatePipe
  ],
  templateUrl: './exam-cards.component.html',
  styleUrl: './exam-cards.component.css'
})
export class ExamCardsComponent implements OnInit {

  patients: Array<Patient> | undefined = [];
  examiners: Array<Examiner> | undefined = [];
  exams: Array<Exam> | undefined = [];

  examsData: any[] | undefined = []; //nuevo arreglo generado para almecenar la data

  constructor(private mentalService: MentalApiService) { }

  ngOnInit() {
    // el catch data retorna una promesa asi que debemos manejarla como tal
    this.catchData().then(() => {
      console.log('Data fetched successfully');
    }).catch((error) => {
      console.error('Error fetching data', error);
    });
  }

  async catchData() {
    // resolvemos la promesa utilizando firstValueFrom de RxJS, que es una alternativa a usar toPromise() que sale como deprecado
    this.exams = await firstValueFrom(this.mentalService.getExams());
    this.examiners = await firstValueFrom(this.mentalService.getExaminers());
    this.patients = await firstValueFrom(this.mentalService.getPatients());

    // mapeamos la lista de exámenes a un nuevo arreglo que contiene el examen, el examinador y el paciente
    this.examsData = this.exams!.map((exam: Exam) => {
      const examiner = this.examiners!.find((examiner: Examiner) => examiner.id === exam.examinerId);
      const patient = this.patients!.find((patient: Patient) => patient.id === exam.patientId);
      // devolvemos un objeto que tiene el examen, el examinador y el paciente
      return {
        exam: exam,
        examiner: examiner,
        patient: patient
      };
    });

    // testing
    console.log(this.examsData);
  }

  calculateTotalScore(examId: number): number {
    // buscamos el examen en la lista de exámenes por su ID
    const exam = this.exams!.find(exam => exam.id === examId);
    if (!exam) {
      return 0;
    }
    // operador + para forzar a ser entero y haga la sumatoria y no concatene strings
    return +exam.orientationScore + +exam.registrationScore + +exam.attentionAndCalculationScore + +exam.recallScore + +exam.languageScore;
  }

 /* getPatients() {
    this.mentalService.getPatients().subscribe(
      (response: any) => {
        this.patients = response;
        console.log(this.patients);
      }
    )
  }

  getExaminers() {
    this.mentalService.getExaminers().subscribe(
      (response: any) => {
        this.examiners = response;
        console.log(this.examiners);
      }
    )
  }

  getExams() {
    this.mentalService.getExams().subscribe(
      (response: any) => {
        this.exams = response;
        console.log(this.exams);
      }
    )
  }*/

}
