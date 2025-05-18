import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle
                subHeading="Check It Out"
                heading="From Our Menu"
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>

                <div className="md:ml-10">
                    <p>Aug 20, 2020</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente veniam ipsum rerum officia aperiam cupiditate ratione molestias amet esse debitis eligendi nihil culpa, et placeat obcaecati voluptatem tempore ipsa dolore.</p>
                    <button className="btn btn-neutral btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;