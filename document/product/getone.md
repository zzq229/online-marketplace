**URL** : `GET /product/getone/:title`

**Method** : `GET`

**Data constraints**

```json
{
    "title": "[title of the product]"
}
```


## Success Responses

**Code** : `200 OK`

**Content example**

```json 
{
    "Title": "apple",
    "Price": "5.00",
    "Inventory_count": 10
}
```

