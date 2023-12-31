const cart = document.getElementById("cart");
const before = document.getElementById("before");
const service = document.getElementById("service");
const after = document.getElementById("after");
const h3 = document.getElementById("result");
const button = document.getElementById("myButton");
const resetButton = document.getElementById("reset");


button.addEventListener('click', function() {
    let cartSerial = cart.value;
    let beforeQuan = before.value;
    let serviceQuan = service.value;
    let afterQuan = after.value;


    function convert () {
        quartsService = (afterQuan - beforeQuan) / 32; 
        return quartsService;

    }

    function final () {
        finalService = serviceQuan - convert();
        if (finalService > 0) {
            h3.innerHTML = "Replenished " + Math.round(finalService) + " quarts" + " from cart " + cartSerial;
        }
    }

    final();

});

resetButton.addEventListener('click', function () {
    cart.value = '';
    before.value = '';
    service.value = '';
    after.value = '';
    h3.innerHTML = '';
})
