import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArtistsService} from './artists-service/artists.service';

@Component({
    selector: 'app-gigital',
    templateUrl: './gigital.page.html',
    styleUrls: ['./gigital.page.scss'],
})
export class GigitalPage implements OnInit {

    constructor(private http: HttpClient, public artistsService: ArtistsService) {
    }

    ngOnInit() {
        this.init();
    }

    init(){
        this.http.get('https://gigital-code-sample-api.herokuapp.com/artists/list')
            .subscribe(response => {
                console.log(response);
                this.artistsService.artistsData = response;
                this.artistsService.artistsWithinPriceRange = this.artistsService.artistsData;
                this.artistsService.getTags();
                this.artistsService.getArtistsToDisplay();
            });
    }

    changeDataSource(){
        this.artistsService.artistsData = this.artistsService.artists;
        this.artistsService.artistsWithinPriceRange = this.artistsService.artistsData;
        this.artistsService.getTags();
        this.artistsService.getArtistsToDisplay();
    }
}
