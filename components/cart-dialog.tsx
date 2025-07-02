"use client"

import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCart } from "@/lib/context/cart-context"
import Image from "next/image"

interface CartDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCheckout: () => void
}

export function CartDialog({ open, onOpenChange, onCheckout }: CartDialogProps) {
  const { state, dispatch } = useCart()

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: "REMOVE_ITEM", payload: { productId } })
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } })
    }
  }

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId } })
  }

  const deliveryFee = state.total >= 2000 ? 0 : 300
  const finalTotal = state.total + deliveryFee

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Coșul de cumpărături ({state.itemCount} produse)</span>
          </DialogTitle>
        </DialogHeader>

        {state.items.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 mb-4">Coșul dumneavoastră este gol</p>
            <Button onClick={() => onOpenChange(false)}>Continuați cumpărăturile</Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <Image
                    src={item.product.images[0] || "/placeholder.svg"}
                    alt={item.product.name}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.product.name}</h4>
                    <p className="text-sm text-gray-500">
                      {typeof item.product.price === "number"
                        ? `${item.product.price.toFixed(2)} RON/${item.product.unit}`
                        : "Preț la cerere"}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="text-right">
                    {typeof item.product.price === "number" ? (
                      <p className="font-medium text-sm">{(item.product.price * item.quantity).toFixed(2)} RON</p>
                    ) : (
                      <p className="text-sm text-orange-600">Preț la cerere</p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>{state.total.toFixed(2)} RON</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Livrare:</span>
                <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                  {deliveryFee === 0 ? "GRATUITĂ" : `${deliveryFee.toFixed(2)} RON`}
                </span>
              </div>
              {state.total < 2000 && (
                <p className="text-xs text-gray-500">
                  Adăugați încă {(2000 - state.total).toFixed(2)} RON pentru livrare gratuită
                </p>
              )}
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>{finalTotal.toFixed(2)} RON</span>
              </div>
            </div>

            <div className="flex space-x-2 pt-4">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => onOpenChange(false)}>
                Continuați cumpărăturile
              </Button>
              <Button
                className="flex-1 w-full bg-orange-600 hover:bg-orange-700"
                onClick={onCheckout}
              >
                Finalizați comanda
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
