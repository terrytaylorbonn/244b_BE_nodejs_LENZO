'use strict';


/**
 * Create a product
 * Use this endpoint to add a new product to the catalog
 *
 * body Product Product Details (optional)
 * returns Product
 **/
exports.createProduct = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : 4.99,
  "name" : "Coffee",
  "description" : "Arabica coffee beans",
  "lastUpdatedOn" : "2023-01-01T10:10:10Z",
  "id" : "1001"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete product
 * Use this endpoint to remove a product from the catalog
 *
 * id String 
 * no response value expected for this operation
 **/
exports.deleteProduct = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List products
 * Use this endpoint to browse all products in the catalog
 *
 * offset Integer  (optional)
 * limit Integer  (optional)
 * returns inline_response_200
 **/
exports.getAllProducts = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get product details
 * Use this endpoint to get details about a specific product
 *
 * id String 
 * returns Product
 **/
exports.getProduct = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : 4.99,
  "name" : "Coffee",
  "description" : "Arabica coffee beans",
  "lastUpdatedOn" : "2023-01-01T10:10:10Z",
  "id" : "1001"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update product's details
 * Use this endpoint to update the product's details
 *
 * body Product Product Details (optional)
 * id String 
 * returns Product
 **/
exports.updateProduct = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : 4.99,
  "name" : "Coffee",
  "description" : "Arabica coffee beans",
  "lastUpdatedOn" : "2023-01-01T10:10:10Z",
  "id" : "1001"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

