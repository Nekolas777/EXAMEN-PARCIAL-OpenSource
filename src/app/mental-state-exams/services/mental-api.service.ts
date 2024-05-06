import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exam} from "../models/exam.entity";
import {Examiner} from "../models/examiner.entity";
import {Patient} from "../models/patient.entity";
import {environment} from "../../../environments/environmet";

@Injectable({
  providedIn: 'root'
})
export class MentalApiService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.baseUrl}/mental-state-exams`);
  }

  getExaminers(): Observable<Examiner[]> {
    return this.http.get<Examiner[]>(`${this.baseUrl}/examiners`);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/patients`);
  }

}
