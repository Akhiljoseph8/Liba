import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories = [
    'Oils',
    'Pickles',
    'Seafoods',
    'Appliances',
    'Vegitables',
    'Fruites',
  ];
  selectedCategory = 'Oils'; // Default selected category

  products = [
    { name: 'Coconut Oil - Brand A', description: '2L Pure Coconut Oil', category: 'Oils', image: '../assets/oil.jpg' },
    { name: 'Coconut Oil - Brand B', description: '2L Premium Coconut Oil', category: 'Oils', image: '../assets/oil.jpg' },
    { name: 'Coconut Oil - Brand C', description: '2L Premium Coconut Oil', category: 'Oils', image: '../assets/oil.jpg' },
    { name: 'Coconut Oil - Brand C', description: '2L Premium Coconut Oil', category: 'Oils', image: '../assets/oil.jpg' },
    { name: 'Lemon Pickle - Brand A', description: '2L Premium Coconut Oil', category: 'Pickles', image: '../assets/pickle.jpg' },
    { name: 'Mango Pickle - Brand A', description: '2L Premium Coconut Oil', category: 'Pickles', image: '../assets/Mango_pickle.jpg' },
    { name: 'Cooker', description: '5kg Premium Basmati Rice', category: 'Appliances', image: '../assets/cooker.jpg' },
    { name: 'Pan', description: '5kg Premium Basmati Rice', category: 'Appliances', image: '../assets/pan.jpg' },
    { name: 'Avacado', description: '5kg Premium Basmati Rice', category: 'Fruites', image: '../assets/avacado.jpg' },
    { name: 'Guava', description: '5kg Premium Basmati Rice', category: 'Fruites', image: '../assets/guava.jpg' },
    { name: 'Grren Chilli', description: '5kg Premium Basmati Rice', category: 'Vegitables', image: '../assets/green_chilli.jpg' },
    { name: 'Spinach', description: '5kg Premium Basmati Rice', category: 'Vegitables', image: '../assets/spinach.jpg' },
    { name: 'Broccoli', description: '5kg Premium Basmati Rice', category: 'Vegitables', image: '../assets/broccoli.jpg' },
    { name: 'Salmon', description: '5kg Premium Basmati Rice', category: 'Seafoods', image: '../assets/salmon.jpg' },
    // Add more products here
  ];


  filteredProducts = this.products.filter((product) => product.category === this.selectedCategory);

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter((product) => product.category === category);
  }
}
