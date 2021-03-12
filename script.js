class GoodsItem {     // Класс для одного товара витрины
    constructor(id, title, price) {
      this.id = id;
      this.title = title;
      this.price = price;
    }
    render() {
        return `<div class="goods-item"><div class="img-goods-item"><p>Здесь будет картинка</p></div><h3> ${this.title} </h3>
        <p><b>Цена:</b> ${this.price} руб. </p>
        <button class="button-goods-item" item-id="${this.id}">Купить</button> </div>`;
    }
  }
  

class GoodsList {     // Класс для списка товаров (для витрины)
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            {id: 1, title: 'Shirt', price: 150},
            {id: 2, title: 'Socks', price: 50},
            {id: 3, title: 'Jacket', price: 350},
            {id: 4, title: 'Shoes', price: 250},
            {id: 5, title: 'Black shoes', price: 100},
            {id: 6, title: 'Red Shirt', price: 190},
            {id: 7, title: 'Socks with a hole', price: 70},
            {id: 8, title: 'Blue Jacket', price: 500},
            {id: 9, title: 'Big Shoes', price: 450},
            {id: 10, title: 'Black shoes again', price: 100},
            {id: 11, title: 'Jacket for you', price: 300},
            {id: 12, title: 'Small shoes', price: 10},
            {id: 13, title: 'Big-big shirt', price: 100},
            {id: 14, title: 'Mens tee-shirt', price: 20},
            {id: 15, title: 'One more black shoes', price: 100},
        ];
    }
    render() {
      let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.id, good.title, good.price);
        listHtml += goodItem.render();
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

class Basket extends GoodsList {   // класс для корзины
    order = [] // содержимое корзины сохраняем в массив 

    constructor() {
        super()
        this.fetchGoods()
      }

    addItem(id) { //Добавить в корзину
       }

    removeItem(id) { //Удалить из корзины
}

    setItemCount(id, count) { //посчитать количество товаров в корзине (может быть выбрано больше одного экземпляра товара)
}

    getSubtotal() {  //Рассчитать стоимость товаров в корзине
        let sum = 0
        for (let orderPosition of this.order) {
            sum = sum + (orderPosition.price * orderPosition.count)
        }
        return sum
    }
}
    
list = new GoodsList();
list.fetchGoods();
list.render();
basket = new Basket()




 