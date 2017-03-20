import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
	 title:any;
	 owner:any;
	 city:any;
	 bedrooms:any;
	 price:any;
	 type:any;
	 image:any;

  constructor(
  		private firebaseService:FirebaseService,
  		private router:Router
	) { }

  ngOnInit() {
  }
  onAddSubmit(){
  		//  for initial testing   console.log(this.title);
  		let listing = {
  			title: this.title,
  			city: this.title,
  			owner: this.owner,
  			bedrooms: this.bedrooms,
  			price: this.price,
  			type: this.type
  		}

  		this.firebaseService.addListing(listing);

  		this.router.navigate(['listings']);
  }

}
