import { useContext } from 'react'
import { CartContext } from '../components/utils/CarritoContext'

const useCart = () => {
    const context = useContext(CartContext)
  if (context === undefined){
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export default useCart
