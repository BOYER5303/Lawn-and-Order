LAWN AND ORDER

Mission Statement(for revision):

Why should a whole community individually spend thousands of dollars on products that are used once or twice a month and then stored for the other half of the year.  Forget all those lame push mowers and hand shoveling snow, for pennies on the dollar you can have access to the Cadillac of yard care equipment.  Not only will this save money but imagine all the hours saved slaving in the sun/cold. Subscribers can even offer up their own equipment and tools to share, the possibilities are endless.

MVP:
Users have personal accounts.
Ability to take payment via card.
Multiple products in DB.
Ability to add a product to borrow.
Ability to delete a product to borrow.
Ability to update/add repair notes.
Calender to track who requested products and address.


ICEBOX:
Ability to email/text notifications.
API to Randomized lawn care tips in footer.
Add inventory functionality.

DATABASE
Tables:
users, products, maintenance

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name TEXT(24),
    last_name TEXT(24),
    email VARCHAR(42),
    hashed_password TEXT,
    address VARCHAR(100)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    category TEXT(24),
    product TEXT(24),
    img TEXT
);

CREATE TABLE maintenance(
    maintenance_id SERIAL PRIMARY KEY,
    maintenance_notes TEXT,
    img TEXT
);

SERVER
Dependencies:
massive
express
dotenv
express-session
bcrypt
? Payment method
? Calendar

Endpoints:

authCtrl:
login: /auth/login
register: /auth/register
logout: /auth/logout
userSession: /auth/user_session

productCtrl:
(app.get)getProducts: /api/get_products
(app.post)postProduct: /api/add_product
(app.delete) deleteNote: /api/delete_note/:id
(app.delete) deleteProduct: /api/delete_product/:id
(app.post) /api/add_note

CLIENT
Dependencies:
axios
redux
react-redux
redux-promise-middleware
react-router-dom

File Structure:
src/
    App.js
    App.css
    reset.css
    index.js
    COMPONENTS
        Header.js/.css
        LoginHeader.js/.css
        Main.js/.css
        Login.js/.css
        AddProduct.js/.css
        Calendar.js/.css
        Contact.js/.css
        Payment.js/.css ???
    REDUX
        Store.js
        reducer.js

Routes:
login: /login
main: /
product: /product/:id
form: /form
contact: /contact
calender: /calender

# Lawn-and-Order
