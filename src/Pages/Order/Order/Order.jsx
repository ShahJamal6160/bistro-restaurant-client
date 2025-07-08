import { useState } from 'react';
import orderCover from '../../../assets/shop/order.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();

    const category = useParams();

    console.log(category);

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
   

    return (
        <div>
            <Cover img={orderCover} title='Order Food'></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>

                    {/* <div className='grid md:grid-cols-3 gap-10'>
                        {
                            salad.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div> */}

                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* <div className='grid md:grid-cols-3 gap-10'>
                        {
                            pizza.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div> */}

                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* <div className='grid md:grid-cols-3 gap-10'>
                        {
                            soup.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div> */}

                    <OrderTab items={soup}></OrderTab>

                </TabPanel>
                <TabPanel>
                    {/* <div className='grid md:grid-cols-3 gap-10'>
                        {
                            dessert.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div> */}
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    {/* <div className='grid md:grid-cols-3 gap-10'>
                        {
                            drinks.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div> */}

                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;