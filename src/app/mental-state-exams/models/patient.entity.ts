export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl: string;
  birthDate: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    photoUrl: string,
    birthDate: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.photoUrl = photoUrl;
    this.birthDate = birthDate;
  }
}
