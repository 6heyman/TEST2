// 初始化购物车为空数组
let cart = [];

// 添加商品到购物车的函数
function addToCart(name, price) {
  // 把商品加入购物车数组中
  cart.push({ name, price });

  // 更新购物车界面
  updateCart();
}

// 更新购物车界面内容
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  // 清空现有显示项
  cartItems.innerHTML = "";

  // 总价初始化为0
  let total = 0;

  // 遍历购物车每项，渲染到页面
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ¥${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  // 显示总价
  totalDisplay.textContent = `总价：¥${total}`;
}
