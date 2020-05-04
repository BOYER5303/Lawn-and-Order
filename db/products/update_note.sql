UPDATE products
SET note = $1 WHERE product_id = $2;

SELECT * FROM products
ORDER BY product_id;

