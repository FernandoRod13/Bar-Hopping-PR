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

}
