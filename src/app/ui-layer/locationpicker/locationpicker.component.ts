import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-locationpicker',
  templateUrl: './locationpicker.component.html',
  styleUrls: ['./locationpicker.component.css']
})
export class LocationpickerComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public autocomplete: String;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  @ViewChild('search')
  public searchElementRef: ElementRef;

  ngOnInit() {

    this.searchControl = new FormControl('', [
      Validators.required
    ]);

    // set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();
    // add autocomplete
    this.loadGooglePlacesAutoComplete();

  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  private loadGooglePlacesAutoComplete() {
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['geocode', 'establishment']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          console.log(place);
          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          // const location = new Location(place.formatted_address, place.name,this.latitude,this.longitude);
          // this.dataService.changeEventLocation(location);

        });
      });
    });
  }
}
