import {Address} from './Address';

export class Partner {
    pId: string;
    address: Address;
    name: string;
    phone: string;
    manager: string;
    type: string;
    description: string;
    image: string;
    announcement: string;

    constructor(id: string, address: Address, name: string, phone: string, manager: string, type: string, description: string,
        image: string, announcement: string) {
        this.pId = id;
        this.address = address;
        this.name = name;
        this.phone = phone;
        this.manager = manager;
        this.type = type;
        this.description = description;
        this.image = image;
        this.announcement = announcement;
    }

    parseToJSON(): any {
        var partner = {
            address: this.address.parseToJSON(),
            name: this.name,
            phone: this.phone,
            manager: this.manager,
            type: this.type,
            description: this.description,
            image: this.image,
            announcement: this.announcement,
        };
        return partner;
    }
}
