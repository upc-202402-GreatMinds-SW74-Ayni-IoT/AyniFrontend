import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";

@Component({
  selector: 'app-merchant-navigation',
  templateUrl: './merchant-navigation.component.html',
  styleUrls: ['./merchant-navigation.component.css']
})
export class MerchantNavigationComponent {
  user = this.tokenStorage.getUser();
  isLargeScreen = window.innerWidth >= 768;

  routesMerchant: {label:string , to: string}[] = [
    {label: "Home", to: "/merchant-home"},
    {label: "Products", to: "/sales"},
    {label: "My shopping", to: "/purchases"},
    {label: "Rate", to: "/rates"},
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }
  constructor(private router: Router,
              private tokenStorage: TokenStorageService) {
  }
  onLogOut() {
    console.log("LogOUT");
    this.tokenStorage.signOut();
    this.router.navigate(["signin"]);
  }

}
