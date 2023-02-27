import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Oatmeal Bowl',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['qsia', 'europe'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Healthy', 'Breakfast', 'Fruit', 'Sweet', 'Vegan'],
      },
      {
        id: 2,
        name: 'Hummus dip',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['egypt', 'middle east'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Dip', 'Healty', 'Side Dish', 'Vegan'],
      },
      {
        id: 3,
        name: 'Steak',
        price: 35,
        cookTime: '20-30',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['Dinner', 'Meat'],
      },
      {
        id: 4,
        name: 'Pasta',
        price: 20,
        cookTime: '25-35',
        favorite: true,
        origins: ['italy'],
        stars: 4.9,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['Lunch'],
      },
      {
        id: 5,
        name: 'Udon noodles',
        price: 16,
        cookTime: '40-50',
        favorite: false,
        origins: ['japan'],
        stars: 4.2,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Slow Food', 'Soup', 'Vegetables', 'Meat'],
      },
      {
        id: 6,
        name: 'Pancakes',
        price: 9,
        cookTime: '15-25',
        favorite: false,
        origins: ['america'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Sweet'],
      },

    ]
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAllFoodsBySearchTerm(term: string): Food[] {
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(term.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: "All", count: 6 },
      { name: "Healthy", count: 2 },
      { name: "Breakfast", count: 1 },
      { name: "Fruit", count: 1 },
      { name: "Sweet", count: 1 },
      { name: "Vegan", count: 2 },
      { name: "Dip", count: 1 },
      { name: "Side Dish", count: 1 },
      { name: "Dinner", count: 1 },
      { name: "Meat", count: 2 },
      { name: "Lunch", count: 1 },
      { name: "Slow Food", count: 1 },
      { name: "Soup", count: 1 },
      { name: "Vegetables", count: 1 }
    ]
  }

  getFoodById(id: number) : Food {
    return this.getAll().find(food => food.id == id)!;
  }

}
