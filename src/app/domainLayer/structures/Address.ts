export class Address {
    city: string;
    line1: string;
    line2: string;
    state: string;
    zip: string;

    constructor(city: string, line1: string, line2: string, state: string, zip: string) {
        this.city = city;
        this.line1 = line1;
        this.line2 = line2;
        this.state = state;
        this.zip = zip;
    }
}
