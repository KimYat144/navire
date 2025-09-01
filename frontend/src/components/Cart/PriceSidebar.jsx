
const PriceSidebar = ({ cartItems }) => {
    return (
        <div className="flex sticky top-16 sm:h-screen flex-col sm:w-4/12 sm:px-1">

            {/* <!-- nav tiles --> */}
            <div className="flex flex-col bg-white rounded-sm shadow">
                <h1 className="px-6 py-3 border-b font-medium text-gray-500">CHI TIẾT GIÁ</h1>

                <div className="flex flex-col gap-4 p-6 pb-3">
                    <p className="flex justify-between">Giá khuyến mãi ({cartItems.length} sản phẩm) <span>{cartItems.reduce((sum, item) => sum + (item.cuttedPrice * item.quantity), 0).toLocaleString()}đ</span></p>
                    <p className="flex justify-between">Giá  <span className="text-primary-green">{cartItems.reduce((sum, item) => sum + ((item.price * item.quantity) - (item.cuttedPrice * item.quantity) ), 0).toLocaleString()}đ</span></p>
                    <p className="flex justify-between">Phí vận chuyển <span className="text-primary-green">Miễn phí</span></p>

                    <div className="border border-dashed"></div>
                    <p className="flex justify-between text-lg font-medium">Tổng Cộng <span>{cartItems.reduce((sum, item) => sum + ((item.price * item.quantity) - (item.cuttedPrice * item.quantity)), 0).toLocaleString()}đ</span></p>
                    <div className="border border-dashed"></div>

                    <p className="font-medium text-primary-green">Bạn sẽ tiết kiệm được {cartItems.reduce((sum, item) => sum + ((item.cuttedPrice * item.quantity)), 0).toLocaleString()}đ cho đơn hàng này</p>

                </div>

            </div>
            {/* <!-- nav tiles --> */}

        </div>
    );
};

export default PriceSidebar;
