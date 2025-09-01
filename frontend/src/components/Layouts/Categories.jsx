import trangsucnam from '../../assets/images/Categories/trangsucnam.png'; 
import trangsucnu from '../../assets/images/Categories/trangsucnu.png'; 
import dongho from '../../assets/images/Categories/dongho.png';
import trangsuccuoi from '../../assets/images/Categories/trangsuccuoi.png';
import treem from '../../assets/images/Categories/treem.png';
import phongthuy from '../../assets/images/Categories/phongthuy.png';
import botrangsuc from '../../assets/images/Categories/botrangsuc.png';
import { Link } from 'react-router-dom';

const catNav = [
    {
        name: "Trang Sức Nam",
        icon: trangsucnam,
    },
    {
        name: "Trang Sức Nữ",
        icon: trangsucnu,
    },
    {
        name: "Đồng Hồ",
        icon: dongho,
    },
    {
        name: "Trang Sức Cưới",
        icon: trangsuccuoi,
    },
    {
        name: "Trang Sức Trẻ Em",
        icon: treem,
    },
    {
        name: "Trang Sức Phong Thủy",
        icon: phongthuy,
    },
    {
        name: "Bộ Trang Sức",
        icon: botrangsuc,
    },
   
]

const Categories = () => {
    return (
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">

            <div className="flex items-center justify-between mt-4">

                {catNav.map((item, i) => (
                    <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-16 w-16">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default Categories;
