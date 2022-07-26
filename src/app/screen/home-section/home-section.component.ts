import { Component, OnInit } from '@angular/core';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../../firebase';
@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})

export class HomeSectionComponent implements OnInit {
  aboutMeValue: any;

  constructor() { }

  ngOnInit(): void {
    this.callAPI()
  }

  async callAPI () {
    const ref = collection(db, 'test');
    const response = await getDocs(ref);
   this.aboutMeValue = response.docs.map((item: any, index) => item.data())
    console.log(this.aboutMeValue)
  }
}
