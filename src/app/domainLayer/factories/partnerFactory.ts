import { Injectable } from '@angular/core';
import { Partner } from '../structures/Partner';
import { Location } from '../structures/Location';
@Injectable()
export class PartnerFactory {
    /**This function will contrusct an partner from a json from the database. */
    createPartner(json: any): Partner {
        const data = json.data();
        const locationRef = data.location;
        const location = new Location(locationRef.latitude, locationRef.longitude, locationRef.address, locationRef.city);
        return new Partner(json.id, location, data.name, data.phone, data.manager, data.type, data.description, data.image,
        data.announcement, data.website);
    }

    composeEmptyPartner() {
        const location = new Location(0.00, 0.00, '', '');
        return new Partner('', location, '', '', '', '', '', '', '', '');
    }
}
