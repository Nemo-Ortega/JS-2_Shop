
const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
    {title: 'Black shoes', price: 100},
    {title: 'Red Shirt', price: 190},
    {title: 'Socks with a hole', price: 70},
    {title: 'Blue Jacket', price: 500},
    {title: 'Big Shoes', price: 450},
    {title: 'Black shoes again', price: 100},
    {title: 'Jacket for you', price: 300},
    {title: 'Small shoes', price: 10},
    {title: 'Big-big shirt', price: 100},
    {title: 'Mens tee-shirt', price: 20},
    {title: 'One more black shoes', price: 100},
];

const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><div class="img-goods-item"><p>Здесь будет картинка</p></div><h3> ${title} </h3><p><b>Цена:</b> ${price} руб. </p><button class="button-goods-item">Купить</button> </div>`;
    };

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document .querySelector( '.goods-list' ).innerHTML = goodsList;
}
renderGoodsList(goods);