import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user: any = null;

  constructor(public authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
    this.authService.authSubject.subscribe(
      (auth) => {
        console.log('auth state', auth);
        if (auth && auth.user) {
          this.user = auth.user;
        } else {
          this.user = null;
        }
      }
    );
  }
  

  handleLogOut() {
    this.authService.logout();
    // this.router.navigate(['/auth']);
  }

}
