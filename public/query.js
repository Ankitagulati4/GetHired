function fetchProducts (done) {
    $.get('/api/queries', function (data) {
        done(data)
    })
}

function addProduct (name, manuf, price, done) {
    $.post('/api/queries', {
        name: name,
        query: manuf,
        email: price
    }, function (data) {
        done(data)
    })
}

function createProductCard (product) {
    return $(`
    <div class="col-6  mt-5  p-4" >
         <div class="card mx-auto p-4" style="width:80%; font-family: 'Aclonica'; color: red; background-color: #D3D3D3;">
         <div class="row">
            <div class="col-6">
                <h4 class="product-name">${product.name}</h4>
                <br>
                <br>
                <h4 class="product-manufacturer">${product.query}</h4>
            </div>
            <div class="col-6">
                <img src="logo.png" style="width:80%;height:auto;" >
                <br>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
            <br>
            <h4> ${product.email}</h4>
            </div>
            <div class="col-6">
                <br>
                <center><h2 style="background-color: #212529; color:yellow;">GetHired</h2></center>
            </div>
        </div>
        
        
        </div>
    </div>`
        )
}