const customers = [
    { 
        customerID: 1,
        customerName: 'Taiyab',
        totalBillingAmount: 2500 
    },
    { 
        customerID: 2, 
        customerName: 'Abhishek', 
        totalBillingAmount: 3500 
    },
    { 
        customerID: 3, 
        customerName: 'Pooja', 
        totalBillingAmount: 4000 
    },
    { 
        customerID: 4, 
        customerName: 'Amit', 
        totalBillingAmount: 2700 
    },
    { 
        customerID: 5, 
        customerName: 'irfan', 
        totalBillingAmount: 4200 
    },
    
  ];
  
  // Filtering customers with total billing amount more than Rs. 3000
  const highBillingCustomers = customers.filter(customer => customer.totalBillingAmount > 3000);
  
  // Mapping the required information (customer name and purchase details)
  const customerDetails = highBillingCustomers.map(customer => ({
    customerName: customer.customerName,
    purchaseDetails: {
      totalBillingAmount: customer.totalBillingAmount,
      
    },
  }));
  
  // Print the list of high billing customers and their purchase details
  customerDetails.forEach(customer => {
    console.log(`${customer.customerName}:`, customer.purchaseDetails);
  });
  