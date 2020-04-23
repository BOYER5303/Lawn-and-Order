DELETE FROM products
WHERE product_id = $1;

SELECT p.product_id, p.category, p.product, p.img FROM products p;
--JOIN users u ON t.employee = u.user_id
-- WHERE u.company_id = ${company_id};