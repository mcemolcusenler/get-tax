var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var totalSalesArray = [];
var totalTaxArray = [];
var result = {};

function addSales(salesArray) {
  var totalSales = 0;
  for (var i = 0; i < salesArray.length; i++) {
    totalSales += salesArray[i];
  }
  return totalSales;
}


function getSales(salesObj) {
  var salesArray = salesObj.sales;
  return salesArray;
}

function totalSales(companySalesData, salesTaxRates) {
  for (var i = 0; i < companySalesData.length; i++) {
    var company = companySalesData[i];
    var storeGetSales = getSales(company);
    var storeAddSales = addSales(storeGetSales);
    company["total sales"] = storeAddSales;
    var companyName = company.name;
    //console.log(companyName);
    var provinceName = company.province;
    //console.log(provinceName);
    var companySales = company.sales;
    //console.log(companySales);
    //console.log(storeAddSales)
    for (key in salesTaxRates) {
      if (key === provinceName) {
        var taxRate = salesTaxRates[provinceName];
        //console.log(taxRate);
        var totalTax = taxRate * storeAddSales;
        company["total tax"] = totalTax;
        //console.log(totalTax);
      }
    }
  }
  //console.log('-----', companySalesData);
  return companySalesData;
}

function combineData(companySalesData) {
  var finalObj = {};
  for (var i = 0; i < companySalesData.length; i++) {
    if (!(finalObj.hasOwnProperty(companySalesData[i].name))) {
      finalObj[companySalesData[i].name] = {
        'total sales': companySalesData[i]['total sales'],
        'total tax': companySalesData[i]['total tax']
      }
      //console.log(finalObj[companySalesData[i].name]);
    } else {
      finalObj[companySalesData[i].name]['total sales'] += companySalesData[i]['total sales'];
      finalObj[companySalesData[i].name]['total tax'] += companySalesData[i]['total tax'];
    }
  }
  console.log(finalObj);
}


totalSales(companySalesData, salesTaxRates);
combineData(companySalesData);