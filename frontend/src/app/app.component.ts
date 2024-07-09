import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'CoreUI Angular Admin Template';
  private mobileScreen: MediaQueryList;

  constructor(
    private router: Router,
    private titleService: Title,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.titleService.setTitle(this.title);
    this.mobileScreen = window.matchMedia("(max-width: 990px)");
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });

    this.initDropdownToggle();
    this.initMenuToggle();
  }

  private initDropdownToggle(): void {
    const dropdownToggles = this.el.nativeElement.querySelectorAll('.dashboard-nav-dropdown-toggle') as NodeListOf<HTMLElement>;
    dropdownToggles.forEach((toggle: HTMLElement) => {
      toggle.addEventListener('click', () => {
        const parentDropdown = toggle.closest('.dashboard-nav-dropdown') as HTMLElement;
        if (parentDropdown) {
          parentDropdown.classList.toggle('show');
          const nestedDropdowns = parentDropdown.querySelectorAll('.dashboard-nav-dropdown.show') as NodeListOf<HTMLElement>;
          nestedDropdowns.forEach((nested: HTMLElement) => nested.classList.remove('show'));
        }
        const siblingDropdowns = toggle.parentElement?.querySelectorAll('.dashboard-nav-dropdown.show') as NodeListOf<HTMLElement>;
        if (siblingDropdowns) {
          siblingDropdowns.forEach((sibling: HTMLElement) => sibling.classList.remove('show'));
        }
      });
    });
  }

  private initMenuToggle(): void {
    const menuToggles = this.el.nativeElement.querySelectorAll('.menu-toggle') as NodeListOf<HTMLElement>;
    menuToggles.forEach((toggle: HTMLElement) => {
      toggle.addEventListener('click', () => {
        if (this.mobileScreen.matches) {
          this.toggleClass('.dashboard-nav', 'mobile-show');
        } else {
          this.toggleClass('.dashboard', 'dashboard-compact');
        }
      });
    });
  }

  private toggleClass(selector: string, className: string): void {
    const element = this.el.nativeElement.querySelector(selector) as HTMLElement;
    if (element) {
      element.classList.toggle(className);
    }
  }
}
