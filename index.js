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
const show = document.querySelectorAll("main");
console.log(show);
const image_click = document.querySelectorAll(".products-item__img");
console.log(image_click);
image_click.forEach((image) => {
  image.addEventListener("click", function () {
    const value = this.getAttribute("data-value");
    console.log("Clicked image value:", value);
    const u = Insertproduct();
    show[0].style.display = "none";
    console.log(u);
    show[1].innerHTML = u;
    show[1].style.display = "flex";
  });
});
show[1].addEventListener('click', function(event) {
    if (event.target.matches('.close-btn, .close-btn *')) {
        show[1].innerHTML = ''; 
        show[0].style.display = "block";
        show[2].style.display = "none";
    }
});
function Insertproduct() {
  const a = `<div class="product_warper">
            <button class="close-btn" id="close-btn"><i class="fa-solid fa-x"></i></button>
            <div class="container2">
                <div class="imgBx">
                    <img src="assets/img/23CMAW.TT004.3D.1_15.jpg">
                </div>
                <div class="details">
                    <div class="content">
                        <h2>Áo ba lỗ <br>
                            <span>Running Collection</span>
                        </h2>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <h3>140.000đ</h3>
                        <button>Mua</button>
                    </div>
                </div>
            </div>
        </div>`;
  return a;
}
