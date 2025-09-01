import { useEffect } from 'react';
import Categories from '../Layouts/Categories';
import Banner from './Banner/Banner';
import DealSlider from './DealSlider/DealSlider';
import ProductSlider from './ProductSlider/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData';

const Home = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Shop Trang Sức Cao Cấp" />
      <Categories />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner />
        <DealSlider title={"DEAL HOT CUỐI TUẦN"} />
        {/* {!loading && <ProductSlider title={"Suggested for You"} tagline={"Based on Your Activity"} />} */}
        <DealSlider title={"Top Sản Phẩm Bán Chạy"} />
        {!loading && <ProductSlider title={"Sản phẩm được ưu thích"} tagline={"Dựa trên sở thích của bạn"} />}
        <DealSlider title={"Ưu đãi hàng đầu"} />
        {!loading && <ProductSlider title={"Thông tin khuyến mãi"} tagline={"Tích điểm quà Vip"} />}
      </main>
    </>
  );
};
export default Home;
