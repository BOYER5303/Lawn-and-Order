UPDATE products
SET note = $1 WHERE product_id = $2;

SELECT * FROM products
WHERE product_id = $2;

