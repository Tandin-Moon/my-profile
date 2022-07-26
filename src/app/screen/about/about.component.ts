import { Component, OnInit } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutMeValue: any;

  constructor() { }

  ngOnInit(): void {
    this.callAPI();
  }

  async callAPI () {
    const ref = collection(db, 'test');
    const response = await getDocs(ref);
    this.aboutMeValue = response.docs.map((item: any, index) => item.data())
    console.log(this.aboutMeValue)
  }

}
