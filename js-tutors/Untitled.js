/**
 * Обучаам баристу инвентаризации.
 * Делается заказ, бариста проверяет, есть ли в меню такие кофе и печенье, 
 * сверяется с рецептом, смотрит наличие ингредиентов
 * и готовит заказ / извиняется и дозаказывает ингредиенты
 */

const recipes = {
    'банановый латте': ['банановый сироп', 'молоко', 'кофе'],
    'черничный капучино': ['черничный сироп', 'молоко', 'кофе'],
    'баунти раф': ['раф-основа', 'кокосовое молоко', 'розовая соль'],
    'американо': ['кофе']
}

const cookies = ['шоколадное', 'овсяное', 'мятное', 'малиновое']

const box = {
    'банановый сироп': 2,
    'черничный сироп': 0,
    'молоко': 10,
    'кофе': 10,
    'раф-основа': 3,
    'кокосовое молоко': 0,
    'розовая соль': 1
}

function checkOrderItem(zakaz, menu) {
    if (menu.includes(zakaz)) {
        return true;
    } else {
        return false;
    }
}

function checkIngredients(coffee) {
    recipies[coffee].forEach(function (element) {
        if (box[item] == 0) {
            alert("Памятка: Нужно заказать " + box[item]);
            return false;
        } else {
            return true;
        }
    });
}

function order(coffee, cookie) {

    const dictionary = {
        allOk: `Вот ваш заказ: ${coffee} и ${cookie} печенье! Хорошего дня!`,
        allNotOk: `Мы не можем обработать ваш заказ, извините.`,
        noCookie: `К сожалению, у нас нет такого печенья. Вот ваш ${coffee}`,
        noCoffee: `К сожалению, сейчас не можем приготовить ${coffee}. Вот ваше ${cookie} печенье`,
    }

    let okCookie = checkOrderItem(cookie, cookies);
    let okCoffee = checkOrderItem(coffee, recipes);
    if (okCoffee == true) {
        okCoffee = checkIngredients(coffee);
    }
    if (okCoffee == true) {
        switch (okCookie) {
            case true:
                alert(dictionary[allOk]);
            case false:
                alert(dictionary[noCookie]);
        }
    } else {
        switch (okCookie) {
            case true:
                alert(dictionary[noCoffee]);
            case false:
                alert(dictionary[allOk]);
        }
    }
    console.log('-----Следующий заказ-----')
}

order('американо', 'мятное')
order('баунти раф', 'апельсиновое')
order('банановый латте', 'мятное')
order('баунти раф', 'малиновое')

// Ожидаемый вывод //
/*
"Вот ваш заказ: американо и мятное печенье! Хорошего дня!"
"-----Следующий заказ-----"
"--Памятка: Нужно заказать кокосовое молоко"
"Мы не можем обработать ваш заказ, извините."
"-----Следующий заказ-----"
"Вот ваш заказ: банановый латте и мятное печенье! Хорошего дня!"
"-----Следующий заказ-----"
"--Памятка: Нужно заказать кокосовое молоко"
"К сожалению, сейчас не можем приготовить баунти раф. Вот ваше малиновое печенье"
"-----Следующий заказ-----"
*/