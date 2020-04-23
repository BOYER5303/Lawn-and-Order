INSERT INTO products (category, product, img)
VALUES ($1, $2, $3);

SELECT p.category, p.product, p.img FROM products p;
