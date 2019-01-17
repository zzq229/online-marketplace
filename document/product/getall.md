**URL** : `GET /product/getall?onlyavailable=`

If onlyavailable sets to true, products with available inventory will be shown, otherwise all products will be shown.

**Method** : `GET`

## Success Responses

**Code** : `200 OK`

**Content example**

onlyavailable=true
```json 
[
    {
        "Title": "apple",
        "Price": "5.00",
        "Inventory_count": 10
    },
    {
        "Title": "Double-Double",
        "Price": "1.79",
        "Inventory_count": 30
    },
    {
        "Title": "Chick-fil-A",
        "Price": "3.50",
        "Inventory_count": 5
    }
]
```

onlyavailable=false
```json 
[
    {
        "Title": "apple",
        "Price": "5.00",
        "Inventory_count": 10
    },
    {
        "Title": "Double-Double",
        "Price": "1.79",
        "Inventory_count": 30
    },
    {
        "Title": "Chick-fil-A",
        "Price": "3.50",
        "Inventory_count": 5
    },
    {
        "Title": "PS4",
        "Price": "299.00",
        "Inventory_count": 0
    }
]
```