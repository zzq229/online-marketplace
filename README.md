# Online marketplace #

## RESTAPIDocs ## 

### Tech Stack

The online marketplace uses Node.js(express) as backend, PostgreSQL as databse, Knex.js as connecter and 
query builder

### Install and strat

#### Config file
Create a file called .env under config/ folder, the format is 

```
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
```

#### Database Initialize 

Do 
``` 
knex migrate:latest
``` 
to populate databases, then
```
knex seed:run
```
to run seed


#### Install

After clone, do
```
npm install
```

To start the application 

```
npm start
```


### Product related

* [Get All Proudct](document/product/getall.md) : `GET /product/getall?onlyavailable=`
* [Get One Proudct](document/product/getone.md) : `GET /product/getone/:title`


### Cart related

* [Add contact](document/contact/add.md) : `POST /contact/add`
* [Get contact](document/contact/list.md) : `GET /contact/list`
* [Update contact](document/contact/update.md) : `PUT /contact/update`
* [Delete contact](document/contact/delete.md) : `DELETE /contact/delete`



