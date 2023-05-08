import { Injectable, NotFoundException } from '@nestjs/common';


import { Product } from './products.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { title } from 'process';

@Injectable()
export class ProductsService {
    private products: Product[] = []; 

     constructor (@InjectModel('Product') private readonly productModel: Model<Product>) {}

    async  insertProduct (title: string, desc: string, price: number) {
        const newProduct = new this.productModel({
            title: title, 
            description: desc, 
            price: price,
        });
        const result = await newProduct.save(); 
        console.log(result);
        return result.id as string; 
    }

        async getProducts() {
            const products = await this.productModel.find().exec(); 
            return products.map((prod) => ({
                id: prod.id, 
                title: prod.title, 
                description: prod.description, 
                price: prod.price 
            }));

        }

        getSingleProduct(productId: string) {
            const product = this.findProduct(productId)[0]; 
             return {...product }; 
        }

        updateProduct(productId: string, title: string, desc: string, price: number) {
            const [product, index] = this.findProduct(productId); 
            const updatedProduct = {...product};
            if (title){
                updatedProduct.title = title; 
            }
            if (desc){
                updatedProduct.description = desc; 
            } 
            if (price){
                updatedProduct.price = price; 
            }

            this.products[index] = updatedProduct; 
            

        }

        deleteProduct(prodId: string) { 
            const index = this.findProduct(prodId)[1];
            this.products.splice(index, 1);   

        }
    
    
        private findProduct(id: string): Product {
            const product = this.productModel.findOne(); 
             if (!product){
                throw new NotFoundException('Could not find product.'); 
             } 
             return [product, productIndex]; 
        }

        
}