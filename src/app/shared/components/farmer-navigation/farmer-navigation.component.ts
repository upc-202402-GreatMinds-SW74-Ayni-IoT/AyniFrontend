import {Component, HostListener, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatMenu} from "@angular/material/menu";
import {Store} from "@ngrx/store";
import {TokenStorageService} from "../../../authentication/services/token-storage.service";

@Component({
  selector: 'app-farmer-navigation',
  templateUrl: './farmer-navigation.component.html',
  styleUrls: ['./farmer-navigation.component.css']
})
export class FarmerNavigationComponent {
  user = this.tokenStorage.getUser();
  isLargeScreen = window.innerWidth >= 768;
  rol:string = "";

  // Angular Routing Navigation
  routesFarmer: {label:string , to: string}[] = [
    {label: "Home", to: "/farmer-home"},
    {label: "Products", to: "/products"},
    {label: "Financial management", to: "/finance"},
    {label: "Orders", to: "/orders"},
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }
  constructor(private router: Router,
              private tokenStorage: TokenStorageService) {}
  onLogOut() {
    console.log("LogOUT");
    this.tokenStorage.signOut();
    this.router.navigate(["signin"]);
  }
}
