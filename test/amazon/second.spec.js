const {expect} = require("chai");

describe('', () => {
    before('go to amazom.com', () => {
        browser.url('https://www.amazon.com/')
    })

    it('', () =>{
        expect(browser.getTitle()).eq("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more")
    })

    it("", () =>{
        browser.$(`//a[text() = "Today's Deals"]`).click()
        browser.pause(3000)
    })
    it("", () =>{
        const price1 = browser.$('//div[@id="101_dealView_4"]//span[@class="a-size-medium inlineBlock unitLineHeight dealPriceText"]').getText();
        browser.$("//div[@id='101_dealView_4']//button").click();
        browser.pause(500)
        const price2 = browser.$('//div[@id="101_dealView_5"]//span[@class="a-size-medium inlineBlock unitLineHeight dealPriceText"]').getText();
        browser.$("//div[@id='101_dealView_5']//button").click();
        browser.pause(500)
        browser.$('//span[@id="nav-cart-count"]').click();
        browser.pause(2000);

        price = [price2, price1]

        shoppingPrices = browser.$$(`//span[@class="a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold"]`);
        for(i = 0; i < shoppingPrices.length; i++){
            shopPrice = shoppingPrices[i].getText();
            console.log(price[i], shopPrice + "===============================================================================================================================================")
            expect(price[i]).eq(shopPrice)
        }
    })
})