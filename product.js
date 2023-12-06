{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fswiss\fcharset0 Helvetica-Bold;}
{\colortbl;\red255\green255\blue255;\red36\green36\blue36;\red1\green131\blue14;\red153\green153\blue153;
\red67\green97\blue238;\red204\green16\blue177;}
{\*\expandedcolortbl;;\csgenericrgb\c14118\c14118\c14118;\csgenericrgb\c392\c51373\c5490;\csgenericrgb\c60000\c60000\c60000;
\csgenericrgb\c26275\c38039\c93333;\csgenericrgb\c80000\c6275\c69412;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh17480\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 db.createCollection
\f1\b (
\f0\b0 \cf3 "products"
\f1\b \cf2 );
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf4 // Clear the products collection\cf0 \
\pard\pardeftab720\partightenfactor0
\cf2 db.products.deleteMany
\f1\b (\{\});
\f0\b0 \cf0 \
\
\cf2 db.getCollection
\f1\b (
\f0\b0 \cf3 "products"
\f1\b \cf2 )
\f0\b0 .insertMany
\f1\b ([
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     prod_id
\f1\b :
\f0\b0  \cf3 "PROD001"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     prod_name
\f1\b :
\f0\b0  \cf3 "Laptop"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     price
\f1\b :
\f0\b0  \cf5 1000
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     quantity
\f1\b :
\f0\b0  \cf5 10
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     id
\f1\b :
\f0\b0  \cf5 1
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     prod_id
\f1\b :
\f0\b0  \cf3 "PROD002"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     prod_name
\f1\b :
\f0\b0  \cf3 "Smartphone"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     price
\f1\b :
\f0\b0  \cf5 500
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     quantity
\f1\b :
\f0\b0  \cf5 20
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     id
\f1\b :
\f0\b0  \cf5 2
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     prod_id
\f1\b :
\f0\b0  \cf3 "PROD003"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     prod_name
\f1\b :
\f0\b0  \cf3 "Headphones"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     price
\f1\b :
\f0\b0  \cf5 50
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     quantity
\f1\b :
\f0\b0  \cf5 50
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     id
\f1\b :
\f0\b0  \cf5 3
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     prod_id
\f1\b :
\f0\b0  \cf3 "PROD004"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     prod_name
\f1\b :
\f0\b0  \cf3 "Desk Chair"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     price
\f1\b :
\f0\b0  \cf5 150
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     quantity
\f1\b :
\f0\b0  \cf5 15
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     id
\f1\b :
\f0\b0  \cf5 4
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     prod_id
\f1\b :
\f0\b0  \cf3 "PROD005"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     prod_name
\f1\b :
\f0\b0  \cf3 "Coffee Maker"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     price
\f1\b :
\f0\b0  \cf5 80
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     quantity
\f1\b :
\f0\b0  \cf5 30
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     id
\f1\b :
\f0\b0  \cf5 5
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     prod_id
\f1\b :
\f0\b0  \cf3 "PROD006"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     prod_name
\f1\b :
\f0\b0  \cf3 "External Hard Drive"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     price
\f1\b :
\f0\b0  \cf5 120
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     quantity
\f1\b :
\f0\b0  \cf5 25
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     id
\f1\b :
\f0\b0  \cf5 6
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     prod_id
\f1\b :
\f0\b0  \cf3 "PROD007"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     prod_name
\f1\b :
\f0\b0  \cf3 "Fitness Tracker"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     price
\f1\b :
\f0\b0  \cf5 60
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     quantity
\f1\b :
\f0\b0  \cf5 40
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     id
\f1\b :
\f0\b0  \cf5 7
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     prod_id
\f1\b :
\f0\b0  \cf3 "PROD008"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     prod_name
\f1\b :
\f0\b0  \cf3 "Wireless Mouse"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     price
\f1\b :
\f0\b0  \cf5 30
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     quantity
\f1\b :
\f0\b0  \cf5 60
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     id
\f1\b :
\f0\b0  \cf5 8
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     prod_id
\f1\b :
\f0\b0  \cf3 "PROD009"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     prod_name
\f1\b :
\f0\b0  \cf3 "LED Monitor"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     price
\f1\b :
\f0\b0  \cf5 200
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     quantity
\f1\b :
\f0\b0  \cf5 12
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     id
\f1\b :
\f0\b0  \cf5 9
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     prod_id
\f1\b :
\f0\b0  \cf3 "PROD010"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     prod_name
\f1\b :
\f0\b0  \cf3 "Backpack"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     price
\f1\b :
\f0\b0  \cf5 40
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     quantity
\f1\b :
\f0\b0  \cf5 50
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     id
\f1\b :
\f0\b0  \cf5 10
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2     created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2     updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\cf2   
\f1\b \}
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf2 ]);
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf2 db.getCollection
\f1\b (
\f0\b0 \cf3 "products"
\f1\b \cf2 )
\f0\b0 .insertOne
\f1\b (\{
\f0\b0 \cf0 \
\cf2   prod_id
\f1\b :
\f0\b0  \cf3 "PROD011"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2   prod_name
\f1\b :
\f0\b0  \cf3 "Sample Product"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2   price
\f1\b :
\f0\b0  \cf5 100
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2   date_added
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2   quantity
\f1\b :
\f0\b0  \cf5 10
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2   id
\f1\b :
\f0\b0  \cf5 1
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2   created_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2   updated_by
\f1\b :
\f0\b0  \cf3 "Admin"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2   created_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 ),
\f0\b0 \cf0 \
\cf2   updated_date
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf2 \});
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf4 // Find all documents in the products collection\cf0 \
\pard\pardeftab720\partightenfactor0
\cf2 db.getCollection
\f1\b (
\f0\b0 \cf3 "products"
\f1\b \cf2 )
\f0\b0 .find
\f1\b (\{\});
\f0\b0 \cf0 \
\
\
\pard\pardeftab720\partightenfactor0
\cf6 const\cf2  avgPriceResult = db.getCollection
\f1\b (
\f0\b0 \cf3 "products"
\f1\b \cf2 )
\f0\b0 .aggregate
\f1\b ([
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     $group
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0 \cf0 \
\cf2       _id
\f1\b :
\f0\b0  \cf3 "$inventory_id"
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2       avgPrice
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  $avg
\f1\b :
\f0\b0  \cf3 "$price"\cf2  
\f1\b \}
\f0\b0 \cf0 \
\cf2     
\f1\b \}
\f0\b0 \cf0 \
\cf2   
\f1\b \}
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf2 ]);
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf2 printjson
\f1\b (
\f0\b0 avgPriceResult.toArray
\f1\b ());
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf4 // display latest added products\cf0 \
\pard\pardeftab720\partightenfactor0
\cf6 const\cf2  latestProductsResult = db.getCollection
\f1\b (
\f0\b0 \cf3 "products"
\f1\b \cf2 )
\f0\b0 .aggregate
\f1\b ([
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     $sort
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  created_date
\f1\b :
\f0\b0  -\cf5 1\cf2  
\f1\b \}
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     $limit
\f1\b :
\f0\b0  \cf5 5\cf0 \
\cf2   
\f1\b \}
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf2 ]);
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf2 printjson
\f1\b (
\f0\b0 latestProductsResult.toArray
\f1\b ());
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf4 // Count the number of products for each distinct product name\cf0 \
\pard\pardeftab720\partightenfactor0
\cf6 const\cf2  productCountResult = db.getCollection
\f1\b (
\f0\b0 \cf3 "products"
\f1\b \cf2 )
\f0\b0 .aggregate
\f1\b ([
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     $group
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0 \cf0 \
\cf2       _id
\f1\b :
\f0\b0  \cf6 null
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2       count
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  $sum
\f1\b :
\f0\b0  \cf5 1\cf2  
\f1\b \}
\f0\b0 \cf0 \
\cf2     
\f1\b \}
\f0\b0 \cf0 \
\cf2   
\f1\b \}
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf2 ]);
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf2 printjson
\f1\b (
\f0\b0 productCountResult.toArray
\f1\b ());
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf4 // Count the number of products with quantity greater than 20\cf0 \
\pard\pardeftab720\partightenfactor0
\cf6 const\cf2  countResult = db.getCollection
\f1\b (
\f0\b0 \cf3 "products"
\f1\b \cf2 )
\f0\b0 .aggregate
\f1\b ([
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     $match
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0 \cf0 \
\cf2       quantity
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  $gt
\f1\b :
\f0\b0  \cf5 20\cf2  
\f1\b \}
\f0\b0 \cf0 \
\cf2     
\f1\b \}
\f0\b0 \cf0 \
\cf2   
\f1\b \},
\f0\b0 \cf0 \
\cf2   
\f1\b \{
\f0\b0 \cf0 \
\cf2     $group
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0 \cf0 \
\cf2       _id
\f1\b :
\f0\b0  \cf6 null
\f1\b \cf2 ,
\f0\b0 \cf0 \
\cf2       totalProducts
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  $sum
\f1\b :
\f0\b0  \cf5 1\cf2  
\f1\b \}
\f0\b0 \cf0 \
\cf2     
\f1\b \}
\f0\b0 \cf0 \
\cf2   
\f1\b \}
\f0\b0 \cf0 \
\pard\pardeftab720\partightenfactor0

\f1\b \cf2 ]);
\f0\b0 \cf0 \
\
\pard\pardeftab720\partightenfactor0
\cf2 printjson
\f1\b (
\f0\b0 countResult.toArray
\f1\b ());
\f0\b0 \cf0 \
\
\cf2 db.products.find
\f1\b (\{
\f0\b0  price
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  $gte
\f1\b :
\f0\b0  \cf5 100
\f1\b \cf2 ,
\f0\b0  $lte
\f1\b :
\f0\b0  \cf5 500\cf2  
\f1\b \}
\f0\b0  
\f1\b \});
\f0\b0 \cf0 \
\
\cf2 db.products.find
\f1\b (\{
\f0\b0  prod_name
\f1\b :
\f0\b0  \cf3 "Laptop"\cf2  
\f1\b \});
\f0\b0 \cf0 \
\
\cf2 db.products.find
\f1\b (\{
\f0\b0  date_added
\f1\b :
\f0\b0  
\f1\b \{
\f0\b0  $gte
\f1\b :
\f0\b0  ISODate
\f1\b (
\f0\b0 \cf3 "2023-12-06T00:00:00Z"
\f1\b \cf2 )
\f0\b0  
\f1\b \}
\f0\b0  
\f1\b \});
\f0\b0 \cf0 \
}