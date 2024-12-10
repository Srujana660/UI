import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { browser, by, element } from 'protractor';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products12'];
  MenuItems = [];

  constructor(private breakpointObserver: BreakpointObserver, private _apiservice: ApiService) { }
  ngOnInit() {
    this._apiservice.getMenuItems().subscribe(result => {
      this.MenuItems = result;
    });
  }

}
