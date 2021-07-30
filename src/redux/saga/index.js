import { takeLatest , call, put} from "redux-saga/effects";//takeLatest dùng để xử lý dữ liệu cuối cùng
//call dùng để gọi đến 1 function
import * as actions from '../actions';
import * as api from '../../api';

function* fetchProductsSaga(action){
    try {
        
        const products = yield call(api.fetchProducts);//call goi 1 function
        yield put(actions.getProducts.getProductsSuccess(products.data));//dispatch 1 action
      } catch (err) {
        console.error(err);
        yield put(actions.getProducts.getProductsFailure(err));
      }
}

function* createProductSaga(action){
  try {
    const product = yield call(api.createProduct, action.payload);
    yield put(actions.createProduct.createProductSuccess(product.data));
  } catch (err) {
    yield put(actions.createProduct.createProductFalure(err));
  }
}

function* mySaga(){
    yield takeLatest(actions.getProducts.getProductsRequest, fetchProductsSaga);
    yield takeLatest(actions.createProduct.createProductRequest, createProductSaga);
}

export default mySaga;