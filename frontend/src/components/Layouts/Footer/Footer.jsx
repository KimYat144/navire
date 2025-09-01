import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "About",
    links: [
      {
        name: "Dịch vụ vệ sinh máy lạnh",
        redirect: "https://www.dienmayxanh.com/tho-dien-may-xanh?itm_source=footer&itm_medium=thodmx&itm_campaign=vsml",
      },
      {
        name: "Lịch sử mua hàng",
        redirect: "http://localhost:3000/cart",
      },
      {
        name: "Tìm hiểu về mua trả góp",
        redirect: "https://www.dienmayxanh.com/tra-gop/",
      },
      {
        name: "Chính sách đổi trả",
        redirect: "https://stories.flipkart.com",
      },
      {
        name: "Chất lượng phục vụ",
        redirect: "https://stories.flipkart.com/category/top-stories/news",
      },
      {
        name: "Chính sách giao hàng",
        redirect: "https://www.flipkartwholesale.com",
      }
    ]
  },
  {
    title: "help",
    links: [
      {
        name: "Thanh toán",
        redirect: "https://www.flipkart.com/pages/payments",
      },
      {
        name: "Giao hàng",
        redirect: "https://www.flipkart.com/pages/shipping",
      },
      {
        name: "Hủy đơn hàng",
        redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
      },
      {
        name: "FAQ",
        redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
      }
    ]
  },
  {
    title: "Chính sách",
    links: [
      {
        name: "Tuyển dụng",
        redirect: "https://www.flipkart.com/pages/returnpolicy",
      },
      {
        name: "Góp ý, khiếu nại",
        redirect: "https://www.flipkart.com/pages/terms",
      },
      {
        name: "Chi nhánh",
        redirect: "https://www.flipkart.com/pages/paymentsecurity",
      },
      {
        name: "Phiếu mua hàng",
        redirect: "https://www.flipkart.com/pages/privacypolicy",
      },
      {
        name: "EPR Compliance",
        redirect: "https://www.flipkart.com/pages/ewaste-compliance-tnc",
      },
    ]
  },
  {
    title: "Mạng xã hội",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/flipkart",
      },
      {
        name: "Twitter",
        redirect: "https://twitter.com/flipkart",
      },
      {
        name: "YouTube",
        redirect: "https://www.youtube.com/flipkart",
      }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}

            </div>

            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Liên hệ</h2>
                <p className="mt-2 leading-5">Gọi mua:<a className="text-primary-blue" href="tel:1900 232 461">1900 232 46 (8:00 - 21:30) </a><br />
                Khiếu nại: <a className="text-primary-blue" href="tel:18002029898">1800.1063 (8:00 - 21:30)</a><br />
                Bảo hành: <a className="text-primary-blue" href="tel:18002029898">1900 232 46 (8:00 - 21:30)</a><br />
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">© 2014. Công ty cổ phần Trang Sức: </h2>
                <p className="mt-2 leading-5">GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007.
                GPMXH: 21/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 11/01/2021.
                Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh.
                  Telephone: <a className="text-primary-blue" href="tel:18002029898">1800 202 9898</a>
                </p>
              </div>
            </div>

          </footer>
          {/* <!-- footer ends --> */}

          <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            <a href="https://seller.flipkart.com/sell-online" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><WorkIcon sx={{ fontSize: "20px" }} /></span> Mua Online
            </a>
            <a href="https://brands.flipkart.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><StarsIcon sx={{ fontSize: "20px" }} /></span> Quảng cáo
            </a>
            <a href="https://www.flipkart.com/the-gift-card-store" rel="noreferrer" target="_blank" className="flex items-center gap-2">
              <span className="text-yellow-400"><CardGiftcardIcon sx={{ fontSize: "20px" }} /></span> Phiếu quà tặng
            </a>
            <a href="https://www.flipkart.com/helpcentre" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Chăm sóc khách hàng
            </a>

            <span>&copy; 2007-{new Date().getFullYear()} Flipkart.com</span>
            <img draggable="false" src={paymentMethods} alt="Card Payment" />
          </div>
        </>
      )}
    </>
  )
};

export default Footer;
