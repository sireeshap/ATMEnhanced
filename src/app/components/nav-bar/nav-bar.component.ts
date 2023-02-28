import { Component, OnInit } from '@angular/core';
import {MENU_LIST} from '@app/configs'
import { Router,NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  menuList:any=MENU_LIST;
  currentRouteName:any='';
  constructor(private router:Router) { 
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe(event => {
        this.currentRouteName=router.url.split('/')[1];
      });
  }

  ngOnInit(): void {
  }

}
