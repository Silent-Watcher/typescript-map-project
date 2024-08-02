import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class Company implements Mappable {
	name: string;
	catchphrase: string;
	location: {
		lat: number;
		lng: number;
	};
	icon:string

	constructor() {
		this.name = faker.company.name();
		this.catchphrase = faker.company.catchPhrase();
		this.icon = '/purple_MarkerX.png'
		this.location = {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		};
	}
}
