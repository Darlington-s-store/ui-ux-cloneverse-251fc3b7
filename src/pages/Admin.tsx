
import { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BarChart, Truck, Users, Package, ShoppingBag, Edit, Trash2, Menu } from 'lucide-react';
import AdminSidebar from '../components/admin/AdminSidebar';

const Admin = () => {
  const { products, orders } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Mock user data
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', orders: 5, spent: 789.45 },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', orders: 3, spent: 432.10 },
    { id: '3', name: 'Robert Johnson', email: 'robert@example.com', orders: 8, spent: 1245.65 },
    { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', orders: 2, spent: 325.80 },
    { id: '5', name: 'Michael Brown', email: 'michael@example.com', orders: 6, spent: 950.20 },
  ];
  
  // Filter items based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.shippingAddress.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handlers
  const handleEditProduct = (productId: string) => {
    toast.info(`Editing product ${productId}`);
  };
  
  const handleDeleteProduct = (productId: string) => {
    toast.info(`Deleting product ${productId}`);
  };
  
  const handleUpdateOrderStatus = (orderId: string, status: string) => {
    toast.success(`Order ${orderId} status updated to ${status}`);
  };
  
  // Dashboard statistics
  const stats = [
    { title: 'Total Products', value: products.length, icon: <Package className="h-6 w-6" /> },
    { title: 'Total Orders', value: orders.length, icon: <ShoppingBag className="h-6 w-6" /> },
    { title: 'Total Customers', value: users.length, icon: <Users className="h-6 w-6" /> },
    { title: 'Total Revenue', value: `$${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}`, icon: <BarChart className="h-6 w-6" /> },
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      {isSidebarOpen && <AdminSidebar />}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 p-4 flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-2 lg:hidden"
          >
            <Menu />
          </Button>
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg border p-6 flex items-center">
                <div className="rounded-full bg-gray-100 p-3 mr-4">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{stat.value}</h3>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products, orders, or users..."
                className="w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
            
            {/* Products Tab */}
            <TabsContent value="products">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Products</h2>
                <Button>Add New Product</Button>
              </div>
              
              <div className="overflow-x-auto bg-white rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Image</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.slice(0, 10).map(product => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                        </TableCell>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" onClick={() => handleEditProduct(product.id)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => handleDeleteProduct(product.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            {/* Orders Tab */}
            <TabsContent value="orders">
              <h2 className="text-xl font-bold mb-4">Orders</h2>
              
              <div className="overflow-x-auto bg-white rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map(order => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.shippingAddress.name}</TableCell>
                        <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs 
                            ${order.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                              order.status === 'shipped' ? 'bg-blue-100 text-blue-800' : 
                              'bg-yellow-100 text-yellow-800'}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <select 
                            className="border rounded p-1 text-sm"
                            value={order.status}
                            onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                          >
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                          </select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            {/* Users Tab */}
            <TabsContent value="users">
              <h2 className="text-xl font-bold mb-4">Users</h2>
              
              <div className="overflow-x-auto bg-white rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map(user => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.orders}</TableCell>
                        <TableCell>${user.spent.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Truck className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Admin;
