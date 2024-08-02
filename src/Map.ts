export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
	name: string;
	icon: string;
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		// initialize map
		this.googleMap = new google.maps.Map(
			document.getElementById(divId) as HTMLElement,
			{
				zoom: 2,
				center: {
					lat: 40,
					lng: 10,
				},
			}
		);
	}

	addMarker(mappable: Mappable) {
		new google.maps.Marker({
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
			animation: google.maps.Animation.DROP,
			map: this.googleMap,
			title: mappable.name,
			icon: mappable.icon
		});
	}
}
