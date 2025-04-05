
import React, { useEffect, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableFooter } from '../components/ui/table';
import { Minus, Plus, X, Barcode, ShoppingCart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import PrintTicket from '../components/pos/PrintTicket';
import useStore from '../store/useStore';
import { toast } from '../hooks/use-toast';

// Mock product data that would normally come from a database
const mockProducts = [
  { barcode: '8400000123457', name: 'Queso Manchego', price: 22.50 },
  { barcode: '8400000123458', name: 'Queso Brie', price: 15.75 },
  { barcode: '8400000123459', name: 'Queso Azul', price: 18.90 },
  { barcode: '8400000123460', name: 'Queso Gouda', price: 17.25 },
  { barcode: '8400000123461', name: 'Queso Camembert', price: 14.50 },
];

const PointOfSalePage: React.FC = () => {
  const [barcodeInput, setBarcodeInput] = React.useState('');
  const barcodeInputRef = useRef<HTMLInputElement>(null);
  
  const { 
    getCartItems, 
    getCartTotal, 
    addProductToCart, 
    adjustQuantity, 
    deleteProductFromCart, 
    clearCart 
  } = useStore();
  
  const cartItems = useStore(state => state.cartItems);
  const total = useStore(state => state.getCartTotal());

  // Focus on barcode input when component mounts
  useEffect(() => {
    if (barcodeInputRef.current) {
      barcodeInputRef.current.focus();
    }
  }, []);

  const handleBarcodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!barcodeInput.trim()) return;
    
    // Find product by barcode
    const product = mockProducts.find(p => p.barcode === barcodeInput.trim());
    
    if (product) {
      addProductToCart(product);
      toast({
        title: "Producto añadido",
        description: `${product.name} añadido al carrito`,
      });
    } else {
      toast({
        title: "Producto no encontrado",
        description: "El código no corresponde a ningún producto",
        variant: "destructive"
      });
      console.log('Producto no encontrado');
    }
    
    // Reset barcode input and focus
    setBarcodeInput('');
    if (barcodeInputRef.current) {
      barcodeInputRef.current.focus();
    }
  };

  const handleCompleteSale = () => {
    // In a real app, this would handle payment processing
    toast({
      title: "Venta completada",
      description: "La venta ha sido finalizada correctamente",
      variant: "default"
    });
    clearCart();
    setBarcodeInput('');
    if (barcodeInputRef.current) {
      barcodeInputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cheese-black">
      <Header />
      <main className="flex-grow p-6">
        <div className="container-custom mx-auto py-8">
          <h1 className="text-3xl font-serif mb-8 text-cheese-gold flex items-center">
            <ShoppingCart className="mr-2" /> Punto de Venta
          </h1>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left side - Barcode scanner */}
            <Card className="bg-cheese-darkGray border-cheese-lightGray lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-cheese-gold flex items-center">
                  <Barcode className="mr-2" /> Escanear Producto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBarcodeSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      ref={barcodeInputRef}
                      type="text"
                      value={barcodeInput}
                      onChange={(e) => setBarcodeInput(e.target.value)}
                      placeholder="Escanee o ingrese código"
                      className="pr-10 bg-cheese-black border-cheese-lightGray"
                      autoFocus
                    />
                    <Barcode className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cheese-gold h-5 w-5" />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-cheese-gold text-cheese-black hover:bg-cheese-gold/80"
                  >
                    Agregar
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-cheese-black/50 rounded-md">
                  <h3 className="text-sm font-medium mb-2">Instrucciones:</h3>
                  <p className="text-xs text-cheese-white/70">
                    Escanee o ingrese el código de barras del producto. Para facilitar las pruebas, 
                    puede usar los siguientes códigos:
                  </p>
                  <ul className="mt-2 text-xs space-y-1 text-cheese-white/70">
                    <li>8400000123457 - Queso Manchego</li>
                    <li>8400000123458 - Queso Brie</li>
                    <li>8400000123459 - Queso Azul</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Right side - Cart items */}
            <Card className="bg-cheese-darkGray border-cheese-lightGray lg:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-cheese-gold">Carrito de Compra</CardTitle>
                {cartItems.length > 0 && <PrintTicket />}
              </CardHeader>
              <CardContent>
                <div className="rounded-md overflow-auto max-h-[500px]">
                  <Table>
                    <TableHeader className="bg-cheese-lightGray">
                      <TableRow>
                        <TableHead>Producto</TableHead>
                        <TableHead className="text-right">Precio (€)</TableHead>
                        <TableHead className="text-center">Cantidad</TableHead>
                        <TableHead className="text-right">Subtotal</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cartItems.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-6 text-cheese-white/60">
                            No hay productos en el carrito. Escanee un código para agregar.
                          </TableCell>
                        </TableRow>
                      ) : (
                        cartItems.map((item) => (
                          <TableRow key={item.barcode} className="border-b border-cheese-lightGray/30">
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell className="text-right">{item.price.toFixed(2)}</TableCell>
                            <TableCell>
                              <div className="flex items-center justify-center">
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => adjustQuantity(item.barcode, -1)}
                                  className="h-8 w-8 p-0 text-cheese-white"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => adjustQuantity(item.barcode, 1)}
                                  className="h-8 w-8 p-0 text-cheese-white"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                            <TableCell className="text-right font-medium">
                              {item.subtotal.toFixed(2)}
                            </TableCell>
                            <TableCell>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteProductFromCart(item.barcode)}
                                className="h-8 w-8 p-0 text-destructive hover:text-destructive/80 hover:bg-cheese-lightGray"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                    {cartItems.length > 0 && (
                      <TableFooter className="bg-cheese-lightGray/30">
                        <TableRow>
                          <TableCell colSpan={3} className="text-right font-bold">
                            Total:
                          </TableCell>
                          <TableCell className="text-right font-bold text-lg text-cheese-gold">
                            {total.toFixed(2)} €
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableFooter>
                    )}
                  </Table>
                </div>
                
                {cartItems.length > 0 && (
                  <div className="mt-6 flex justify-end">
                    <Button 
                      onClick={handleCompleteSale}
                      className="bg-cheese-gold text-cheese-black hover:bg-cheese-gold/80 text-base px-8 py-6"
                    >
                      Finalizar Venta
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PointOfSalePage;
