import ProductForm from 'components/product/ProductForm'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
  const onSubmit = (data) => {}

  return (
    <div className="card">
      <div className="card-header" data-testid="card-header">
        ویرایش محصول
      </div>
      <div className="card-body">
        <ProductForm onSubmit={onSubmit} mode="edit" />
      </div>
    </div>
  )
}

export default EditProduct
