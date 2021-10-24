import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  public route: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.route = this.router.url;
  }
}
