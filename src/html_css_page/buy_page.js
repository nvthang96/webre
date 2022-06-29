class product{
    constructor(tyle,name,prices)
    {
        this.tyle = tyle;
        this.name=name;
        this.prices=prices;
    }

}
const product_el = document.querySelector('.product-title')
var text = product_el.textContent;

class getproduct extends product
{
    constructor()
    {
        super();
    }

}
var product1 = new product(text,'phong','2000');
export var namepro= product1.tyle;
console.log(namepro)