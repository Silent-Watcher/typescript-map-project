import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class User implements Mappable {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	icon: string;

	constructor() {
		this.name = faker.person.fullName();
		this.icon = '/blue_MarkerX.png';
		this.location = {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		};
	}
}
