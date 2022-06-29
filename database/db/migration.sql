DROP DATABASE IF EXISTS prod_desc;

CREATE DATABASE prod_desc;
\c prod_desc
DROP TABLE IF EXISTS product;

CREATE TABLE product(
    id SERIAL UNIQUE PRIMARY KEY,
    asin_id VARCHAR,
    product_name TEXT,
    rating NUMERIC,
    reviews INTEGER,
    category TEXT,
    price NUMERIC,
    options TEXT ARRAY,
    about TEXT ARRAY
);

INSERT INTO product (asin_id, product_name, category, price, options, about)
    VALUES ('B09V3HN1KC', '2022 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (5th Generation)', 'electronics', 569.00, ARRAY['WiFi', 'Space Gray', '64GB'],
    ARRAY ['10.9-inch Liquid Retina display with True Tone, P3 wide color, and an antireflective coating', 'Apple M1 chip with Neural Engine', '12MP Wide camera', '12MP Ultra Wide front camera with Center Stage', 'Up to 256GB of storage', '5G capable']);