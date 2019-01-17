**URL** : `POST /cart/additem`

**Method** : `POST`

**Data constraints**

```json
{
	"[title]": "[number]"
}
```

**Data constraints Example**

```json
{
	"apple": 4,
	"Double-Double": 1
}
```

## Success Responses

**Code** : `200 OK`

**Content example**

```json
Cart added
```