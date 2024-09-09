import React, { useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Box from '../components/Box';
import Card from '../components/Card';
import Test from '../components/Test';
import { motion,useAnimation, useScroll, useTransform  } from 'framer-motion';

const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
const Dashboard = () => {
    const [isAsideOpen, setIsAsideOpen] = useState(true);
    const controls = useAnimation();
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    useEffect(() => {
        controls.start({ opacity: 1, scale: 1 });
      }, [controls]);

    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen);
    };

    const items = [
        { id: 1, title: 'Item 1', description: 'Description 1' },
        { id: 2, title: 'Item 2', description: 'Description 2' },
        { id: 3, title: 'Item 3', description: 'Description 3' },
        { id: 4, title: 'Item 4', description: 'Description 4' },
    ];

    return (
        <div className="flex h-screen">
            <Aside isOpen={isAsideOpen} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isAsideOpen ? 'ml-64' : 'ml-0'}`}>
                <Navbar toggleAside={toggleAside} isAsideOpen={isAsideOpen} />
                <div className="flex-1 overflow-auto bg-white">
                    <div className="p-2 bg-white m-5 rounded-2xl min-h-screen">
                        <div className="flex flex-col gap-10 overflow-x-hidden">
                         <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={controls}
                        transition={{ duration: 1.5 }}
                        className="box"
                        style={{ fontSize: '48px' }}  // ปรับขนาดตัวอักษรที่นี่
                        >
                       <p className='text-orange-600 ms-8'>โครงการ MRV</p>
                        </motion.div>
                            <motion.section 
                                variants={gridContainerVariants}
                                initial="hidden" 
                                animate="show" 
                                className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-4 lg:grid-cols-4 px-10 gap-10"
                            >
                                {items.map((item) => (
                                    <motion.div 
                                        key={item.id}
                                        variants={gridItemVariants}
                                        className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10 hover:bg-gray-300"
                                    >
                                        {/* You can put content here */}
                                    </motion.div>
                                ))}
                            </motion.section>

                            <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-3 lg:grid-cols-3  gap-4 p-4"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square p-8 mx-4 rounded-lg "
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam saepe facilis atque? Perspiciatis saepe exercitationem distinctio ab voluptates, officia tenetur molestiae aperiam consectetur maiores optio provident dicta ad, aspernatur nesciunt quae blanditiis cum architecto eaque sit quo illum nam! Pariatur, maiores voluptatibus. Nam eos ratione quo rem? Natus fugit, ipsam laudantium, corporis soluta amet consequuntur laboriosam maxime voluptatum eaque eos, excepturi minima quo? Provident, ut? Commodi corporis necessitatibus suscipit minima excepturi culpa quos eos? Illo dolore quaerat fuga non laborum deserunt ipsam animi praesentium numquam ratione dolor, reprehenderit et facere ea labore omnis est odio minima alias? Ut ipsum rerum earum quasi in nisi quas deleniti molestias modi, blanditiis maiores alias reprehenderit, expedita quam soluta vitae perferendis et saepe tempore commodi. Quia aspernatur, excepturi voluptatem est harum explicabo nihil libero ipsam mollitia voluptates earum recusandae nemo consequatur incidunt vel quidem repudiandae repellat. Id ut illo animi molestias voluptatem culpa commodi. {index + 1}
        </motion.div>
      ))}
    </motion.div>

   <div className="grid grid-cols-12">
    <Card style="col-span-12 lg:col-span-6 block border-gray-200  rounded-2xl bg-gray-50 ms-3 overflow-auto max-h-80 hover:bg-gray-100 p-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, voluptas cum? Voluptas facere amet doloremque quis nesciunt porro a tenetur consectetur, ea impedit natus, sapiente beatae veniam nisi architecto. Officia sint excepturi temporibus rerum quis nemo, et dolorum natus explicabo, itaque quasi amet. Eaque ipsam, inventore fuga eveniet facere dolore praesentium laudantium nemo, excepturi officiis vero ad, quibusdam sint soluta blanditiis? Dolorem vero quisquam incidunt optio non et reiciendis aliquid distinctio a voluptate tenetur nobis accusamus debitis velit, rem minima. Voluptatem, perspiciatis molestiae laborum velit consectetur nam perferendis blanditiis dignissimos soluta illum cum modi ullam commodi ea doloremque magnam adipisci pariatur esse totam deserunt eligendi non dicta! Molestias doloremque distinctio culpa explicabo. Optio fugit perferendis nesciunt, error quo ad unde magni placeat expedita quis. Ab mollitia aliquid non dolores accusamus assumenda esse vel! Aliquam accusantium fuga libero excepturi fugiat voluptates, expedita sequi tempore nesciunt aperiam quis cum dicta, voluptatibus culpa vitae eum reprehenderit corrupti neque? Facere sint, enim tempore suscipit labore aut fuga quisquam voluptatibus repellendus ea velit, incidunt reiciendis nesciunt dolores molestiae architecto repellat! Quo dolorem quasi quas commodi soluta ex consequatur officiis totam quia tempore ipsum explicabo laudantium adipisci ullam expedita amet impedit delectus, quis neque optio sunt. Sequi error excepturi nam quod hic odio inventore labore quo reiciendis omnis? Aliquid laboriosam illum architecto enim molestias numquam cum deleniti explicabo tenetur, harum possimus, voluptatum ullam ab tempore veritatis perspiciatis et molestiae qui porro esse, fugit repellat pariatur! Dolor veniam, delectus molestias animi suscipit ullam vel, quasi atque voluptates dicta, accusantium earum fugit libero hic quidem qui et. Iure dignissimos dolorem iste vel quibusdam ex consectetur quod, reprehenderit beatae ad nemo cum hic libero unde qui asperiores. Neque ab, rerum consequatur in, dolores amet cum atque accusamus facere accusantium omnis expedita explicabo nobis maxime eligendi quae. Quibusdam quos a commodi vero corrupti qui minima tenetur ullam accusantium! Vero reiciendis dolorum aliquam praesentium optio deserunt neque exercitationem! Doloribus earum sunt quibusdam distinctio officia, nihil repellendus reiciendis sed provident, quisquam nobis, officiis in ipsam ipsa numquam consequatur expedita dolorem cupiditate omnis beatae. Accusantium illum minus perferendis, voluptatibus consectetur eius dolorem blanditiis at placeat quisquam iusto delectus aspernatur numquam! Ipsum dignissimos minima quisquam hic natus sapiente quos dolorum qui ipsam eius numquam quaerat voluptate at nihil libero, nisi quas ducimus assumenda omnis labore sequi vero ratione repudiandae? Ut esse, nam suscipit earum recusandae, doloremque eligendi maiores quod voluptates enim quam porro, aliquam quia maxime molestias? Quisquam hic impedit blanditiis laboriosam corporis nobis, sequi fugit necessitatibus id nisi harum adipisci labore rerum sint, sed officiis eaque minus eos minima nihil. Ut quo sed cum voluptatem excepturi et, enim iste laudantium quaerat quibusdam, perferendis maiores, illo quidem autem inventore aliquam amet accusamus labore omnis laboriosam cupiditate veritatis cumque. Eligendi minima quod nemo itaque eos nihil minus delectus numquam, porro incidunt! Est laudantium distinctio, praesentium excepturi ab id, ipsa quasi voluptas optio ipsum quis sequi, mollitia in eos placeat tempora laborum autem qui! Incidunt facere dolore fuga aperiam ab necessitatibus exercitationem dolorem quaerat vel quo!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio pariatur tempora ratione iure, eos laudantium? Commodi, quis officiis illum possimus incidunt sunt quas omnis molestiae quasi, modi fugit doloribus odit.
    </Card>
    <Card style="col-span-12 lg:col-span-6 block border-gray-200 bg-gray-50 ms-3 overflow-auto max-h-80 hover:bg-gray-100 p-5 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, voluptas cum? Voluptas facere amet doloremque quis nesciunt porro a tenetur consectetur, ea impedit natus, sapiente beatae veniam nisi architecto. Officia sint excepturi temporibus rerum quis nemo, et dolorum natus explicabo, itaque quasi amet. Eaque ipsam, inventore fuga eveniet facere dolore praesentium laudantium nemo, excepturi officiis vero ad, quibusdam sint soluta blanditiis? Dolorem vero quisquam incidunt optio non et reiciendis aliquid distinctio a voluptate tenetur nobis accusamus debitis velit, rem minima. Voluptatem, perspiciatis molestiae laborum velit consectetur nam perferendis blanditiis dignissimos soluta illum cum modi ullam commodi ea doloremque magnam adipisci pariatur esse totam deserunt eligendi non dicta! Molestias doloremque distinctio culpa explicabo. Optio fugit perferendis nesciunt, error quo ad unde magni placeat expedita quis. Ab mollitia aliquid non dolores accusamus assumenda esse vel! Aliquam accusantium fuga libero excepturi fugiat voluptates, expedita sequi tempore nesciunt aperiam quis cum dicta, voluptatibus culpa vitae eum reprehenderit corrupti neque? Facere sint, enim tempore suscipit labore aut fuga quisquam voluptatibus repellendus ea velit, incidunt reiciendis nesciunt dolores molestiae architecto repellat! Quo dolorem quasi quas commodi soluta ex consequatur officiis totam quia tempore ipsum explicabo laudantium adipisci ullam expedita amet impedit delectus, quis neque optio sunt. Sequi error excepturi nam quod hic odio inventore labore quo reiciendis omnis? Aliquid laboriosam illum architecto enim molestias numquam cum deleniti explicabo tenetur, harum possimus, voluptatum ullam ab tempore veritatis perspiciatis et molestiae qui porro esse, fugit repellat pariatur! Dolor veniam, delectus molestias animi suscipit ullam vel, quasi atque voluptates dicta, accusantium earum fugit libero hic quidem qui et. Iure dignissimos dolorem iste vel quibusdam ex consectetur quod, reprehenderit beatae ad nemo cum hic libero unde qui asperiores. Neque ab, rerum consequatur in, dolores amet cum atque accusamus facere accusantium omnis expedita explicabo nobis maxime eligendi quae. Quibusdam quos a commodi vero corrupti qui minima tenetur ullam accusantium! Vero reiciendis dolorum aliquam praesentium optio deserunt neque exercitationem! Doloribus earum sunt quibusdam distinctio officia, nihil repellendus reiciendis sed provident, quisquam nobis, officiis in ipsam ipsa numquam consequatur expedita dolorem cupiditate omnis beatae. Accusantium illum minus perferendis, voluptatibus consectetur eius dolorem blanditiis at placeat quisquam iusto delectus aspernatur numquam! Ipsum dignissimos minima quisquam hic natus sapiente quos dolorum qui ipsam eius numquam quaerat voluptate at nihil libero, nisi quas ducimus assumenda omnis labore sequi vero ratione repudiandae? Ut esse, nam suscipit earum recusandae, doloremque eligendi maiores quod voluptates enim quam porro, aliquam quia maxime molestias? Quisquam hic impedit blanditiis laboriosam corporis nobis, sequi fugit necessitatibus id nisi harum adipisci labore rerum sint, sed officiis eaque minus eos minima nihil. Ut quo sed cum voluptatem excepturi et, enim iste laudantium quaerat quibusdam, perferendis maiores, illo quidem autem inventore aliquam amet accusamus labore omnis laboriosam cupiditate veritatis cumque. Eligendi minima quod nemo itaque eos nihil minus delectus numquam, porro incidunt! Est laudantium distinctio, praesentium excepturi ab id, ipsa quasi voluptas optio ipsum quis sequi, mollitia in eos placeat tempora laborum autem qui! Incidunt facere dolore fuga aperiam ab necessitatibus exercitationem dolorem quaerat vel quo!
    </Card>
   </div>
   <div className="grid grid-cols-12">
   <Card style="col-span-12 lg:col-span-12 block border-gray-200 bg-slate-800  ms-3 p-5 rounded-3xl">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam deserunt mollitia iste, asperiores doloribus? Officiis saepe fugit nam tenetur aliquid maiores animi minus, officia mollitia necessitatibus assumenda, nesciunt illum, omnis impedit. Ullam praesentium error ex non similique sed rem hic voluptas. Harum, dolore! Eveniet autem molestiae voluptatem quod. Ut similique sed tenetur. Non dignissimos temporibus est explicabo quidem eaque ut harum consequuntur! Libero temporibus iusto beatae, quo et ut nesciunt, reiciendis corrupti sapiente nobis autem voluptatem veniam modi optio cupiditate? Neque, alias facere, veniam ullam asperiores beatae illo dicta cum minima iusto laudantium earum, nam a aspernatur id eaque!
    </Card>
    </div>
                        </div>
                    </div>
                </div>
                <Footer /> 
            </div>
        </div>
    );
};

export default Dashboard;
