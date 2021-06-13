import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
    artistsData: any = [];
    defaultLowestPrice = 700;
    defaultHighestPrice = 200000;
    priceRange = {lower: this.defaultLowestPrice, upper: this.defaultHighestPrice};
    artistsToDisplay: any = [];
    tags: Array<string> = [];
    selectedTags: Array<string> = [];
    artistsWithinPriceRange: Array<any> = [];
    sortMethod = '';
artists = [
    {
        id: 1,
        name: 'Darin',
        picture: 'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,g_face,h_1000,q_auto,w_1000/v1614350411/sample/Darin_Zanyar_in_2020__cropped_vh1qnm.jpg',
        price: 15000,
        tags: [
            {id: 0, group: 0, name: 'Artist'},
            {id: 0, group: 1, name: 'Pop'},
            {id: 1, group: 1, name: 'Ballad'}]
    },
    {
        id: 4,
        name: 'BOP',
        picture: 'https://res.cloudinary.com/hthruuqgk/image/upload/dpr_auto,f_auto,q_auto/v1614350575/sample/A-996604-1409334991-7193.jpeg_uxldhz.jpg',
        price: 10000,
        tags: [
            {id: 1, group: 0, name: 'DJ'},
            {id: 5, group: 1, name: 'Electro'},
            {id: 6, group: 1, name: 'Drum and Bass'}
        ]
    },
    {id: 10,
        name: 'Post Malone',
        picture: 'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,g_face,h_600,q_auto,w_600/v1614350263/sample/Post_Malone_Stavernfestivalen_2018__202032_wknv0r.jpg',
        price: 1000,
        tags: [
            {id: 0, group: 0, name: 'Artist'},
            {id: 3, group: 1, name: 'Hip-Hop'},
            {id: 9, group: 1, name: 'Rap'}
        ]
    },
    {
        id: 5,
        name: 'Zara Larsson',
        picture: 'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,g_face,h_1000,q_auto,w_1000/v1614350607/sample/Zara_Larsson___The_Observatory_OC_05_02_2019__48498748537_hyjoqz.jpg', price: 200000,
        tags: [
            {id: 0, group: 0, name: 'Artist'},
            {id: 4, group: 1, name: 'RnB'},
            {id: 0, group: 1, name: 'Pop'}
        ]
    }
];
  constructor() { }
    filterByPrice(){
        this.artistsWithinPriceRange = this.artistsData.filter(artist =>
            artist.price >= this.priceRange.lower && artist.price <= this.priceRange.upper);
        console.log(this.artistsWithinPriceRange, this.priceRange);
        this.getArtistsToDisplay();
    }

    sortByPriceAscending(){
        this.artistsToDisplay.sort((a, b) => a.price - b.price);
    }

    sortByPriceDescending(){
        this.artistsToDisplay.sort((a, b) => b.price - a.price);
    }

    filterByTag(tag){
        if (!this.selectedTags.includes(tag)){
            this.selectedTags.push(tag);
        } else {
            const index = this.selectedTags.indexOf(tag);
            this.selectedTags.splice(index, 1);
        }
        console.log(this.selectedTags);
        this.getArtistsToDisplay();
    }

    getArtistsToDisplay(){
        let artistsByTag = [];

        if (this.selectedTags.length <= 0
            && this.priceRange.lower === this.defaultLowestPrice
            && this.priceRange.upper === this.defaultHighestPrice) {
            console.log('case 1');
            this.artistsToDisplay = this.artistsData;
        }

        else if (this.selectedTags.length <= 0
            && (!(this.priceRange.lower === this.defaultLowestPrice) || !(this.priceRange.upper === this.defaultHighestPrice))) {
            console.log('case 2');
            this.artistsToDisplay = this.artistsData.filter(artist => this.artistsWithinPriceRange.includes(artist));
        }

        else if (this.selectedTags.length > 0
            && this.priceRange.lower === this.defaultLowestPrice
            && this.priceRange.upper === this.defaultHighestPrice) {
            console.log('case 3');
            for (const selTag of this.selectedTags){
                const artistWithTag = this.artistsData.filter(artist =>
                    artist.tags.find(tag => Object.values(tag).includes(selTag)));
                if (!artistsByTag.includes(artistWithTag)){
                    artistsByTag.push(artistWithTag);
                }
                artistsByTag = artistsByTag.flat(1);
            }
            this.artistsToDisplay = this.artistsData.filter(artist => artistsByTag.includes(artist));
        }

        else {
            console.log('case 4');
            for (const selTag of this.selectedTags){
                const artistWithTag = this.artistsData.filter(artist =>
                    artist.tags.find(tag => Object.values(tag).includes(selTag)));
                if (!artistsByTag.includes(artistWithTag)){
                    artistsByTag.push(artistWithTag);
                }
                artistsByTag = artistsByTag.flat(1);
            }
            this.artistsToDisplay = this.artistsData.filter(artist =>
                artistsByTag.includes(artist) && this.artistsWithinPriceRange.includes(artist));
        }

        if (this.sortMethod){
            switch (this.sortMethod) {
                case 'priceDescending': this.sortByPriceDescending();
                                        break;
                case 'priceAscending': this.sortByPriceAscending();
                                       break;
            }
        }
    }

    getTags(){
        this.tags = [];
        for (const artist of this.artistsData){
            for (const tag of artist.tags){
                if (!this.tags.includes(tag.name)) {
                    this.tags.push(tag.name);
                }
            }
        }
    }

    sortByPrice(ev){
      switch (ev.detail.value) {
            case 'priceDescending': this.sortByPriceDescending();
                                    break;
            case 'priceAscending': this.sortByPriceAscending();
                                   break;
        }
    }
}
