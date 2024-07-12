import { Component, OnInit, Renderer2, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent], // Importar el componente Footer y Header
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  @ViewChildren('sec1Input') sec1Inputs!: QueryList<ElementRef>;
  @ViewChildren('controlLabel') controlLabels!: QueryList<ElementRef>;
  bannerTimer: any;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.startBannerSwitcher();
  }

  startBannerSwitcher(): void {
    this.bannerTimer = setInterval(() => this.bannerSwitcher(), 5000);
  }

  bannerSwitcher(): void {
    const inputs = this.sec1Inputs.toArray();
    const checkedInput = inputs.find(input => input.nativeElement.checked);

    if (checkedInput) {
      const checkedIndex = inputs.indexOf(checkedInput);
      const nextIndex = (checkedIndex + 1) % inputs.length;
      this.renderer.setProperty(inputs[nextIndex].nativeElement, 'checked', true);
    } else {
      this.renderer.setProperty(inputs[0].nativeElement, 'checked', true);
    }
  }

  prevSlide(): void {
    const inputs = this.sec1Inputs.toArray();
    const checkedInput = inputs.find(input => input.nativeElement.checked);

    if (checkedInput) {
      const checkedIndex = inputs.indexOf(checkedInput);
      const prevIndex = (checkedIndex - 1 + inputs.length) % inputs.length;
      this.renderer.setProperty(inputs[prevIndex].nativeElement, 'checked', true);
    } else {
      this.renderer.setProperty(inputs[0].nativeElement, 'checked', true);
    }
  }

  nextSlide(): void {
    const inputs = this.sec1Inputs.toArray();
    const checkedInput = inputs.find(input => input.nativeElement.checked);

    if (checkedInput) {
      const checkedIndex = inputs.indexOf(checkedInput);
      const nextIndex = (checkedIndex + 1) % inputs.length;
      this.renderer.setProperty(inputs[nextIndex].nativeElement, 'checked', true);
    } else {
      this.renderer.setProperty(inputs[0].nativeElement, 'checked', true);
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/auth']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}
