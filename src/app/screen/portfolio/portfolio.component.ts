import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [ './portfolio.component.scss', '../about/about.component.scss' ]
})
export class PortfolioComponent implements OnInit {

  projectList: Array<{ id: string, title: string, imageSrc: string, desc: string }> = [
    {
      id: '1',
      title: 'Hospital Design',
      imageSrc: '../../../assets/images/project-1.png',
      desc: `A cryptocurrency mobile app which allows users buy and sell bitcoins, Etherum, Coinbase and Gift cards. Users can also recharge their mobile numbers from the app directly.`
    },
    {
      id: '2',
      title: 'Mobile Design',
      imageSrc: '../../../assets/images/project-2.jpg',
      desc: `ITB media agency is a company into corporate communications and business development. The website was designed to increase the company’s conversion rate of customers.`
    },
    {
      id: '3',
      title: 'Shopper Shopping',
      imageSrc: '../../../assets/images/project-3.png',
      desc: `DesignPal is an AR mobile app which assists users to scan their new apartment and suggest various interior decorations and styles suitable for that particular apartment.`
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
