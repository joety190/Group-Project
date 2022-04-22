
class Item {
    constructor(name) {
        this.name = name;
        this.qty = [];
    }
    // add push function to  add item to array
    //create id for each item 
    // 
    updateQty(amountOf){ /// quantity will act as the room amount of will act as the room name 
        this.quantity.push(new Qty(amountOf));
    }
}

class Qty {
    constructor(amountOf){
        this.amountOf = amountOf;
    }
    // using id from array allow for increase in amount.
    // using id allow for object to be decreased.
}

class ItemManagement{
    static url = 'https://crudcrud.com/api/3c64c8349011494d883325f67a2c0310';  /// pulled from the suggested site

    static getAllItems() {
        return $.get(this.url);
    }

    static getItem(id) {
         return $.get(this.url + `/${id}`);
    }

    static addItem(item) {
        return $.post(this.url, item)
    }

    static updateItem(item) {
        return $.ajax({
            url: this.url + `/${item._id}`,
            dataType: 'json',
            data: JSON.stringify(item),
            contentType: 'application/json',
            type: 'PUT'
        })
    }
    static deleteItem(id) {
        return $.ajax({
            url: this.url +`/${id}`,
            type: 'DELETE'
        });
    }
}


class DOMManager {
    static items ;

    static getAllItems() {
        ItemManagement.getAllItems().then(items => this.render(items));
    }

    static render(items) {
        this.items = items;
        $('app').empty();
        for(let item of items){
            $('app').prepend(
                `<div id="$(house._id)" class="card">
                 <div class="card-header">
                    <h2>$(item.amountof)</h2>
                    <button class"btn btn-danger" onclick="DOMManager.deleteItem('$item._id)">Delete</button>

                 </div>
                 <div class="card-body">
                    <div class="card">
                        <div class="row">
                        <div class="col-sm"
                        <input type="number" id="${item._id}-quantity-amountOf" class="form-control" placeholder="Inventory amount">
                        </div>
                        </div>  
                        <button id="${item._id}-new-quantity" onclick=DOMManager.changeQuantity('${items._id}')" class="btn btn-primary form-control">Update</button>
                    </div>
                 </div>
                </div><br>
                `
            );
            for (let item of item.quantity) {
                $(`#${item._id}`).find('.card-body').append(
                    `<p>
                    <span id="amountof-${room._id}"><strong>Quantity: </strong> ${quantity.amountOf}</span>
                    
                    
                    <button class="btn btn-danger" onclick="DOMManager.deleteQuantity('${item._id}", "${amountof._id}")">deleteQuantity</button>
                    `
                    )
            }
        }
    }
}
DOMManager.getAllItems

