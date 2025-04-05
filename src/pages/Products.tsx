
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table';
import { Trash2, Edit, Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

// Mock data for products
const initialProducts = [
  { id: 1, name: 'Queso Manchego', price: 22.50, barcode: '8400000123457', category: 'Semicurado' },
  { id: 2, name: 'Queso Brie', price: 15.75, barcode: '8400000123458', category: 'Blando' },
  { id: 3, name: 'Queso Azul', price: 18.90, barcode: '8400000123459', category: 'Azul' },
];

interface Product {
  id: number;
  name: string;
  price: number;
  barcode: string;
  category: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    barcode: '',
    category: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editMode && currentId) {
      setProducts(products.map(p => 
        p.id === currentId ? { ...formData, id: currentId } : p
      ));
      setEditMode(false);
      setCurrentId(null);
    } else {
      const newProduct = {
        ...formData,
        id: Date.now()
      };
      setProducts([...products, newProduct]);
    }
    
    // Reset form
    setFormData({
      name: '',
      price: 0,
      barcode: '',
      category: ''
    });
  };

  const handleEdit = (id: number) => {
    const productToEdit = products.find(p => p.id === id);
    if (productToEdit) {
      setFormData({
        name: productToEdit.name,
        price: productToEdit.price,
        barcode: productToEdit.barcode,
        category: productToEdit.category
      });
      setEditMode(true);
      setCurrentId(id);
    }
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      price: 0,
      barcode: '',
      category: ''
    });
    setEditMode(false);
    setCurrentId(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-cheese-black">
      <Header />
      <main className="flex-grow p-6">
        <div className="container-custom mx-auto py-8">
          <h1 className="text-3xl font-serif mb-8 text-cheese-gold">Administración de Productos</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Form */}
            <Card className="bg-cheese-darkGray border-cheese-lightGray">
              <CardHeader>
                <CardTitle className="text-cheese-gold">
                  {editMode ? 'Editar Producto' : 'Agregar Nuevo Producto'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre del Producto
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej: Queso Manchego"
                      className="bg-cheese-black border-cheese-lightGray"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium mb-1">
                      Precio (€)
                    </label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="0.00"
                      className="bg-cheese-black border-cheese-lightGray"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="barcode" className="block text-sm font-medium mb-1">
                      Código de Barras
                    </label>
                    <Input
                      id="barcode"
                      name="barcode"
                      value={formData.barcode}
                      onChange={handleChange}
                      placeholder="Ej: 8400000123457"
                      className="bg-cheese-black border-cheese-lightGray"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium mb-1">
                      Categoría
                    </label>
                    <Input
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      placeholder="Ej: Semicurado"
                      className="bg-cheese-black border-cheese-lightGray"
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <Button type="submit" className="bg-cheese-gold text-cheese-black hover:bg-cheese-gold/80">
                      {editMode ? 'Actualizar' : 'Agregar'} <Plus className="ml-2 h-4 w-4" />
                    </Button>
                    {editMode && (
                      <Button type="button" variant="outline" onClick={handleCancel}>
                        Cancelar
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Products List */}
            <Card className="bg-cheese-darkGray border-cheese-lightGray">
              <CardHeader>
                <CardTitle className="text-cheese-gold">Productos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md overflow-auto max-h-[500px]">
                  <Table>
                    <TableHeader className="bg-cheese-lightGray">
                      <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Precio (€)</TableHead>
                        <TableHead className="hidden md:table-cell">Código</TableHead>
                        <TableHead className="hidden md:table-cell">Categoría</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id} className="border-b border-cheese-lightGray/30">
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>{product.price.toFixed(2)}</TableCell>
                          <TableCell className="hidden md:table-cell">{product.barcode}</TableCell>
                          <TableCell className="hidden md:table-cell">{product.category}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleEdit(product.id)}
                                className="text-cheese-gold hover:text-cheese-gold/80 hover:bg-cheese-lightGray"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(product.id)}
                                className="text-destructive hover:text-destructive/80 hover:bg-cheese-lightGray"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
