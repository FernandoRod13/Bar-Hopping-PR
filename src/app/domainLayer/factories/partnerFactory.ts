import { Injectable } from '@angular/core';
import { Partner } from '../structures/Partner';
import { Address } from '../structures/Address';
@Injectable()
export class PartnerFactory {
    /**This function will contrusct an partner from a json from the database. */
    createPartner(json: any): Partner {
        const data = json.data();
        const addressRef = data.address;
        const address = new Address(addressRef.city, addressRef.line1, addressRef.line2, addressRef.state, addressRef.zip);
        return new Partner(json.id, address, data.name, data.phone, data.manager, data.type, data.description, data.image,
        data.announcement);
    }
}
