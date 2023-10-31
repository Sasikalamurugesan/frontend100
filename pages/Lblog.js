import React from 'react';
import BlogPost from './BlogPost';
import Logheader from '../components/Header/Logheader';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Chai Masala',
      content: 'A soothing and nourishing beverage for cold winter days As winter comes, we sometimes find ourselves seeking warm and comforting beverages to keep us warm. In this search for a warm beverage, dried ginger tea emerges as a strong contender',
      imageUrl: 'https://media.tenor.com/vuPhHINj7_oAAAAd/chai-masala.gif', 
      date: 15,
      month: 'Sep',
      year: 2023,
    },
    {
      title: 'Paneer Masala',
      content: ' Paneer originated in the Mughal era as a Royal Kitchen addition. A story says that a chef while preparing food in the royal kitchens accidentally added paneer cubes in the Malai Kofta gravy, and thus gave birth to  Paneer. This dish is a global favourite due to its subtle flavour and a boon to vegetarians everywhere.',
      imageUrl: 'https://amritsruae.com/blog/wp-content/uploads/2020/05/In-which-state-paneer-tikka-is-famous.gif', 
      date: 20,
      month: 'Aug',
      year: 2023,
    },
    {
        title: 'Saffron',
        content: 'Saffron has a sweet, floral taste to it. It’s earthy and has a complex nuanced flavor. On the other hand, saffron that tastes bitter, metallic, or plastic like are often cheap imitators of this unique spice and should be avoided. Some of our favorite saffron dishes include Spanish Seafood Paella, Saffron Shrimp Succotash and Saffron Buttermilk Lemon Pie.',
        imageUrl: 'https://media0.giphy.com/media/3og0IxXdhvV7X1kTMQ/200w.webp?cid=ecf05e471a81cvle1u3q5saq5j3mc3077aw89v5s14xokyfz&ep=v1_gifs_related&rid=200w.webp&ct=g', // Replace with your image path
        date: 12,
        month: 'Jan',
        year: 2023,
      },
      
      {
        title: 'Panch Phoran',
        content: ' Panch is ubiquitous yet unique. It is a blend of five aromatic seeds that are each an important component of any spice box and a is a must for Bengali cuisine.',
        imageUrl: 'https://kaleandcaramel.com/wp-content/uploads/2017/01/tumblr_inline_obpx4vVdHI1rnypoy_500.gif', 
        date: 17,
        month: 'Nov',
        year: 2023,
      },
      {
        title: 'Cardamom',
        content: 'Cardamom is the queen of spices and cardamom 8mm is the larger in the cardamom category. This graded cardamom is specially graded in an 8mm filter. Most of them are handpicked after machine or filter grading.',
        imageUrl: 'https://myheartbeets.com/wp-content/uploads/2016/08/cardamom.gif ',
        date: 20,
        month: 'Dec',
        year: 2023,
      },
      {
        title: 'Organic Spice Blends',
        
        content: 'The Best Organic Spice Blends for Delicious Meals Organic spices add a burst of ﬂavor and aroma to our meals, elevating the taste proﬁle and making every dish a culinary delight. When it comes to organic spices, Kerala in India is renowned for its rich and diverse spice cultivation.',
        imageUrl: 'https://media.tenor.com/p-LOAl8Ue_UAAAAM/tenor.gif', // Replace with your image path
        date: 24,
        month: 'Oct',
        year: 2023,
      },
      {
        title: 'Anar Dana',
        content: 'Anardana has polyphenolic antioxidants that stop the LDL (bad) cholesterol from getting oxidised. This keeps plaque from building up in the arteries, preventing atherosclerosis. Anardana is full of fibre, both the kind that dissolves and the kind that doesnt.The body needs these fibres to stay healthy.',
        imageUrl: 'https://img.freepik.com/free-photo/side-view-red-fruit-smoothie-with-tubules-beverages-dried-lemon-drops-serving-napkins_176474-3199.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais', // Replace with your image path
        date: 10,
        month: 'Feb',
        year: 2023,
      },
      {
        title: 'Harissa ',
        content: 'A typical North African spice blend, harissa is made from a combination of oil, dried chilies, and spices. There are lots of variations, and in addition to those hot peppers, harissa usually includes garlic, cumin, salt, and cayenne pepper. Harissa recipes differ based on geographic regions.',
        imageUrl: 'https://img.freepik.com/premium-photo/red-chili-pepper-flakes-chili-powder-burst-black-backgroundv_54391-690.jpg?w=360', 
        date: 7,
        month: 'Oct',
        year: 2023,
      },
      {
        title: 'Cassia Bark',

        content: 'Cassia bark is an ingredient you find in most Indian grocery stores. It is a relative of cinnamon, and you can use it in exactly the same way. Thus this advice goes for both cinnamon and cassia. Usually cinnamon and cassia bark are fried whole at the beginning cooking an Indian dish, and left in.',
        imageUrl: 'https://img.freepik.com/free-photo/high-angle-bowl-with-cinnamon-sticks-star-anise-pepper_23-2148426078.jpg?size=626&ext=jpg&ga=GA1.1.455358885.1692768358&semt=ais', 
        date: 14,
        month: 'Apr',
        year: 2023,
      },
   
  ];

  /*return (
    <div className="blog-page">
      <h1>Spices Blog</h1>
      <div className="blog-cards">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            content={post.content}
            imageUrl={post.imageUrl}
            date={post.date}
            month={post.month}
            year={post.year}
          />
        ))}
      </div>
    </div>
  );
};*/
return (
  
  <div className="blog-page">
    <Logheader/>
    <div className="blog-cards">
      {
      blogPosts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          content={post.content}
          imageUrl={post.imageUrl}
          date={post.date}
          month={post.month}
          year={post.year}
         
          >
          <div className="date-overlay">
            {post.date} {post.month} {post.year}
          </div>
        </BlogPost>
      ))}
    </div>
  </div>
);
};

export default Blog;
