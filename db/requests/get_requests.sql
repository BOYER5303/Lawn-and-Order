SELECT r.request_id, p.product_id, p.product, u.user_id, u.name, u.address, r.request_start, r.request_end FROM  requests r
 JOIN users u ON u.user_id = r.user_id
 JOIN products p ON p.product_id = r.product_id
 