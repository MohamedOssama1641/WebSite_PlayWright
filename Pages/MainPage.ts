import { Page ,expect } from "@playwright/test";

export default class Main{
    private page : Page;

    constructor(page : Page){
        this.page = page;
    }

    private get item1_Add(){
        return this.page.locator('#add-to-cart-sauce-labs-backpack');
    }

    private get item2_Add(){
        return this.page.locator('#add-to-cart-sauce-labs-bike-light');
    }

    private get Item_Remove(){
        return this.page.locator('#remove-sauce-labs-backpack');
    }

    private get Number(){
        return this.page.locator('.shopping_cart_badge');
    }

    async verifyLogin(): Promise<void> {
        await expect(this.item1_Add).toHaveText('Add to cart');
    }

    async AddItems(): Promise<void> {
        await this.item1_Add.click();
        await this.item2_Add.click();
        await expect(this.Number).toHaveText('2');
    }

    async RemoveItems(): Promise<void> {
        await this.Item_Remove.click();
        await expect(this.Number).toHaveText('1');
    }
}