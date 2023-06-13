{/*const handlePurchase = async (packageType) => {
    try {
      // Create the order payload
      const payload = {
        title: 'StudioX Purchase',
        description: `Purchase of ${packageType}`,
        email: 'customer@example.com',
        webhookUrl: 'https://your-webhook-url.com', // Replace with your actual webhook URL
        price: 10, // Replace with the actual price
        currency: 'EUR', // Replace with the actual currency
        mode: 'sell', // Use 'sell' for one-time purchase or 'subscription' for recurring payment
        gateway: 'stripe', // Replace with your preferred payment gateway
        delivery: 'none', // Replace with the delivery method
        confirmUrl: 'https://your-confirmation-url.com', // Replace with your actual confirmation URL
        returnUrl: 'https://your-return-url.com', // Replace with your actual return URL
        additionalInformation: {
          packageType: packageType,
        },
      };
  
      // Send the order request to Sellix.io
      const response = await axios.post('https://dev.sellix.io/v1/orders', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_API_KEY`,
        },
      });
  
      // Handle the response from Sellix.io
      const { data } = response;
      if (data && data.status === 'success') {
        // Redirect the user to the Sellix.io checkout page
        window.location.href = data.data.checkout;
      } else {
        // Handle the error case
        console.error('Failed to create order:', data);
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
  }; */}