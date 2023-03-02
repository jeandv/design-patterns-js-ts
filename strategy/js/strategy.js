class SaleContext {

  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }

}

class RegularSalesStrategy {

  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + (amount * this.tax);
  }

}

class DiscountSaleStrategy {

  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + (amount * this.tax) - this.discount;
  }

}

class ForeignSaleStrategy {

  calculate(amount) {
    return amount * this.getDollarPrice();
  }

  getDollarPrice() {
    return 20;
  }

}

const regularSale = new RegularSalesStrategy(0.16);

const discountSale = new DiscountSaleStrategy(0.16, 3);

const foreignSale = new ForeignSaleStrategy();


const sale = new SaleContext(regularSale);

// console.log(sale.calculate(10));

// sale.setStrategy(discountSale);

// console.log(sale.calculate(10));

// sale.setStrategy(foreignSale);

// console.log(sale.calculate(10));

// explicacion practica:

const data = [
  {
    id: '1',
    title: 'Pokédex Vanilla',
    des: 'Project using the pokeapi api, you can search the pokemons you want.',
    category: 'javascript',
    repo: 'https://jeandv.github.io/pokedex',
    link: 'https://jeandv.github.io/pokedex'
  },
  {
    id: '2',
    title: 'Memory Game',
    des: 'This is one of the challenges done in CADIF1 Academy. ',
    category: 'javascript - jquery',
    repo: 'https://jeandv.github.io/memoria-game',
    link: 'https://github.com/jeandv/memoria-game'
  },
  {
    id: '3',
    title: 'Github User Finder',
    des: 'frontendmentor.io challenge where I use the github api to be able to search for github users.',
    category: 'javascript',
    repo: 'https://jeandv.github.io/pokedex',
    link: 'https://jeandv.github.io/pokedex'
  },
  {
    id: '5',
    title: 'MisPelis',
    des: 'Save your favorite movies with the ability to edit, delete and search for matches.',
    category: 'javascript - react',
    repo: 'https://github.com/jeandv/mispelis',
    link: 'https://mispelis.vercel.app'
  },
  {
    id: '6',
    title: 'Gixfy',
    des: 'Gif finder using giphy.com api.',
    category: 'typescript - react - wouter - jest',
    repo: 'https://github.com/jeandv/maps-app',
    link: 'https://gixfy.vercel.app'
  },
  {
    id: '7',
    title: 'MapBoxApp',
    des: 'In this project I learned how to consume the mapbox api and use its different functionalities.',
    category: 'typescript - react - axios',
    repo: 'https://github.com/jeandv/maps-app',
    link: 'https://mapsapp.vercel.app'
  },
  {
    id: '8',
    title: 'Github Issues',
    des: 'First project using TanStack Query with Github API, I learned what it is for, how to use it and when to use it.',
    category: 'typescript - react - react query',
    repo: 'https://github.com/jeandv/react-query/tree/main/02-react-query-issues-main',
    link: 'https://github.com/jeandv/react-query/tree/main/02-react-query-issues-main'
  },
  {
    id: '9',
    title: 'MERN Events Ecommerce',
    des: 'Event registration app is a project test to evaluate my skills of the MERN stack using Redux and Stripe.',
    category: 'react - node - express - mongodb',
    repo: 'https://github.com/jeandv/events-test-mern',
    link: 'https://github.com/jeandv/events-test-mern'
  },
  {
    id: '10',
    title: 'Ecommerce Challenge',
    des: 'I did this challenge with the purpose of learning how to manage a shopping cart and to get to know ChakraUI.',
    category: 'typescript - next.js - chakraui',
    repo: 'https://github.com/jeandv/basement-challenge',
    link: 'https://basement-challenge-jeandv.vercel.app'
  },
  {
    id: '11',
    title: 'Pokédex Next.js (ISR)',
    des: 'Search and save your pokémons favs! I learned the use of GetStaticProps, Paths, the Incremental Static Generation and the Regeneration.',
    category: 'typescript - next.js - axios',
    repo: 'https://github.com/jeandv/pokedex-next',
    link: 'https://pokedex-jeandv.vercel.app'
  },
  {
    id: '12',
    title: 'Open Jira',
    des: 'MERN project using TypeScript to learn how to do the main functionality of Jira.',
    category: 'next.js - node - express - mongodb',
    repo: 'https://github.com/jeandv/open-jira',
    link: 'https://open-jira-jeandv.vercel.app'
  },
  {
    id: '13',
    title: 'Clon Mercado Libre',
    des: 'This is one of the Angular challenges done in CADIF1 Academy.',
    category: 'typescript - angular - bootstrap',
    repo: 'https://github.com/jeandv/mercadolibre-des4',
    link: 'https://mercadolibre-des4.vercel.app'
  },
  {
    id: '14',
    title: 'Cadif1 App',
    des: 'This is one of the Ionic challenges done in CADIF1 Academy.',
    category: 'typescript - ionic - angular - scss',
    repo: 'https://github.com/jeandv/pract-ionic',
    link: 'https://www.youtube.com/watch?v=ysIM5sAkdAY'
  },
  {
    id: '15',
    title: 'Electron.js Projects',
    des: 'All my projects using Electron.',
    category: 'electron.js',
    repo: 'https://github.com/jeandv/pract-electronjs',
    link: 'https://github.com/jeandv/pract-electronjs'
  },
  {
    id: '16',
    title: 'Node Backend Projects',
    des: 'Terminal projects (console), rest servers, api rests, etc.',
    category: 'node - express - mongodb',
    repo: 'https://github.com/jeandv/pract-nodejs',
    link: 'https://github.com/jeandv/pract-nodejs'
  },
  {
    id: '17',
    title: 'JavaScript Algorithms',
    des: 'Practice, exercises and algorithmic challenges using JavaScript and TypeScript.',
    category: 'javascript - typescript',
    repo: 'https://github.com/jeandv/algorithms-js',
    link: 'https://github.com/jeandv/algorithms-js'
  },
  {
    id: '18',
    title: 'PHP Ecommerce',
    des: 'Freelancer Ecommerce Project using PHP and MySQL database.',
    category: 'php - mysql - bootstrap',
    repo: 'https://github.com/jeandv/shopphp-paypal',
    link: 'https://github.com/jeandv/shopphp-paypal'
  },
];

class InfoContext {

  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }

}

class ListStrategy {

  show(data, element) {
    element.innerHTML = data.reduce((acumulator, { id, title, des }) => {
      return acumulator + `
        <div>
          <h2>${id} · ${title}</h2>
        </div>
        <hr>`;
    }, '');
  }

}

class DetailedListStrategy {

  show(data, element) {
    element.innerHTML = data.reduce((acumulator, { id, title, des, category, link, repo }) => {
      return acumulator + `
        <div>
          <h2>${id} · ${title}</h2>
          <p>${des}</p>
          <span>
            <strong>${category}</strong> | 
          </span>
          <span>
            <a href=${link} target='_blank'>link</a>
            <a href=${repo} target='_blank'>repo</a>
          </span>
        </div>
        <hr>`;
    }, '');
  }

}

const strategies = [
  new ListStrategy(),
  new DetailedListStrategy()
]

const infoContext = new InfoContext(new ListStrategy(), data, content);

infoContext.show();

slcOptions.addEventListener('change', (e) => {

  const optionValue = e.target.value;

  infoContext.setStrategy(strategies[optionValue]);

  infoContext.show();

});