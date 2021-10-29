const products = [
  {productId:1, productName: 'Товар 1', categoryId:1},
  {productId:2, productName: 'Товар 2', categoryId:2},
  {productId:3, productName: 'Товар 3', categoryId:3},
  {productId:4, productName: 'Товар 4', categoryId:4},
  {productId:5, productName: 'Товар 5', categoryId:5},
  {productId:6, productName: 'Товар 6', categoryId:1},
  {productId:7, productName: 'Товар 7', categoryId:2},
  {productId:8, productName: 'Товар 8', categoryId:3},
  {productId:9, productName: 'Товар 9', categoryId:4},
  {productId:10, productName: 'Товар 10', categoryId:5},
  {productId:11, productName: 'Товар 11', categoryId:1},
  {productId:12, productName: 'Товар 12', categoryId:2},
  {productId:13, productName: 'Товар 13', categoryId:3},
  {productId:14, productName: 'Товар 14', categoryId:4},
  {productId:15, productName: 'Товар 15', categoryId:5},
  {productId:16, productName: 'Товар 16', categoryId:1},
  {productId:17, productName: 'Товар 17', categoryId:2},
  {productId:18, productName: 'Товар 18', categoryId:3},
  {productId:19, productName: 'Товар 19', categoryId:4},
  {productId:20, productName: 'Товар 20', categoryId:5},
  {productId:21, productName: 'Товар 21', categoryId:1},
  {productId:22, productName: 'Товар 22', categoryId:2},
  {productId:23, productName: 'Товар 23', categoryId:3},
  {productId:24, productName: 'Товар 24', categoryId:4},
  {productId:25, productName: 'Товар 25', categoryId:5}
];
const categories = [
  {categoryId:1, categoryName: 'Футболки'},
  {categoryId:2, categoryName: 'Майки'},
  {categoryId:3, categoryName: 'Носки'},
  {categoryId:4, categoryName: 'Джинсы'},
  {categoryId:5, categoryName: 'Брюки'},
];

const container = document.createElement('div');
const tabs = document.createElement('div');
const tabsContent = document.createElement('div');

tabs.classList.add('tabs');
container.classList.add('container')
tabsContent.classList.add('tabs__content');

function renderTabs() {
    const tabsNav = document.createElement('ul');
    tabsNav.classList.add('tabs__nav');
    
    categories.forEach(element => {
        const tabsItem = document.createElement('li');
        tabsItem.classList.add('tabs__item');
        tabsItem.id = element.categoryId;
        tabsItem.textContent = element.categoryName;
        tabsNav.append(tabsItem);
    });

    tabs.append(tabsNav);
    tabs.append(tabsContent);
    container.append(tabs);
    document.body.append(container);
}

function renderContent(id) {
    const tabs = document.querySelectorAll('.tabs__item');
    tabs.forEach(tab => {
        if (tab.id != id) {
            tab.classList.remove('is-active');
        }
    });
    tabsContent.textContent = '';
    products.forEach(element => {
        if (element.categoryId == id) {
            const card = document.createElement('div');
            const img = document.createElement('img');
            const title = document.createElement('p');

            card.classList.add('card');
            img.classList.add('img');
            title.classList.add('title');

            img.src = 'http://rrstatic.retailrocket.net/test_task/tovar.jpg';
            title.textContent = element.productName;

            card.append(img);
            card.append(title);
            tabsContent.append(card);
        }
    });
}

renderTabs();

const tabsItems = document.querySelectorAll('.tabs__item');
tabsItems.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('is-active');
        renderContent(element.id);
    })
});
