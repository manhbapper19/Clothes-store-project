
let Render_array = JSON.parse(localStorage.getItem("cartItems"));
let array = JSON.parse(localStorage.getItem("array"));
console.log(Render_array);
const produc_row = document.querySelector("tbody");
const Money_display = document.getElementById("money");

function render(){
    produc_row.innerHTML = "";
    let pay_check = PayMoneySum();
    Render_array.forEach((e, index) => {
        produc_row.innerHTML += productDetailRender(index);
    });
    Money_display.innerHTML = pay_check;
    addEventListeners();
}

function PayMoneySum() {
    let sum = 0;
    Render_array.forEach((e) => {
        let SumablePrice = parseInt(e.price.replace(/\D/g, ""));
        sum += e.Count * SumablePrice;
    });
    return sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") + "VNĐ";
}

function saveDataToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(Render_array));
    localStorage.setItem("array", JSON.stringify(array));
}

function productDetailRender(index) {
    return `
        <tr data-index="${index}">
            <td style="display: flex;align-items: center;">
                <img style="width: 70px;" src="assets/img/cool/p (${Render_array[index].id}).jpg">
            </td>
            <td>
                <p><span>${Render_array[index].price}</span><sup>đ</sup></p>
            </td>
            <td>
                <input style="width: 60px;outline: none;" type="number" value="${Render_array[index].Count}" min="1">
            </td>
            <td>
                <button style="cursor: pointer; border:none;padding:10px 20%;border-radius:6px">Xoá</button>
            </td>
        </tr>`;
}

function addEventListeners() {
    const inputs = document.querySelectorAll("td input");
    const del_product = document.querySelectorAll("td button");

    inputs.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const inputValue = event.target.value;
            Render_array[index].Count = inputValue;
            saveDataToLocalStorage();
            updateTotal();
        });
    });

    del_product.forEach((button, index) => {
        button.addEventListener('click', () => {
            Render_array.splice(index, 1);
            array.splice(index, 1);
            saveDataToLocalStorage();
            document.querySelector(`tr[data-index="${index}"]`).remove();
            updateTotal();
        });
    });
}

function updateTotal() {
    let pay_check = PayMoneySum();
    Money_display.innerHTML = pay_check;
}

window.addEventListener('storage', function(event) {
    if (event.key === 'cartItems') {
        Render_array = JSON.parse(localStorage.getItem("cartItems"));
        array = JSON.parse(localStorage.getItem("array"));
        produc_row.innerHTML = "";
        render();
    }
});

render();
