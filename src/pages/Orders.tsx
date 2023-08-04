import { useEffect, useState } from 'react'

interface Order {
  receipt_id: string
  // Add other properties as required
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get('token')

    fetch('https://openapi.etsy.com/v3/application/shops/:shop_id/receipts', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => setOrders(data.results))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <div key={order.receipt_id}>
          <h3>Order ID: {order.receipt_id}</h3>
          {/* Other order details */}
        </div>
      ))}
    </div>
  )
}

export default OrdersPage
