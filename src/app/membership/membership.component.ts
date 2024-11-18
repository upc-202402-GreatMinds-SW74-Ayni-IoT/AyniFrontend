import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css'],
})
export class MembershipComponent {
  constructor(private router: Router) {}

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}
