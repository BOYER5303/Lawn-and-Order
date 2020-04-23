CREATE TABLE users (
    user_id SERIAL PRIMARY KEY, 
    name TEXT(80),
    address TEXT(100),
    email TEXT(50), 
    password VARCHAR,
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    category TEXT(24),
    product TEXT(24),
    img TEXT
);

INSERT INTO users (name, address, email,  password)
VALUES ('Jason Boyer', '1234 Boarder Road, Papillion NE 68005', 'byr_jsn@devmtn.com', 'Password'),
('John Denver', '1234 Country Rd, Denver CO 12345', 'dnvr_jhn@devmtn.com', 'Password');

INSERT INTO product (category, product, img)
VALUES ('Mower', 'John Deer 42', 'https://images.homedepot-static.com/productImages/6800ddbd-e9eb-414a-b38c-d266816176a8/svn/john-deere-lawn-tractors-bg21028-64_1000.jpg'),
('Mower', 'Ryobi Electric', 'https://images.homedepot-static.com/productImages/5afcbd7a-b783-4f65-b7a9-75b1d6db19fd/svn/ryobi-push-lawn-mowers-p1140-s-64_1000.jpg'),
('Mower', 'Troy-Bilt Bronco 42','https://images.homedepot-static.com/productImages/6672c641-30e2-41cc-aac9-abdf752430f8/svn/troy-bilt-lawn-tractors-bronco-42-64_1000.jpg'),
('Snow Blower', 'Toro Power Clear', 'https://images.homedepot-static.com/productImages/b5364655-f85b-4096-9802-ee7e92182f59/svn/toro-gas-snow-blowers-38753-64_1000.jpg'),
('Snow Blower', 'PowerSmart 24','https://images.homedepot-static.com/productImages/42f3e137-8dde-49c2-8cf9-1039d146b2b9/svn/powersmart-gas-snow-blowers-pss2240-hd-64_1000.jpg'),
('Leaf Blower', 'Ego Cordless', 'https://images.homedepot-static.com/productImages/b4f329d9-803b-4a01-aeb4-b31b267ef316/svn/ego-cordless-leaf-blowers-lb6504-64_1000.jpg'),
("Leaf Blower", 'Toro Powerjet', 'https://images.homedepot-static.com/productImages/11810042-7aff-4839-9dbf-a34a8a67c082/svn/toro-electric-leaf-blowers-51624-64_1000.jpg'),
('Pressure Washer', 'Ryobi Electric', 'https://images.homedepot-static.com/productImages/78dc5489-1c2b-484b-b544-78992549d3fc/svn/ryobi-electric-pressure-washers-ry142300-64_1000.jpg'),
('Tiller', 'Cub Cadet Gas', 'https://images.homedepot-static.com/productImages/655e8d4d-0e2d-4ae5-b0ca-599d9904da23/svn/cub-cadet-tillers-rt-65-64_1000.jpg'),
('Trimmer', 'Ryobi 25cc Gas', 'https://images.homedepot-static.com/productImages/a8239a19-7a17-42df-b87a-1ac29614696b/svn/ryobi-gas-string-trimmers-ry253ss-64_1000.jpg'),
('Trimmer', 'Weed Eater Electric', 'https://images.homedepot-static.com/productImages/36aa9f87-9f35-4eaf-b8c4-919eabaa0590/svn/weed-eater-electric-string-trimmers-967695201-64_1000.jpg'),
('Hedger', 'Black and Decker Corded', 'https://images.homedepot-static.com/productImages/04e9f09c-7440-4987-a4f1-580a452a2ebb/svn/black-decker-electric-hedge-trimmers-behts300-64_1000.jpg');