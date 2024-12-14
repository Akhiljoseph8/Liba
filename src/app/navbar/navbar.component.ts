import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isNavbarOpen = false;
  isScrolled = false;
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    const navbarLinks = document.querySelector('.navbar-links') as HTMLElement;
    if (this.isNavbarOpen) {
      navbarLinks.classList.add('navbar-responsive');
    } else {
      navbarLinks.classList.remove('navbar-responsive');
    }
  }



  // HostListener listens to the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Update the `isScrolled` flag using `scrollY`
    this.isScrolled = window.scrollY > 40; // Adjust threshold if needed
  }
  

}
