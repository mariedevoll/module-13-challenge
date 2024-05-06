# E-commerce Back End Starter Code

## Description
This challenge involved building the back end for an e-commerce site. With the starter code, I filled in the gaps for the routes and the models. The model looked like this:
* ```1. Category```
- ```id```
    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment
- ```category_name```
    - String
    - Doesn't allow null values

*```2. Product```
- ```id```
    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment
- ```product_name```
    - String
    - Doesn't allow null values
- ```price```
    - Decimal
    - Doesn't allow null values
    - Validates that the value is a decimal
- ```stock```
    - Integer
    - Doesn't allow null values
    - Set a default value of 10
    - Validates that the value is numeric
- ```category_id```
    - Integer
    - References the category model's id

*```3. Tag```
- ```id```
    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment
- ```tag_name```
    - String

*```4. ProductTag```
- ```id```
    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment
- ```product_id```
    - Integer
    - References the ```product``` model's ```id```
-```tag_id```
    - Integer
    - References the ```tag``` model's ```id```


## Installation
To install the needed dependencies, run these commands in the terminal:
```
\i schema.sql
```

```
npm run seed
```

```
npm run start
```

## Usage
After creating the database, ensure that your password is encrypted in the ```.env``` file and that file is in the ```.gitignore``` file. After populating the database with the seeds, you can run the server and see the results in ```localhost:3001/api```

## Video
https://drive.google.com/file/d/1Txv1BvjJAXEQ8OIwL0m0lOJChu2U03WQ/view


## License
MIT

## Contributors
Marie DeVoll