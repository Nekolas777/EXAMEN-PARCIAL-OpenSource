export class Examiner {
  id: number;
  firstName: string;
  lastName: string;
  nationalProviderIdentifier: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    nationalProviderIdentifier: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationalProviderIdentifier = nationalProviderIdentifier;
  }
}
