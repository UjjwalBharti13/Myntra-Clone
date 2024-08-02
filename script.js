let bagItems = [];
onLoad();

function onLoad() {
    // Load bag items from localStorage
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    // Add item to the bag
    if (!bagItems.includes(itemId)) {
        bagItems.push(itemId);
        localStorage.setItem('bagItems', JSON.stringify(bagItems));
        displayBagIcon();
    }
}

function displayBagIcon() {
    // Update bag item count
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerHTML = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items_container');
    if (!itemsContainerElement) {
        return;
    }

    // Item data
    const items = [
        {  
            id: `001`,
            item_image: 'img 3/1.jpg',
            rating: {
                stars: 4.5,
                noOfReviews: 1400,
            },
            company_name: 'Carlton London', 
            item_name: 'Rhodium-Plated CZ Floral Studs',
            current_price: 606,
            Original_price: 1045,
            Discount_price: 42,
            return_period: 14,
            delivery_date: '10 Jul 2024',
        },
        {  
            id: `002`,
            item_image: 'img 3/2.jpg',
            rating: {
                stars: 4.3,
                noOfReviews: 24,
            },
            company_name: 'CUKOO', 
            item_name: 'Women Padded Halter Neck Swimming Dress',
            current_price: 1507,
            Original_price: 2599,
            Discount_price: 42,
            return_period: 14,
            delivery_date: '10 Jul 2024',
        },
        {  
            id: `003`,
            item_image: 'img 3/3.jpg',
            rating: {
                stars: 4.7,
                noOfReviews: 330,
            },
            company_name: 'H&M', 
            item_name: 'Men’s Casual Shirt',
            current_price: 899,
            Original_price: 1499,
            Discount_price: 40,
            return_period: 30,
            delivery_date: '12 Jul 2024',
        },
        {  
            id: `004`,
            item_image: 'img 3/4.jpg',
            rating: {
                stars: 4.2,
                noOfReviews: 75,
            },
            company_name: 'Levis', 
            item_name: 'Women’s Denim Jacket',
            current_price: 1800,
            Original_price: 2999,
            Discount_price: 40,
            return_period: 15,
            delivery_date: '11 Jul 2024',
        },
        {  
            id: `005`,
            item_image: 'img 3/5.jpg',
            rating: {
                stars: 4.6,
                noOfReviews: 250,
            },
            company_name: 'Nike', 
            item_name: 'Running Shoes',
            current_price: 2999,
            Original_price: 3999,
            Discount_price: 25,
            return_period: 20,
            delivery_date: '09 Jul 2024',
        },
        {  
            id: `006`,
            item_image: 'img 3/6.jpg',
            rating: {
                stars: 4.1,
                noOfReviews: 180,
            },
            company_name: 'Adidas', 
            item_name: 'Sports Watch',
            current_price: 4999,
            Original_price: 6999,
            Discount_price: 30,
            return_period: 30,
            delivery_date: '13 Jul 2024',
        },
        {  
            id: `007`,
            item_image: 'img 3/7.jpg',
            rating: {
                stars: 4.8,
                noOfReviews: 420,
            },
            company_name: 'Ray-Ban', 
            item_name: 'Sunglasses',
            current_price: 3500,
            Original_price: 4500,
            Discount_price: 22,
            return_period: 10,
            delivery_date: '15 Jul 2024',
        },
        {  
            id: `008`,
            item_image: 'img 3/8.jpg',
            rating: {
                stars: 4.4,
                noOfReviews: 90,
            },
            company_name: 'Puma', 
            item_name: 'Gym Bag',
            current_price: 1200,
            Original_price: 1500,
            Discount_price: 20,
            return_period: 7,
            delivery_date: '08 Jul 2024',
        }
    ];

    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `
        <div class="item_container">
            <img class="item_image" src="${item.item_image}" alt="item image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.noOfReviews} reviews
            </div>
            <div class="company_name">${item.company_name}</div>
            <div class="item_name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="Original-price">Rs ${item.Original_price}</span>
                <span class="discount">${item.Discount_price}% OFF</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>
        `; 
    });

    itemsContainerElement.innerHTML = innerHTML;
}
