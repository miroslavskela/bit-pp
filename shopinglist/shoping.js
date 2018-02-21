"use strict";

(function () {
    function Product(name, price, expdate) {
        this.id = Math.round(89999 * Math.random() + 10000);
        this.name = name;
        this.price = price;
        this.expdate = expdate;
        this.productcode = function () {
            var firstletter = this.name.charAt(0);
            var lastletter = this.name.charAt(name.length - 1);
            return firstletter.toUpperCase() + lastletter.toUpperCase() + this.id;
        }
        this.getInfo = function () {
            return this.productcode() + ", " + this.name + ", " + this.price + this.expdate;
        }
    }


    function ShoppingBag() {
        this.listOfProducts = [];
        this.addProduct = function (product) {
            var date = new Date();
            if (Date.parse(product.expdate) > Date.parse(date)) {
                this.listOfProducts.push(product);
            }

        }
        this.averagePrice = function () {
            var totalprice = 0;
            var average = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                totalprice += this.listOfProducts[i].price;
            }
            average = (totalprice / this.listOfProducts.length);
            return average.toFixed(2);
        }
        this.calculateTotalPrice = function () {
            var totalprice = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                totalprice += this.listOfProducts[i].price;
            }
            return totalprice.toFixed(2);
        }
        this.getMostExpensive = function () {
            var output = [];
            var mostExpensiveItem;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                output.push(this.listOfProducts[i].price);
            }
            output.sort(function (a, b) {
                return b - a;
            })
            mostExpensiveItem = output[0];
            return mostExpensiveItem;
        }
    }

    function PaymentCard() {
        this.accBalance = Math.round(899 * Math.random() + 100);
        



    }
    function checkoutAndBuy(shopinngBag,paymentCard) {
        var missing = 0;
        if( sb.calculateTotalPrice() <= cards1.accBalance){
            return "The purchase is successful!!";
        }   else {
            missing = sb.totalprice-cards1.accBalance;

            return   "You need " + missing + " dinars more on your account :-((((";
        }  
    }


    var apple = new Product("Apple", 55.11, "March 21,2018")

    var banana = new Product("Banana", 129.35, "June 23,2018");

    var sb = new ShoppingBag();
    sb.addProduct(banana);
    sb.addProduct(apple);
    var cards1 = new PaymentCard();
    console.log(cards1.accBalance)
    console.log(checkoutAndBuy(sb, cards1));
    console.log(sb.getMostExpensive());
    console.log(sb.averagePrice());
    console.log(sb.calculateTotalPrice());


    console.log(banana.getInfo());
    console.log(apple.getInfo());
    console.log(sb.listOfProducts);


})();