
import React from 'react';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import useStore, { CartItem } from '@/store/useStore';

const PrintTicket: React.FC = () => {
  const { getCartItems, getCartTotal } = useStore();
  
  const printTicket = () => {
    const cartItems = getCartItems();
    const total = getCartTotal();
    
    if (cartItems.length === 0) {
      return;
    }
    
    // Crear el contenido del ticket
    const ticketContent = generateTicketHtml(cartItems, total);
    
    // Abrir ventana de impresión
    const printWindow = window.open('', '_blank', 'width=300,height=600');
    
    if (printWindow) {
      printWindow.document.write(ticketContent);
      printWindow.document.close();
      printWindow.focus();
      // Imprimir automáticamente
      setTimeout(() => {
        printWindow.print();
        // Cerrar ventana después de imprimir o cancelar
        printWindow.addEventListener('afterprint', () => {
          printWindow.close();
        });
      }, 500);
    }
  };
  
  const generateTicketHtml = (items: CartItem[], total: number) => {
    const currentDate = new Date().toLocaleDateString('es-ES');
    const currentTime = new Date().toLocaleTimeString('es-ES');
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Ticket - Queso Moderno</title>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: 'Courier New', monospace;
            width: 300px;
            margin: 0 auto;
            padding: 5px;
            font-size: 12px;
          }
          .header {
            text-align: center;
            margin-bottom: 10px;
            font-weight: bold;
          }
          .date-time {
            text-align: center;
            margin-bottom: 15px;
            font-size: 11px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            text-align: left;
            padding: 3px 0;
          }
          .right {
            text-align: right;
          }
          .total {
            margin-top: 10px;
            border-top: 1px dashed black;
            padding-top: 5px;
            font-weight: bold;
          }
          .footer {
            margin-top: 15px;
            text-align: center;
            font-size: 11px;
          }
          @media print {
            body {
              width: 100%;
              max-width: 80mm; /* Ancho estándar de papel térmico */
            }
            @page {
              margin: 0;
              size: 80mm auto; /* Ancho estándar de papel térmico */
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          QUESO MODERNO
        </div>
        <div class="date-time">
          Fecha: ${currentDate} - Hora: ${currentTime}
        </div>
        
        <table>
          <tr>
            <th>Producto</th>
            <th class="right">Cant.</th>
            <th class="right">Precio</th>
            <th class="right">Total</th>
          </tr>
          ${items.map(item => `
          <tr>
            <td>${item.name}</td>
            <td class="right">${item.quantity}</td>
            <td class="right">${item.price.toFixed(2)} €</td>
            <td class="right">${item.subtotal.toFixed(2)} €</td>
          </tr>
          `).join('')}
        </table>
        
        <div class="total">
          <table>
            <tr>
              <td>TOTAL:</td>
              <td class="right">${total.toFixed(2)} €</td>
            </tr>
          </table>
        </div>
        
        <div class="footer">
          ¡Gracias por su compra!
          <br />
          www.quesomoderno.com
        </div>
      </body>
      </html>
    `;
  };
  
  return (
    <Button 
      onClick={printTicket} 
      variant="outline" 
      className="flex items-center gap-2 bg-cheese-darkGray border-cheese-lightGray/50 hover:bg-cheese-lightGray/30"
    >
      <Printer size={18} /> Imprimir Ticket
    </Button>
  );
};

export default PrintTicket;
