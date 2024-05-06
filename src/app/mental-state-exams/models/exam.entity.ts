export class Exam {
  id: number;
  patientId: number;
  examinerId: number;
  examDate: string;
  orientationScore: number;
  registrationScore: number;
  attentionAndCalculationScore: number;
  recallScore: number;
  languageScore: number;

  constructor(
    id: number,
    patientId: number,
    examinerId: number,
    examDate: string,
    orientationScore: number,
    registrationScore: number,
    attentionAndCalculationScore: number,
    recallScore: number,
    languageScore: number
  ) {
    this.id = id;
    this.patientId = patientId;
    this.examinerId = examinerId;
    this.examDate = examDate;
    this.orientationScore = orientationScore;
    this.registrationScore = registrationScore;
    this.attentionAndCalculationScore = attentionAndCalculationScore;
    this.recallScore = recallScore;
    this.languageScore = languageScore;
  }
}
