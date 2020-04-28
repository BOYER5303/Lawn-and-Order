INSERT INTO products (category, product, img, note)
VALUES ($1, $2, $3, $4);

SELECT p.category, p.product, p.img, p.note FROM products p;
