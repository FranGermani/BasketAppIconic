import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

interface Product {
  colorShirtFrontal: string;
  colorShirtDorso: string;
  colorPantsFrontal: string;
  colorPantsDorso: string;
  capa: string;
  capa2: string;
}

interface Header {
  text: string;
  value: keyof Product; // Cambia el tipo a keyof Product
}

@Component({
  selector: 'app-panel-client',
  standalone: true,
  imports: [],
  templateUrl: './panel-client.component.html',
  styleUrls: ['./panel-client.component.css']
})
export class PanelClientComponent implements OnInit {
  headers: Header[] = [
    { text: 'Color Shirt Frontal', value: 'colorShirtFrontal' },
    { text: 'Color Shirt Dorso', value: 'colorShirtDorso' },
    { text: 'Color Pants Frontal', value: 'colorPantsFrontal' },
    { text: 'Color Pants Dorso', value: 'colorPantsDorso' },
    { text: 'Capa', value: 'capa' },
    { text: 'Capa 2', value: 'capa2' }
  ];

  products: Product[] = [
    { colorShirtFrontal: 'Red', colorShirtDorso: 'Blue', colorPantsFrontal: 'Green', colorPantsDorso: 'Yellow', capa: 'Layer1', capa2: 'Layer2' },
    { colorShirtFrontal: 'White', colorShirtDorso: 'Black', colorPantsFrontal: 'Gray', colorPantsDorso: 'Orange', capa: 'Layer3', capa2: 'Layer4' },
    // Otros datos de productos...
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderTable();
  }

  private renderTable(): void {
    const tableBody = this.el.nativeElement.querySelector('#productTable tbody');
    this.products.forEach(product => {
      const row = this.renderer.createElement('tr');
      this.headers.forEach(header => {
        const cell = this.renderer.createElement('td');
        const text = this.renderer.createText(product[header.value]);
        this.renderer.appendChild(cell, text);
        this.renderer.appendChild(row, cell);
      });
      this.renderer.appendChild(tableBody, row);
    });
  }
}
