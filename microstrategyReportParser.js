var jsonData = require('../../data/MicrostrategyCitiReport.json');

function lookForMetricsIndex(metricsKey) {
  var i=0;
  var totalDataLen = jsonData.result.definition.metrics.length;
  for(; i < totalDataLen; i++) {
      var retrivedMetricsKey = jsonData.result.definition.metrics[i].name;
      if(retrivedMetricsKey == metricsKey) {
        return i;
      }
  }
  return -1;
}

function lookForFinYear(financialYear) {
  //return lookForData(financialYear, jsonData.result.data.root.children, jsonData.result.data.root.children.length)
  var i=0;
  var totalDataLen = jsonData.result.data.root.children.length;
  for(; i < totalDataLen; i++) {
      var retrivedFinancialYear = jsonData.result.data.root.children[i].element.name;
      if(retrivedFinancialYear == financialYear) {
        return i;
      }
  }
  return -1;
}

function processJSON(clientName, financialYear, metricsKey) {
  var dummy = ["financial balance sheet.total liabilities and stockholders equity"];
  var financialYearIndex = -1;
      financialYearIndex = lookForFinYear(financialYear);
      if(financialYearIndex >= 0) {
          //Logic to look up the metrics data as per client name
          var noOfClients = jsonData.result.data.root.children[financialYearIndex].children.length;
          for(var i=0; i < noOfClients ; i++) {
            var retrivedClientName = jsonData.result.data.root.children[financialYearIndex].children[i].element.name;
            if(retrivedClientName == clientName) {
              return jsonData.result.data.root.children[financialYearIndex].children[i].metrics[metricsKey].rv;
            }
          }
  }
  return null
}


var exports = module.exports = {
  processJSON: processJSON
};
