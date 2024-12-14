import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories = [
    'Cookware items',
    'Kitchen utensils',
    'House hold items',
    'Coconut Products',
    'Kerala Snacks',
    'Bamboo Products',
    'Honey based products',
    'Packed food products',
    'Organic Products',
  ];
  selectedCategory = 'Cookware items'; // Default selected category

  products = [
    { name: 'Slipper', description: '2L Pure Coconut Oil', category: 'Bamboo Products', image: '../assets/slipper.jpg' },
    { name: 'Tooth brush', description: '2L Pure Coconut Oil', category: 'Bamboo Products', image: '../assets/Bamboo_toothbrush.jpg' },
    { name: 'Cosmetic jar', description: '2L Pure Coconut Oil', category: 'Bamboo Products', image: '../assets/cosmetic_jar.jpg' },
    { name: 'Murukku/Chkali', description: '2L Premium Coconut Oil', category: 'Kerala Snacks', image: '../assets/muruku.jpg' },
    { name: 'Banana Chips', description: '2L Premium Coconut Oil', category: 'Kerala Snacks', image: '../assets/banana_chips.jpg' },
    { name: 'Tapioca Chips', description: '2L Premium Coconut Oil', category: 'Kerala Snacks', image: '../assets/tapioca_chips.jpg' },
    { name: 'Coconut Oil', description: '2L Premium Coconut Oil', category: 'Coconut Products', image: '../assets/coconut_oil.jpg' },
    { name: 'Coconut shampoo', description: '2L Premium Coconut Oil', category: 'Coconut Products', image: '../assets/coconut_shampoo.jpg' },
    { name: 'Coconut milk', description: '2L Premium Coconut Oil', category: 'Coconut Products', image: '../assets/coconut_milk.jpg' },
    { name: 'Chapati roller', description: '2L Premium Coconut Oil', category: 'Kitchen utensils', image: '../assets/Chapati_roller.jpg' },
    { name: 'Chopper', description: '2L Premium Coconut Oil', category: 'Kitchen utensils', image: '../assets/chopper.jpg' },
    { name: 'Peeler', description: '2L Premium Coconut Oil', category: 'Kitchen utensils', image: '../assets/Peeler.jpg' },
    { name: 'Paper bag', description: '2L Premium Coconut Oil', category: 'House hold items', image: '../assets/paper_bag.jpg' },
    { name: 'Floor mat', description: '2L Premium Coconut Oil', category: 'House hold items', image: '../assets/floor_mat.jpg' },
    { name: 'Plastic bucket', description: '2L Premium Coconut Oil', category: 'House hold items', image: '../assets/plastic_bucket.jpg' },
    { name: 'Honey', description: '2L Premium Coconut Oil', category: 'Honey based products', image: '../assets/honey.jpg' },
    { name: 'Body lotion', description: '2L Premium Coconut Oil', category: 'Honey based products', image: '../assets/body_lotion.jpg' },
    { name: 'Honey jar', description: '2L Premium Coconut Oil', category: 'Honey based products', image: '../assets/honey_jar.jpg' },
    { name: 'Dry Sardine', description: '2L Premium Coconut Oil', category: 'Packed food products', image: '../assets/dry_sardine.jpg' },
    { name: 'Salmon', description: '2L Premium Coconut Oil', category: 'Packed food products', image: '../assets/salmon.jpg' },
    { name: 'Chicken', description: '2L Premium Coconut Oil', category: 'Packed food products', image: '../assets/chicken.jpg' },
    { name: 'Cooker', description: '5kg Premium Basmati Rice', category: 'Cookware items', image: '../assets/cooker.jpg' },
    { name: 'Pan', description: '5kg Premium Basmati Rice', category: 'Cookware items', image: '../assets/pan.jpg' },
    { name: 'Idli Cooker', description: '5kg Premium Basmati Rice', category: 'Cookware items', image: '../assets/idli_cooker.jpg' },
    { name: 'Avacado', description: '5kg Premium Basmati Rice', category: 'Organic Products', image: '../assets/avacado.jpg' },
    { name: 'Grren Chilli', description: '5kg Premium Basmati Rice', category: 'Organic Products', image: '../assets/green_chilli.jpg' },
    { name: 'Spinach', description: '5kg Premium Basmati Rice', category: 'Organic Products', image: '../assets/spinach.jpg' },
    // Add more products here
  ];



  filteredProducts = this.products.filter((product) => product.category === this.selectedCategory);

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter((product) => product.category === category);
  }
}
