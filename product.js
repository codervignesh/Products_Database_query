db.createCollection("products");

// Clear the products collection
db.products.deleteMany({});

db.getCollection("products").insertMany([
  {
    prod_id: "PROD001",
    prod_name: "Laptop",
    price: 1000,
    date_added: ISODate("2023-12-06T00:00:00Z"),
    quantity: 10,
    id: 1,
    created_by: "Admin",
    updated_by: "Admin",
    created_date: ISODate("2023-12-06T00:00:00Z"),
    updated_date: ISODate("2023-12-06T00:00:00Z")
  },
  {
    prod_id: "PROD002",
    prod_name: "Smartphone",
    price: 500,
    date_added: ISODate("2023-12-06T00:00:00Z"),
    quantity: 20,
    id: 2,
    created_by: "Admin",
    updated_by: "Admin",
    created_date: ISODate("2023-12-06T00:00:00Z"),
    updated_date: ISODate("2023-12-06T00:00:00Z")
  },
  {
    prod_id: "PROD003",
    prod_name: "Headphones",
    price: 50,
    date_added: ISODate("2023-12-06T00:00:00Z"),
    quantity: 50,
    id: 3,
    created_by: "Admin",
    updated_by: "Admin",
    created_date: ISODate("2023-12-06T00:00:00Z"),
    updated_date: ISODate("2023-12-06T00:00:00Z")
  },
  {
    prod_id: "PROD004",
    prod_name: "Desk Chair",
    price: 150,
    date_added: ISODate("2023-12-06T00:00:00Z"),
    quantity: 15,
    id: 4,
    created_by: "Admin",
    updated_by: "Admin",
    created_date: ISODate("2023-12-06T00:00:00Z"),
    updated_date: ISODate("2023-12-06T00:00:00Z")
  },
  {
    prod_id: "PROD005",
    prod_name: "Coffee Maker",
    price: 80,
    date_added: ISODate("2023-12-06T00:00:00Z"),
    quantity: 30,
    id: 5,
    created_by: "Admin",
    updated_by: "Admin",
    created_date: ISODate("2023-12-06T00:00:00Z"),
    updated_date: ISODate("2023-12-06T00:00:00Z")
  },
  {
    prod_id: "PROD006",
    prod_name: "External Hard Drive",
    price: 120,
    date_added: ISODate("2023-12-06T00:00:00Z"),
    quantity: 25,
    id: 6,
    created_by: "Admin",
    updated_by: "Admin",
    created_date: ISODate("2023-12-06T00:00:00Z"),
    updated_date: ISODate("2023-12-06T00:00:00Z")
  },
  {
    prod_id: "PROD007",
    prod_name: "Fitness Tracker",
    price: 60,
    date_added: ISODate("2023-12-06T00:00:00Z"),
    quantity: 40,
    id: 7,
    created_by: "Admin",
    updated_by: "Admin",
    created_date: ISODate("2023-12-06T00:00:00Z"),
    updated_date: ISODate("2023-12-06T00:00:00Z")
  },
  {
    prod_id: "PROD008",
    prod_name: "Wireless Mouse",
    price: 30,
    date_added: ISODate("2023-12-06T00:00:00Z"),
    quantity: 60,
    id: 8,
    created_by: "Admin",
    updated_by: "Admin",
    created_date: ISODate("2023-12-06T00:00:00Z"),
    updated_date: ISODate("2023-12-06T00:00:00Z")
  },
  {
    prod_id: "PROD009",
    prod_name: "LED Monitor",
    price: 200,
    date_added: ISODate("2023-12-06T00:00:00Z"),
    quantity: 12,
    id: 9,
    created_by: "Admin",
    updated_by: "Admin",
    created_date: ISODate("2023-12-06T00:00:00Z"),
    updated_date: ISODate("2023-12-06T00:00:00Z")
  },
  {
    prod_id: "PROD010",
    prod_name: "Backpack",
    price: 40,
    date_added: ISODate("2023-12-06T00:00:00Z"),
    quantity: 50,
    id: 10,
    created_by: "Admin",
    updated_by: "Admin",
    created_date: ISODate("2023-12-06T00:00:00Z"),
    updated_date: ISODate("2023-12-06T00:00:00Z")
  }
]);

db.getCollection("products").insertOne({
  prod_id: "PROD011",
  prod_name: "Sample Product",
  price: 100,
  date_added: ISODate("2023-12-06T00:00:00Z"),
  quantity: 10,
  id: 1,
  created_by: "Admin",
  updated_by: "Admin",
  created_date: ISODate("2023-12-06T00:00:00Z"),
  updated_date: ISODate("2023-12-06T00:00:00Z")
});

// Find all documents in the products collection
db.getCollection("products").find({});


const avgPriceResult = db.getCollection("products").aggregate([
  {
    $group: {
      _id: "$inventory_id",
      avgPrice: { $avg: "$price" }
    }
  }
]);

printjson(avgPriceResult.toArray());

// display latest added products
const latestProductsResult = db.getCollection("products").aggregate([
  {
    $sort: { created_date: -1 }
  },
  {
    $limit: 5
  }
]);

printjson(latestProductsResult.toArray());

// Count the number of products for each distinct product name
const productCountResult = db.getCollection("products").aggregate([
  {
    $group: {
      _id: null,
      count: { $sum: 1 }
    }
  }
]);

printjson(productCountResult.toArray());

// Count the number of products with quantity greater than 20
const countResult = db.getCollection("products").aggregate([
  {
    $match: {
      quantity: { $gt: 20 }
    }
  },
  {
    $group: {
      _id: null,
      totalProducts: { $sum: 1 }
    }
  }
]);

printjson(countResult.toArray());

db.products.find({ price: { $gte: 100, $lte: 500 } });

db.products.find({ prod_name: "Laptop" });

db.products.find({ date_added: { $gte: ISODate("2023-12-06T00:00:00Z") } });
