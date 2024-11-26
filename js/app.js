/*
    Morgan's JS
*/

// let order = localStorage.getItem("pizza_order_webdesignproject") === null ? [] : JSON.parse(localStorage.getItem("pizza_order_webdesignproject"));

function getOrder() {
    return localStorage.getItem("pizza_order_webdesignproject") === null ? [] : JSON.parse(localStorage.getItem("pizza_order_webdesignproject"));
}

let order = getOrder();

function addToOrder(obj) {
    order.push(obj);
    localStorage.setItem("pizza_order_webdesignproject", JSON.stringify(order));
}

function replaceOrder(order) {
    localStorage.setItem("pizza_order_webdesignproject", JSON.stringify(order));
}

function removeFromOrder(obj) {
    order.filter((e) => e.name !== obj.name);
    localStorage.setItem("pizza_order_webdesignproject", JSON.stringify(order));
}

//sure why would we let the user empty the basket, we want them to buy!
function clearOrder() {
    localStorage.removeItem("pizza_order_webdesignproject");
}

function changeQuantity(quantity, name){
    $("#" + name + "RowId").addClass("flash");
    const order = getOrder();
    const product = order.filter((e) => e.name === name);
    if(product.length > 0){
        product[0].amount = quantity;
        replaceOrder(order.map((e) => e.name === product[0].name ? product[0] : e));
    }
    setTimeout(function(){
        $("#" + name + "RowId").removeClass("flash")
    }, 1000);
}

function removeItem(name){
    const order = getOrder();
    replaceOrder(order.filter((e) => e.name !== name));
    doOrderModal();
}

// console.log("order", order);

// clearOrder();


$('#orderModal').on("shown.bs.modal", function () {
    doOrderModal();
});


function doOrderModal(){
    const order = getOrder();
    if(order.length === 0) {
        return $('#orderModalBody').html("<p>You haven't added anything to your order yet</p>");
    }

    let body = "";
    for (const item of order) {
        body += `
            <div class="row" id="${item.name}RowId">
                <div class="col-md-5 align-self-center">
                    <h5 id="order_name">${item.name}</h5>
                    <p id="order_size" class="orderSize">${item.type === "pizza" ? item.size : ""}</p>
                    <p>€<span id="order_price">${item.price}</span></p>
                </div>
                <div class="col-md-2 align-self-center">
                    <p>Quantity</p>
                    <input type="number" min=1 id="orderQuantity" value=${item.amount} onchange="changeQuantity($(this).val(), '${item.name}')">
                    <p style="margin-top: 5px;"></p>
                </div>
                <div class="col-md-3 align-self-center">
                    <img src=${item.img} alt="${item.name} pizza" class="orderImage" id="order_image"/>
                </div>
                <div class="col-md-2 align-self-center">
                    <button class="btn" onclick="removeItem('${item.name}')"><i class="fa fa-trash"></i></button>
                </div>
            </div>
        `;
    }
    $('#orderModalBody').html(body);
}




/*
    Gavin's JS
*/


/*
    Xu's JS
*/