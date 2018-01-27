import { Location } from './Location';

export class Partner {
    pId: string;
    location: Location;
    name: string;
    phone: string;
    manager: string;
    type: string;
    description: string;
    image: string;
    announcement: string;
    website: string;

    constructor(id: string, location: Location, name: string, phone: string, manager: string, type: string, description: string,
        image: string, announcement: string, website: string) {
        this.pId = id;
        this.location = location;
        this.name = name;
        this.phone = phone;
        this.manager = manager;
        this.type = type;
        this.description = description;
        this.image = image;
        this.announcement = announcement;
        this.website = website;
    }

}
