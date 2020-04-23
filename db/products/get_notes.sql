SELECT n.note, note_id, n.product_id FROM notes n
JOIN products p ON p.products_id = n.products 
WHERE n.product_id = $1;