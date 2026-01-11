import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {getImgUrl} from '../../utils/getImgUrl'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

 
const BookCard = ({book}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    
    dispatch(addToCart(product))
  }
  return (
    <div className="max-w-sm mx-auto rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300">
  <div
    className="p-4 flex flex-col gap-3">
    <div className="w-full h-64 flex items-center justify-center bg-gray-100">
      <Link to={`/books/${book._id}`}>
        <img
          src={getImgUrl(book.coverImage)}
          alt={book.title}
          className="max-w-full max-h-full object-cover"/>
      </Link>
    </div>

    <div className='flex flex-col gap-3'>
      <Link to={`/books/${book._id}`}>
      <h3 className="text-gl font-semibold hover:text-blue-600 ">
          {book.title}
          </h3></Link>
      <p className="text-gray-600 text-sm">{book?.description.length > 80 ? `${book.
      description.slice(0, 80)}...` : book.description}</p>
      <p className="font-medium">
        ${book.newPrice} <span className="line-through text-grey-500 ml-2">
            $ {book.oldPrice}
        </span>
      </p>
      <button 
      onClick={() => handleAddToCart(book)}
      className="btn-primary px-6 space-x-1 flex items-center justify-center gap-2 py-2">
        <FiShoppingCart className="" />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</div>
  )
}

export default BookCard





