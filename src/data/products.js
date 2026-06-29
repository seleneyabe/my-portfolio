// src/data/products.js
export const dessertsData = [
    { id: 1, name: "焦糖舒芙蕾鬆餅", subName: "Caramel Soufflé Pancake", price: 180, image: "./images/甜點01.png", desc: "厚實鬆餅淋上焦糖醬，搭配奶油與香蕉片，香甜柔軟。" },

    { id: 2, name: "經典提拉米蘇", subName: "Classic Tiramisu", price: 220, image: "./images/甜點02.png", desc: "濃郁馬斯卡彭起司融合咖啡香，口感綿密細緻、層次豐富。" },

    { id: 3, name: "熔岩巧克力蛋糕", subName: "Molten Chocolate Cake", price: 200, image: "./images/甜點03.png", desc: "溫熱巧克力熔岩蛋糕，搭配香草冰淇淋，濃郁滑順。" },

    { id: 4, name: "宇治抹茶千層", subName: "Matcha Mille Crêpes", price: 130, image: "./images/甜點04.png", desc: "層層餅皮堆疊濃郁抹茶鮮奶油，入口細膩且茶香回甘。" },

    { id: 5, name: "藍莓乳酪蛋糕", subName: "Blueberry Cheesecake", price: 190, image: "./images/甜點05.png", desc: "香濃乳酪結合新鮮藍莓果醬，酸甜平衡、口感綿密。" },

    { id: 6, name: "繽紛法式馬卡龍", subName: "French Macarons", price: 110, image: "./images/甜點06.png", desc: "酥脆外殼包覆柔滑內餡，每一口都充滿細緻甜香。" },

    { id: 7, name: "草莓鮮奶油蛋糕", subName: "Strawberry Shortcake", price: 140, image: "./images/甜點07.png", desc: "柔軟戚風蛋糕搭配鮮奶油與新鮮草莓，清爽不膩。" },

    { id: 8, name: "芒果生乳酪蛋糕", subName: "Mango Cheesecake", price: 180, image: "./images/甜點08.png", desc: "滑順生乳酪搭配香甜芒果，散發濃郁果香與奶香。" },

    { id: 9, name: "草莓塔", subName: "Strawberry Tart", price: 240, image: "./images/甜點09.png", desc: "酥脆塔皮鋪滿卡士達與新鮮草莓，酸甜滋味恰到好處。" },

    { id: 10, name: "楓糖冰淇淋鬆餅", subName: "Maple Waffle", price: 210, image: "./images/甜點10.png", desc: "現烤鬆餅搭配香草冰淇淋，淋上楓糖醬，香氣濃郁。" },];

export const beveragesData = [
    { id: 101, name: "燕麥雲朵拿鐵", subName: "Oat Milk Latte", price: 160, image: "./images/飲品01.png", desc: "精選中焙義式咖啡，融合燕麥奶，口感滑順並散發淡雅堅果香。" },

    { id: 102, name: "莓果氣泡美式", subName: "Strawberry Espresso Fizz", price: 170, image: "./images/飲品02.png", desc: "草莓果香結合濃縮咖啡與氣泡飲，酸甜清爽，層次豐富。" },

    { id: 103, name: "可可聖代冰淇淋", subName: "Chocolate Sundae", price: 220, image: "./images/飲品03.png", desc: "香濃巧克力搭配雙重冰淇淋，撒上堅果碎，口感濃郁滑順。" },

    { id: 104, name: "焦糖雲朵拿鐵", subName: "Caramel Latte", price: 180, image: "./images/飲品04.png", desc: "濃縮咖啡融合綿密奶泡，佐以焦糖香氣，香甜而不膩。" },

    { id: 105, name: "芒果柑橘冰茶", subName: "Mango Citrus Tea", price: 170, image: "./images/飲品05.png", desc: "芒果果香融合柑橘與茶香，入口清甜，帶來夏日清爽風味。" },

    { id: 106, name: "海鹽焦糖奶霜", subName: "Salted Caramel Cream", price: 150, image: "./images/飲品06.png", desc: "綿密奶霜搭配海鹽焦糖醬，口感細緻，尾韻散發濃郁奶香。" },];

// 導出全品項供預訂與收藏頁使用
export const allProducts = [...dessertsData, ...beveragesData];