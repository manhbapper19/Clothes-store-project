let Render_array = JSON.parse(localStorage.getItem("cartItems"));
console.log(Render_array);
const produc_row = document.querySelector("tbody");
const Money_display = document.getElementById("money");

function render(){
    let pay_check=0
    Render_array.forEach((e, index) => {
    pay_check = PayMoneySum();
        produc_row.innerHTML += productDetailRender(index);
      });
    Money_display.innerHTML = pay_check;
}
render();
function PayMoneySum() {
  let sum = 0;
  Render_array.forEach((e) => {
    let SumablePrice = parseInt(e.price.replace(/\D/g, ""));
    sum += e.Count * SumablePrice;
  });
  return sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") + "VNĐ";
}
function saveDataToLocalStorage() {
   console.log(123);
    localStorage.setItem("cartItems", JSON.stringify(Render_array));
  }
function productDetailRender(index) {
  return `
        <tr>
            <td style="display: flex;align-items: center;"><img style="width: 70px;" src="assets/img/cool/p (${Render_array[index].id}).jpg"></td>
            <td>
                <p><span>${Render_array[index].price}</span><sup>đ</sup></p>
            </td>
            <td><input style="width: 60px;outline: none;" type="number" value="${Render_array[index].Count}" min="1"></td>
            <td ><button style="cursor: pointer; border:none;padding:10px 20%;border-radius:6px">Xoá</button</td>
        </tr>`;
} 
const input = document.querySelectorAll("td input");
const del_product = document.querySelectorAll("td button");
del_product.forEach((e,index)=>{
    e.addEventListener('click',()=>{
        Render_array.splice(index,1);
        saveDataToLocalStorage();
        window.location.reload();
        produc_row.innerHTML="";
        render();
    })
})
window.addEventListener('storage', function(event) {
  if (event.key === 'cartItems') {
      Render_array = JSON.parse(localStorage.getItem("cartItems"));
      produc_row.innerHTML="";
      render();
  }
})
input.forEach((e, index) => {
    e.addEventListener('input', (event) => {
        console.log(event);
      const inputValue = event.target.value;
      console.log(inputValue);
      Render_array[index].Count = inputValue;
      saveDataToLocalStorage();
      window.location.reload();
    });
  });
console.log(input)