import img12 from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
         <div className='my-24 relative'>
            <img src={img12} alt="Chef Service" className="w-full h-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-100 opacity-70 p-20 rounded-lg shadow-lg text-center w-3/4">
                <h1 className="text-4xl font-bold mb-4">BISTRO BOSS</h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id libero scelerisque lorem convallis rutrum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id libero scelerisque lorem convallis rutrum.
                </p>
            </div>
        </div>
    );
};

export default BistroBoss;
