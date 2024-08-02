import { Company } from './Company';
import { CustomMap } from './Map';
import { User } from './User';

let user = new User();
let company = new Company();

const map = new CustomMap('map');
map.addMarker(user)
map.addMarker(company)
