// import work1 from "./../../assets/img/works/img1.png"
// import work2 from "./../../assets/img/works/img2.png"
// import work3 from "./../../assets/img/works/img3.png"

// import userPhoto from "./../img/user/photo.png";
const userPhoto = 'https://i.ibb.co/Bc1Wd04/logo.jpg';
// import currencies from "./../img/works/exchange-money.jpg";

const getWorks = () => {
    const works = [
        {
            id: 0,
            title: "Create a simple exchanger",
            date: "2020",
            tag: ["Development", "Exchanger"],
            description:
                "It was my test task. I had to develop an exhange money app. It includes work with react hooks, get information from API and function components",
            workImage: 'https://i.ibb.co/tKmG1Qy/exchange-money.jpg',
            urlApp: "https://github.com/OleksiiCherevan/exchanger",
            html: `<p><strong>My application have to solve these problems:&nbsp;</strong></p>
            <p>- get currencies from API</p>
            <p>- have buy and sale mode</p>
            <p>- user can change currencies</p>
            <p>- user change value and immediately get result&nbsp;</p>
            <p><strong>At first</strong>: get API. I used vanilla javascript's "fetch" function. In few wors i used useEffect and useState hooks with "fetch" function.&nbsp;</p>
            <p><strong>Second part</strong> is to create buy and sale mode, i decide to useState hook. I can manage "buy" or "sale" mode i use at the moment and then give user correct result.</p>
            <p><strong><em>Third part</em></strong> is to give user opportunity to change currencies without reloading page. So... i use react and have not problem with it. I use method like in the second part and it works greatly.</p>
            <p><strong>Fourth part</strong> is to create an event when text change i need to change the values. I used hooks with events.</p>
            <p><strong>In the end i made this application:</strong></p>
            <p>&nbsp;</p>
            <p><img src="https://i.ibb.co/NrD874M/exchanger-app.png" alt="" width="601" height="413" /></p>
            <p>This app: <a href="https://exchange-acherevan.herokuapp.com/">exchange money</a></p>
            <p>This app's code on gitHub: <a href="https://github.com/OleksiiCherevan/exchanger">exchange app git</a>&nbsp;</p>
            
            `,
        },
        {
            id: 1,
            title: "Awesome product card",
            date: "2021",
            tag: ["Design", "React"],
            description:
                "Product card for clothes store. It was my test task. I had to create a simple react component. It`s a product card with interesting design and functionality",
            workImage:
                "https://i.ibb.co/vjkbT3t/simple-awesome-product-card.png", 
                urlApp: "https://github.com/OleksiiCherevan/simple-awesome-product-card",
           
            html: `
            <p><strong>So my answer:&nbsp;</strong></p>
<p>This is a simple implementation of this idea. Main task of this card is to provide better way to do shoping in online shop or store. We have four key the card functions:&nbsp;</p>
<ol>
<li>Good appereance of the card.&nbsp;</li>
<li>Indicate if the storage have no any product</li>
<li>Gives a customer an opportunity to choose some card attributes&nbsp;</li>
<li>Gives an opportunity to buy product with click "Buy"</li>
</ol>
<p>1. <strong>Appearance</strong>: this card looks pretty good, i can see main information such as price and name of the product</p>
<p><img src="https://i.ibb.co/34FxMZW/simple-awesome-product-card-common.png" alt="simple-awesome-product-card-common" border="0" /></p>
<p>2. <strong>Disabled state of the card</strong>: If storage have no product the card gives follow message:</p>
<p>Out of stock.;</p>
<p><img src="https://i.ibb.co/xXq3dJC/simple-awesome-product-card-out-of-stock.png" alt="simple-awesome-product-card-out-of-stock" border="0" /></p>
<p>3.<strong>Opportunity</strong> to choose the attributes what customer will need.<img src="https://i.ibb.co/Vxwd7BF/simple-awesome-product-card-finish-hover-size.png" alt="simple-awesome-product-card-finish-hover-size" border="0" /></p>
<p>4. <strong>Buy product with click</strong> on Buy button. So just a button what can help you to buy a product. Pretty useful)</p>
<p><img src="https://i.ibb.co/98pxJfS/simple-awesome-product-card-finish-hover.png" alt="simple-awesome-product-card-finish-hover" border="0" /></p>
<p>This app's code on gitHub: <a href="https://github.com/OleksiiCherevan/simple-awesome-product-card">simple-awesome-product-card</a></p>
<p>I hope it was helpful for you! Enjoy =)&nbsp;</p>
`},
        {
            id: 2,
            title: "Simple shop",
            date: "2021",
            tag: ["ReactJS, Graphql"],
            description:
                "Test task. Create a simple shop with ReactJs and GraphQL. It works with graphql back-end. You can add some products to cart, choose the currency or change the attributes. It was a few words about this project",
            urlApp: 'https://github.com/OleksiiCherevan/simple-shop',
                workImage: 'https://i.ibb.co/tZypt0K/main.png',
            html: `
            <p>My task was to create simple shop with back-end part (graphql server) with data.</p>
<p>It's a simple shop with categories, card, bag, card detail and currency...</p>
<p>At first i decide to decompose my application:&nbsp;</p>
<p>I had to create this big part:</p>
<ul>
<li>header</li>
<li>products</li>
<li>currency-menu</li>
<li>bag-menu</li>
<li>cart-menu</li>
<li>and etc...</li>
</ul>
<p>At the photo you can see "<strong>main page</strong>" of application. As you can see there are categories, currency changer menu, cart menu, chose category and product cards.</p>
<p><img src="https://i.ibb.co/tZypt0K/main.png" alt="main" border="0" /></p>
<p><strong>You can change the category</strong>: Change the category and then page will sort products by category.</p>
<p><img src="https://i.ibb.co/xGGv8qm/colthes.png" alt="colthes" border="0" /></p>
<p><strong>Currency change menu</strong>: Back-end part of this application returns a couple of currencies and you can choose that currency what you need... So price will change =)</p>
<p><img src="https://i.ibb.co/gFQjR5T/currency.png" alt="currency" border="0" /></p>
<p><strong>Cart menu</strong>: Cart menu let you change some product's attributes or count.&nbsp;</p>
<p><img src="https://i.ibb.co/v4qvn7Z/cart.png" alt="cart" border="0" /></p>
<p><strong>Bag menu</strong>: It's just elder brother of cart menu. You can do the same with your item like in cart menu.</p>
<p><img src="https://i.ibb.co/XSXSdFH/bag.png" alt="bag" border="0" /></p>
<p><strong>Product description page</strong>: If you click on the product card you will open description page. This is a place where you can read info about the project and choose attributes for product.</p>
<p><img src="https://i.ibb.co/BPJQRyn/detail1.png" alt="detail1" border="0" /></p>
<p><img src="https://i.ibb.co/Wk6fwtp/detail2.png" alt="detail2" border="0" /></p>
<p><strong>Product description images</strong>: you can choose the image and see more information about product.</p>
<p><img src="https://i.ibb.co/7Cp0HHW/detail3.png" alt="detail3" border="0" /></p>
<p>Probably i was too short, please don't be cruel.&nbsp;</p>
<p>Application: <a href="https://github.com/OleksiiCherevan/simple-shop">simple-shop</a></p>
<p>All the best! And have a good day!</p>
<p>&nbsp;</p>
            `,
        },
    ];

    return works;
};

const getPosts = () => {
    const posts = [
        {
            key: 0,
            header: "Create new project with Ajax",
            date: "25 Mar 2021",
            tag: ["Design", "Ajax"],
            description:
                "My experience with ajax requests. The client gives me a new scratch with ajax and i had to create a new web applicatoin from that scratch. I felt i will learn something interesting and new.",
        },
        {
            key: 1,
            header: "Creating favicon",
            date: "11 Apr 2021",
            tag: ["Photoshop", "Icon Design"],
            description:
                "I can do everything. I needed a new favicon for my web app so i asked myself - How can i do it?. At first i downloaded a couple images about future icon thematic and started analyzing. After some time i chose the best image. After some work with photoshop and my brain i created my favicon",
        },
        {
            key: 2,
            header: "Experience with graphQL",
            date: "5 Aug 2021",
            tag: ["React", "GraphQL"],
            description:
                "I neded to create a shop with graphQL as a back-end part. I decided to use Apollo client because it had a good documentation and support. I learned how to create simple requests and work with graphQL server. It`s very effective technologie. I liked working with it.",
        },
        {
            key: 3,
            header: "Creating SPA",
            date: "1 Aug 2021",
            tag: ["React", "Route"],
            description:
                "The customer gave me a task. My task was to create React application without reloading web page. I knew about react-router-doom so i had no problem to create web page with this kind of functionality.",
        },
        {
            key: 4,
            header: "TypeScript is powerful",
            date: "4 Oct 2021",
            tag: ["TypeScript", "Programing"],
            description:
                "When i worked with quite big project i had some troubles because my classes, functions and variables had any type and sometimes it was a problem. My first experience with type script was terrible... I had no experience how to create type, interface or correct class but after some time it becomes better and batter. After some time it was so good when i can know what type i`ll get from my variable or that type i need to put.",
        },
    ];

    return posts;
};

const getAboutUser = () => {
    const user = {
        name: "Alex",
        userPhoto: userPhoto,
        profesion: "Creative Technologist",
        description:
            "I really enjoy coding. I`m experienced developer! A worked with JavaScript, ReactJS, NodeJS, JAVA, JavaFX, SQLite, MySQL, PostgreSQL. Also i`m friendly, responsive and reliable. We can have a good work together =)",
    };

    return user;
};

const getContact = () => {
    const contact = {
        description:
            "Thank you for your visit to my web page. I want to tell you that i`m really happy because you can read it at the moment. So if you have some questions or offers you can write my on my email Lolmagexe@gmail.com, OleksiiCherevan@gmail.com or use this form! I promise! if you write me i`ll answer you. Also i`d like to say -All the best! And best wishes! Alex =)",
        userPhoto: userPhoto,
    };

    return contact;
};

module.exports = {getAboutUser, getContact, getPosts, getWorks }
