$(function () {
    let productName = $('#productName')
     let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')
    
    $('#btnProductAdd').click(function () {

        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function (addedProduct) {
                window.alert(addedProduct.name + " your profile has been saved !! \n Now visit the Profiles Gallery to see your profile .")
            }
        )


    })

})