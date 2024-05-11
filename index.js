const newly = document.getElementById("new");
const hot = document.getElementById("hot");
const new_pd = document.querySelector("#new-pd");
const hot_pd = document.querySelector("#hot-pd");



newly.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked newly");
  newly.classList.remove("homepage-products_tab-item");
  newly.classList.add("homepage-products_tab-item-active");
  hot.classList.remove("homepage-products_tab-item-active");
  hot.classList.add("homepage-products_tab-item");
  new_pd.style.display = "grid";
  hot_pd.style.display = "none";
});

hot.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked hot");
  hot.classList.remove("homepage-products_tab-item");
  hot.classList.add("homepage-products_tab-item-active");
  newly.classList.remove("homepage-products_tab-item-active");
  newly.classList.add("homepage-products_tab-item");
  hot_pd.style.display = "grid";
  new_pd.style.display = "none";
});

const products = [
    {
        "id": "6",
        "name": "Áo phông nyan~",
        "descibe": "Chiếc áo mèo cute",
        "price":"189.000vnd"
    },
    {
        "id": "7",
        "name": "Áo phông trắnng",
        "descibe": "Chiếc áo uwu",
        "price":"149.000vnd"
    },
    {
        "id": "11",
        "name": "Áo ba lỗ",
        "descibe": "Áo thoáng mát, phù hợp cho những người thích vận động nhưng vẫn có cá tính",
        "price":"199.000vnd"
    },
    {
        "id": "12",
        "name": "Áo thun nam",
        "descibe": "Áo thoáng mát, phù hợp cho những người thích vận động nhưng vẫn có cá tính",
        "price":"199.000vnd"
    },
    {
        "id": "13",
        "name": "Áo phông xanh",
        "descibe": "Áo thoáng mát, với chất liệu vải poly ester cao cấp",
        "price":"299.000vnd"
    },
    {
        "id": "14",
        "name": "Áo polo trắng",
        "descibe": "Áo thoáng mát, phù hợp cho những doanh nhân trẻ",
        "price":"199.000vnd"
    },
    {
        "id": "16",
        "name": "Áo phông trắng",
        "descibe": "Áo thoáng mát, với chất liệu vải poly ester cao cấp",
        "price":"299.000vnd"
    },
    {
        "id": "17",
        "name": "Áo ba lỗ",
        "descibe": "Áo ba lỗ thể thao, thích hợp cho việc vận động mạnh",
        "price":"199.000vnd"
    },
    {
        "id": "18",
        "name": "Áo polo S cafe",
        "descibe": "Áo thoáng mát, với chất liệu vải poly ester cao cấp, không bị nhăn khi giặt",
        "price":"499.000vnd"
    },
    {
        "id": "15",
        "name": "Áo phông S",
        "descibe": "Áo thoáng mát, với chất liệu vải poly ester cao cấp",
        "price":"399.000vnd"
    },
    {
        "id": "34",
        "name": "Áo chay",
        "descibe": "Áo thoáng mát, với chất liệu vải poly ester cao cấp",
        "price":"399.000vnd"
    },
    {
        "id": "65",
        "name": "Áo team whale",
        "descibe": "Áo thoáng mát, phù hợp với những nhà vô địch",
        "price":"399.000vnd"
    },
    {
        "id": "67",
        "name": "Áo ba lỗ",
        "descibe": "Áo thoáng mát, phù hợp với những nhà vô địch",
        "price":"399.000vnd"
    },
    {
        "id": "112",
        "name": "Áo ba lỗ",
        "descibe": "Áo thoáng mát, phù hợp với những nhà vô địch",
        "price":"399.000vnd"
    },
    {
        "id": "113",
        "name": "Áo chạy",
        "descibe": "Áo thoáng mát, phù hợp với những nhà vô địch",
        "price":"399.000vnd"
    },
    {
        "id": "114",
        "name": "Áo phông gôm",
        "descibe": "Áo thoáng mát, phù hợp với những nhà vô địch",
        "price":"599.000vnd"
    },
    {
        "id": "115",
        "name": "Áo ba lỗ sport",
        "descibe": "Áo thoáng mát, phù hợp với những nhà vô địch",
        "price":"599.000vnd"
    },
];
// Xử lý chi tiết sản phẩm 
console.log(products.length)
const show = document.querySelectorAll("main");
console.log(show);
const image_click = document.querySelectorAll(".products-item__img");
console.log(image_click);
image_click.forEach((image) => {
  image.addEventListener("click", function () {
    const value = this.getAttribute("data-value");
    console.log("Clicked image value:", value);
    const index = products.findIndex(product => product.id === value);
    console.log(index);
    if(index!==-1){
    const u = Insertproduct(index);
    show[0].style.display = "none";
    console.log(u);
    show[1].innerHTML = u;
    show[1].style.display = "flex";
    }
  });
});
show[1].addEventListener('click', function(event) {
    if (event.target.matches('.close-btn, .close-btn *')) {
        show[1].innerHTML = ''; 
        show[0].style.display = "block";
        show[2].style.display = "none";
    }
});
function Insertproduct(index) {
    const a= `<div class="product_warper">
            <button class="close-btn" id="close-btn"><i class="fa-solid fa-x"></i></button>
            <div class="container2">
                <div class="imgBx">
                    <img src="assets/img/cool/p (${products[index].id}).jpg">
                </div>
                <div class="details">
                    <div class="content">
                        <h2>${products[index].name}<br>
                            <span>Running Collection</span>
                        </h2>
                        <p>
                        ${products[index].descibe}
                        </p>
                        <h3>${products[index].price}</h3>
                        <button>Mua</button>
                    </div>
                </div>
            </div>
        </div>`;
        return a
}
// Xử lý giỏ hàng
let array =[];
let Render_array=[];
let total = 0;
const btn_click = document.querySelectorAll(".products-item button");
function saveDataToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(Render_array));
    localStorage.setItem("pay_check",total)
  }
btn_click.forEach((button, index) => {
    button.addEventListener("click", () => {
        const value = image_click[index].getAttribute("data-value");
        window.alert(`Đã thêm sản phẩm ${index}`);
        let inid = products.findIndex(product => product.id === value);
        if(!array.includes(inid)){
            array.unshift(inid);
            let object= 
                {
                    id:`${products[inid].id}`,
                    name:`${products[inid].name}`,
                    price:`${products[inid].price}`,
                    Count:1
                }
            Render_array.unshift(object);
            console.log(Render_array);
            total=PayMoneySum();
            saveDataToLocalStorage();
        }
        else{
            let exist_index = Render_array.findIndex(item=>item => item.id === products[inid].id);
            if(exist_index!=-1){
                console.log("đã tăng thêm sản phẩm")
                Render_array[exist_index].Count++;
                console.log(Render_array[exist_index])
                total=PayMoneySum();
                console.log(total);
                saveDataToLocalStorage();
            }
        }
    });
});
function productDecrease(index) {
    if (Render_array[index]) {
        if (Render_array[index].Count > 1) {
            Render_array[index].Count--;
            console.log(Render_array[index].Count);
        } else {
            Render_array.splice(index, 1);
        }
        saveDataToLocalStorage();
    }
}
function PayMoneySum(){
    let sum = 0;
    Render_array.forEach(e => {
        let SumablePrice = parseInt(e.price.replace(/\D/g, ""));
        sum += e.Count * SumablePrice;
    });
    return sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") + 'vnđ';
}

