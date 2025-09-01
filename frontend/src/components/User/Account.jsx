import { useEffect } from 'react';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Layouts/Loader';
import MinCategory from '../Layouts/MinCategory';
import MetaData from '../Layouts/MetaData';

const Account = () => {

    const navigate = useNavigate();

    const { user, loading, isAuthenticated } = useSelector(state => state.user)

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login")
        }
    }, [isAuthenticated, navigate]);

    const getLastName = () => {
        const nameArray = user.name.split(" ");
        return nameArray[nameArray.length - 1];
    }

    return (
        <>
            <MetaData title="My Profile" />

            {loading ? <Loader /> :
                <>
                    <MinCategory />
                    <main className="w-full mt-12 sm:mt-0">

                        {/* <!-- row --> */}
                        <div className="flex gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7">

                            <Sidebar activeTab={"profile"} />

                            {/* <!-- details column --> */}
                            <div className="flex-1 overflow-hidden shadow bg-white">
                                {/* <!-- edit info container --> */}
                                <div className="flex flex-col gap-12 m-4 sm:mx-8 sm:my-6">
                                    {/* <!-- personal info --> */}
                                    <div className="flex flex-col gap-5 items-start">
                                        <span className="font-medium text-lg">Thông tin cá nhân <Link to="/account/update" className="text-sm text-primary-blue font-medium ml-8 cursor-pointer">Thay đổi</Link></span>

                                        <div className="flex flex-col sm:flex-row items-center gap-3" id="personalInputs">
                                            <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                                                <label className="text-xs text-gray-500">Họ</label>
                                                <input type="text" value={user.name.split(" ", 1)} className="text-sm outline-none border-none cursor-not-allowed text-gray-500" disabled />
                                            </div>
                                            <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                                                <label className="text-xs text-gray-500">Tên</label>
                                                <input type="text" value={getLastName()} className="text-sm outline-none border-none cursor-not-allowed text-gray-500" disabled />
                                            </div>
                                        </div>

                                        {/* <!-- gender --> */}
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-sm">Giới tính</h2>
                                            <div className="flex items-center gap-8" id="radioInput">
                                                <div className="flex items-center gap-4 inputs text-gray-500 cursor-not-allowed">
                                                    <input type="radio" name="gender" checked={user.gender === "male"} id="male" className="h-4 w-4 cursor-not-allowed" disabled />
                                                    <label htmlFor="male" className="cursor-not-allowed">Nam</label>
                                                </div>
                                                <div className="flex items-center gap-4 inputs text-gray-500 cursor-not-allowed">
                                                    <input type="radio" name="gender" checked={user.gender === "female"} id="female" className="h-4 w-4 cursor-not-allowed" disabled />
                                                    <label htmlFor="female" className="cursor-not-allowed">Nữ</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- gender --> */}

                                    </div>
                                    {/* <!-- personal info --> */}

                                    {/* <!-- email address info --> */}
                                    <div className="flex flex-col gap-5 items-start">
                                        <span className="font-medium text-lg">Địa chỉ Email
                                            <Link to="/account/update" className="text-sm text-primary-blue font-medium ml-3 sm:ml-8 cursor-pointer">Thay đổi</Link>
                                            <Link to="/password/update" className="text-sm text-primary-blue font-medium ml-3 sm:ml-8">Thay đổi mật khẩu</Link>
                                        </span>

                                        <div className="flex items-center gap-3">
                                            <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                                                <label className="text-xs text-gray-500">Địa chỉ Email</label>
                                                <input type="email" value={user.email} className="text-sm outline-none border-none cursor-not-allowed text-gray-500" disabled />
                                            </div>
                                        </div>

                                    </div>
                                    {/* <!-- email address info --> */}

                                    {/* <!-- mobile number info --> */}
                                    <div className="flex flex-col gap-5 items-start">
                                        <span className="font-medium text-lg">Số điện thoại
                                            <span className="text-sm text-primary-blue font-medium ml-3 sm:ml-8 cursor-pointer" id="mobEditBtn">Thay đổi</span>
                                        </span>

                                        <div className="flex items-center gap-3">
                                            <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                                                <label className="text-xs text-gray-500">Số điện thoại</label>
                                                <input type="tel" value="" className="text-sm outline-none border-none text-gray-500 cursor-not-allowed" disabled />
                                            </div>
                                        </div>

                                    </div>
                                    {/* <!-- mobile number info --> */}

                                    {/* <!-- faqs --> */}
                                    {/* <div className="flex flex-col gap-4 mt-4">
                                        <span className="font-medium text-lg mb-2">FAQS</span>
                                        <h4 className="text-sm font-medium">Điều gì xảy ra khi tôi cập nhật địa chỉ email (hoặc số điện thoại di động) của mình?</h4>
                                        <p className="text-sm">ID email đăng nhập (hoặc số điện thoại di động) của chúng tôi cũng thay đổi. Bạn sẽ nhận được tất cả thông tin liên quan đến tài khoản của mình trên địa chỉ email (hoặc số điện thoại di động) đã cập nhật</p>

                                        <h4 className="text-sm font-medium">Khi nào tài khoản Flipkart của tôi sẽ được cập nhật địa chỉ email (hoặc số điện thoại di động) mới?</h4>
                                        <p className="text-sm">Nó xảy ra ngay khi bạn xác nhận mã xác minh được gửi đến email (hoặc điện thoại di động) của bạn và lưu các thay đổi.</p>

                                        <h4 className="text-sm font-medium">Điều gì xảy ra với tài khoản Flipkart hiện tại của tôi khi tôi cập nhật địa chỉ email (hoặc số điện thoại di động)?</h4>
                                        <p className="text-sm">Việc cập nhật địa chỉ email (hoặc số điện thoại di động) không làm mất hiệu lực tài khoản của bạn. Tài khoản của bạn vẫn có đầy đủ chức năng. Bạn sẽ tiếp tục xem lịch sử Đơn hàng, thông tin đã lưu và thông tin cá nhân của mình.</p>

                                        <h4 className="text-sm font-medium">Tài khoản Người bán của tôi có bị ảnh hưởng khi tôi cập nhật địa chỉ email của mình không?</h4>
                                        <p className="text-sm">Flipkart có chính sách 'đăng nhập một lần'. Mọi thay đổi cũng sẽ phản ánh trong tài khoản Người bán của bạn.</p>

                                    </div> */}
                                    {/* <!-- faqs --> */}

                                    {/* <!-- deactivate account --> */}
                                    <Link className="text-sm text-primary-blue font-medium" to="/">Vô hiệu hóa tài khoản</Link>
                                    {/* <!-- deactivate account --> */}
                                </div>
                                {/* <!-- edit info container --> */}

                                {/* <img draggable="false" className="w-full object-contain" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/myProfileFooter_4e9fe2.png" alt="footer" /> */}
                            </div>
                            {/* <!-- details column --> */}
                        </div>
                    </main>
                </>
            }
        </>
    );
};

export default Account;
