import "./DineInMenu.css";
import Navbar from './Navbar'

const menuData = [
  {
    section: "RODÍZIO (All You Can Eat)",
    items: [
        { name: "Almoço (Lunch)", price: "13,9€" },
        { name: "Jantar Segunda a quinta-feira (Dinner Mon-Thur)", price: "16,9€" },
        { name: "Sexta, Sábado, Domingo, Feriados e vésperas (Friday, Saturday, Sunday, Holidays and Eve)", price: "17,9€" },
        { name: "Crianças até 10 anos (Children up to 10 years)", description: "Pagam 8€ ao almoço e 11€ ao jantar / Pay 8€ for lunch and 11€ for dinner" },
        { name: "O nosso menu pode conter alergénios. Para mais informações contacte um colaborador. Muito obrigado.", description: "Our menu may contain allergens. For more information, contact a collaborator. Thank you very much." },
        { name: "Trigo. Peixe. Aipo. Moluscos. Ovos. Tremoços. Leite. Crustáceos. Mostarda. Amendoim. Sésamo. Dióxido de Enxofre. Soja.", description: "Wheat. Fish. Celery. Mollusks. Eggs. Lupines. Milk. Crustaceans. Mustard. Peanut. Sesame. Sulfur Dioxide. Soy." },
        { name: "Todos os preços apresentados incluem IVA à taxa legal em vigor.", description: "All prices shown include VAT at the legal rate in force." },
    ],
  },
  {
    section: "ENTRADAS (Appetizer)",
    items: [
      { name: "Sopa Miso", description: "Miso Soup. Soja, cebolinha, tofu e hondashi / Soy, chives, tofu and hondashi" },
      { name: "Crepes de Legumes", description: "Vegetable Spring Rolls. 2 unidades de crepes crocantes recheados com legumes / 2 units of crispy spring roll stuffed with vegetables" },
      { name: "Crepes de Gambas", description: "Prawns Spring Rolls. 2 unidades de crepes crocantes recheados com gambas / 2 units of crispy spring roll stuffed with prawns" },
      { name: "Espetadas de Gambas", description: "Prawns Skewers. Gambas grelhadas com cebolinho verde / Grilled prawns with green chives"},
      { name: "Espetadas de Frango", description: "Chicken Skewers. Frango Frito / Fried chicken" },
      { name: "Gyosa", description: "Gyosa. 4 unidades de ravioli grelhado com carne de porco e legumes / 4 pcs. grilled ravioli with pork and vegetables" },
      { name: "Camarão Panado", description: "Crispy Breaded Shrimp. 4 unidades camarão frito com pão ralado / 4 pcs. crispy breaded shrimp" }
    ]
  },
  {
    section: "FREESTYLE",
    items: [
      { name: "Mix de sushi", description: "Sushi selecionado pelo sushiman consoante o numero de pessoas" },
      { name: "Sushi mix", description:"Sushi seslected by Chef according to the number of people" }
    ]
  },
  {
    section: "SASHIMI",
    items: [
      { name: "Salmão - 5 Fatias", description: "Salmon - 5 Slices" },
      { name: "Atum - 5 Fatias", description: "Tuna - 5 Slices" },
      { name: "Peixe Manteiga - 5 Fatias", description: "Butterfish - 5 Slices" },
      { name: "Robalo - 5 Fatias", description: "Sea Bass - 5 Slices" },
      { name: "Sashimi Mix - 6 Fatias de Salmão, 2 Atum, 2 Peixe Manteiga e 2 Robalo", description: "Sashimi Mix - 6 Salmon, 2 Tuna, 2 Butterfish, 2 Sea Bass" }
    ]
  },
  {
    section: "NIGUIRI",
    items: [
      { name: "Salmão - 2 unidades", description: "Salmon - 2 pcs" },
      { name: "Atum - 2 unidades", description: "Tuna - 2 pcs" },
      { name: "Peixe Manteiga - 2 unidades", description: "Butterfish - 2 pcs" },
      { name: "Robalo - 2 unidades", description: "Sea Bass - 2 pcs" },
      { name: "Camarão - 2 unidades", description: "Shrimp - 2 pcs" },
      { name: "Salmão Flamejado - 2 unidades", description: "Seared Salmon - 2 pcs" }
    ]
  },
  {
    section: "HOSSOMAKI",
    items: [
      { name: "Salmão - 4 unidades", description: "Salmon - 4 pcs" },
      { name: "Atum - 4 unidades", description: "Tuna - 4 pcs" },
      { name: "Manga - 4 unidades", description: "Mango - 4 pcs" },
      { name: "Pepino - 4 unidades", description: "Cucumber - 4 pcs" },
      { name: "Camarão - 4 unidades", description: "Shrimp - 4 pcs" }
    ]
  },
  {
    section: "URAMAKI",
    items: [
      { name: "Classic Salmon - 4 un. / Salmão, Abacate e Sésamo", description: "Classic Salmon - 4 pcs w/ salmon, avocado, sesame" },
      { name: "California Roll - 4 un. / Salmão, Manga, Pepino e Ovas", description: "California Roll - 4 pcs w/ salmon, mango, cucumber, fish roe" },
      { name: "Classic Atum - 4 un. / Atum, Abacate e Cebolinho", description: "Classic Tuna - 4 pcs w/ tuna, avocado and chives" },
      { name: "Shrimp Roll - 4 un. / Camarão, Pepino, Manga, Ovas e Philadelphia", description: "Shrimp Roll - 4 pcs w/ shrimp, cucumber, mango, fish roe, Philadelphia" },
      { name: "Salmão Grelhado - 4 un. / Salmão Grelhado, Abacate, Sésamo e Philadelphia", description: "Grilled Salmon - 4 pcs w/ grilled salmon, avocado, sesame and Philadelphia" },
      { name: "Breaded Shrimp - 4 un. / Camarão, Philadelphia, Panado e Sésamo", description: "Breaded Shrimp - 4 pcs w/ shrimp, Philadelphia, breadcrumbs and sesame" }
    ]
  },
  {
    section: "HOT ROLL",
    items: [
      { name: "Hot Philadelphia - 4 un. c/ Philadelphia, Salmão Grelhado e Alto Francês c/ Teriyaki", description: "Hot Philadelphia - 4 pcs. w/ Philadelphia, grilled salmon, and leek w/ teriyaki" },
      { name: "Tempura de Eggroll - 4 un. / Philadelphia, Salmão Enrolado em ovo e sweet-chilli", description: "Eggroll Tempura - 4 pcs. w/ Philadelphia, salmon wrapped in egg, and sweet chilli" },
      { name: "Sushi Panado - 4 un. / Philadelphia, Salmão, Abacate, pão ralado e sweet-chilli", description: "Breaded Sushi - 4 pcs. w/ Philadelphia, salmon, avocado, and sweet chilli" },
      { name: "Hot Roll - 4 un. / Salmão, Maionese e Sesame / Teriyaki", description: "Hot Roll - 4 pcs. w/ salmon, mayonnaise, and sesame w/ teriyaki" }
    ]
  },
  {
    section: "ESPECIALIDADES",
    items: [
      { name: "Avocado Gunkan - 4 un. Salmão Enrolado c/ camada de Abacate e Sésamo", description: "Avocado Gunkan - 4 units of salmon, avocado, and sesame" },
      { name: "Gunkan Morango - 4 un. Salmão Enrolado c/ camada de Morango", description: "Strawberry Gunkan - 4 units of salmon wrapped w/ strawberry" },
      { name: "Gunkan Manga - 4 un. Salmão Enrolado c/ camada de Manga", description: "Mango Gunkan - 4 units of salmon wrapped w/ mango" },
      { name: "Burnt Gunkan - 4 un. Salmão Braseado enrolado c/ camada de Salmão Picado", description: "Burnt Gunkan - 4 pcs. of salmon wrapped w/ chopped salmon" },
      { name: "Egg Roll - 4 un. c/ Salmão, abacate e Philadelphia enrolade em ovo", description: "Egg Roll - 4 pcs. w/ salmon, avocado, and Philadelphia wrapped in egg" },
      { name: "Classic Burnt Salmon - 4 un. c/ camada de Salmão braseado", description: "Classic Burnt Salmon - 4 pcs. w/ layers of braised salmon" },
      { name: "Breaded Shrimp and Salmon - 4 un. c/ Salmão, camarão, panado e ovas", description: "Breaded Shrimp and Salmon - 4 pcs. w/ salmon, breaded shrimp, and fish roe" },
      { name: "Salmon and Strawberry - 4 un. c/ Salmão, morango e Philadelphia", description: "Salmon and Strawberry - 4 pcs. w/ salmon, strawberry, and Philadelphia" },
      { name: "Peanuts and Cheese - 4 un. c/ Salmão, amendoim e Philadelphia", description: "Peanuts and Cheese - 4 pcs. w/ salmon, peanuts, and Philadelphia" },
      { name: "Spicy Seaweed - 4 un. c/ Salmão e algas do mar com sweet-chilli", description: "Spicy Seaweed - 4 pcs. w/ salmon and seaweed with sweet chilli" },
      { name: "Gunkan Pepino - 4 un. de pepino enrolado c/ Salmão e queijo", description: "Cucumber Gunkan - 4 pcs. of cucumber wrapped with salmon and cheese" }
    ]
  },
  {
    section: "TEMAKI",
    items: [
      { name: "Salmão - Philadelphia e Sésamo", description: "Salmon - Philadelphia, and Sesame" },
      { name: "Atum - Philadelphia e Sésamo", description: "Tuna - Philadelphia, and Sesame" },
      { name: "Camarão Panado - Philadelphia e Sésamo", description: "Breaded Shrimp - Philadelphia, and Sesame" },
      { name: "Vegetariano - Manga, Pepino, Abacate, Philadelphia e Sésamo", description: "Vegetarian - Mango, Cucumber, Avocado, Philadelphia, and Sesame" },
      { name: "Camarão - Camarão, Manga, Pepino, Philadelphia e Sésamo", description: "Shrimp - Shrimp, mango, cucumber, avocado, Philadelphia, and sesame" }
    ],
    note: "Temakis em folha de ovo acrescem 0,50 € / Temakis in egg leaf adds € 0,50"
  },
  {
    section: "PRATOS QUENTES (Hot Dishes)",
    items: [
        { name: "Noodles de Gambas", description: "Prawn Noodles" },
        { name: "Noodles de Carne de Vaca", description: "Beef Noodles" },
        { name: "Noodles de Frango", description: "Chicken Noodles" },
        { name: "Noodles Vegetariano", description: "Vegetarian Noodles" },
        { name: "Salmão Grelhado", description: "Grilled Salmon" },
        { name: "Tempura de Gambas", description: "Prawn Tempura" },
        { name: "Carne de Vaca Grelhada", description: "Grilled Beef" },
        { name: "Gambas Grelhadas", description: "Grilled Prawns" },
        { name: "Choco Salteado", description: "Stir-fried Cuttlefish" },
        { name: "Cogumelos Salteados", description: "Stir-fried mushroom" },
        { name: "Frango Panado", description: "Chicken in breadcrumbs" },
        { name: "Arroz Salteado", description: "Stir-fried rice" },
        { name: "Gambas c/ sweet chilli", description: "Prawns w/ sweet chilli" }
    ]
  },
  {
    section: "SOBREMESAS (Desserts)",
    items: [
        { name: "Gelado Frito - Topping Morango, chocolate ou caramelo", description: "Fried Ice Cream - Strawberry, chocolate, or caramel topping", price: "4€" },
        { name: "Banana Frita - Topping Morango, chocolate ou caramelo", description: "Fried Banana - Strawberry, chocolate or caramel topping", price: "4€" },
        { name: "Gelado na Chapa - Topping Morango, chocolate ou caramelo", description: "Ice Cream Grilled Plate - Strawberry, chocolate or caramel topping", price: "4€" },
        { name: "Bola de Gelado", description: "Ice Cream Ball", price: "2,8€" },
        { name: "Sobremesa Caseira - Mediante Disponibilidade", description: "Home Made Dessert - Subject to availability", price: "3,5€" },
        { name: "Fruta da Época - Mediante Disponibilidade", description: "Seasonal Fruit - Subject to availability", price: "3€" }
    ]
  },
  {
    section: "BEBIDAS (Drinks)",
    items: [
      { name: "Refrigerantes", description: "Soft Drinks", price: "2€" },
      { name: "Cerveja Super Bock", description: "Super Bock Beer", price: "2€" },
      { name: "Cerveja Super Bock Stout sem álcool", description: "Super Bock Stout non-alcohol", price: "2,2€" },
      { name: "Sumo de Laranja Natural", description: "Natural Orange Juice", price: "3,5€" },
      { name: "Água 33 cl", description: "Water 33 cl", price: "1,5€" },
      { name: "Compal", description: "Compal Juice", price: "2€" },
      { name: "Água com gás", description: "Sparkling water", price: "1,75€" },
      { name: "Somersby", description: "Somersby Cider", price: "2,5€" },
      { name: "Cerveja Chinesa", description: "Chinese Beer", price: "2,8€" },
      { name: "Cerveja Japonesa", description: "Japanese Beer", price: "3,2€" },
      { name: "Café", description: "Coffee", price: "0,8€" },
      { name: "Carioca de Café/Limão", description: "Light coffee/lemon", price: "0,8€" },
      { name: "Descafeinado/Pingo", description: "Decaffeinated/Pingo", price: "1,2€" },
      { name: "Chá p/pessoa - Verde ou Jasmin", description: "Tea per person - Green or Jasmine", price: "1,2€" }
    ]
  },
  {
    section: "VINHO BRANCO (White Wine)",
    items: [
      { name: "Castello D'Alba - Douro", price: "11€" },
      { name: "Planalto - Douro", price: "11€" },
      { name: "Altano - Douro", price: "12€" },
      { name: "Alvarinho Deu La Deu - Verde", price: "15€" },
      { name: "Diálogo - Douro", price: "19€" },
      { name: "Vallado - Douro", price: "20€" },
      { name: "Meia Garrafa Castello D'Albo - Douro", price: "7€" },
      { name: "Meia Garrafa Quinta da Avelada - Douro", price: "7€" }
    ]
  },
  {
    section: "VINHO TINTO (Red Wine)",
    items: [
      { name: "Castello D'Alba - Douro", price: "11€" },
      { name: "Chaminé - Alentejo", price: "13€" },
      { name: "Kopke - Douro", price: "14€" },
      { name: "Vallado - Douro", price: "21€" },
      { name: "Quinta do Castro - Douro", price: "26€" },
      { name: "Meia Garrafa Chaminé - Alentejo", price: "7€" },
      { name: "Meia Garrafa Quinta da Avelada - Douro", price: "7€" }
    ]
  },
  {
    section: "ROSÉ",
    items: [
      { name: "Mateus - Douro", price: "10€" },
      { name: "EA - Alentejo", price: "12€" },
      { name: "Meia Garrafa Mateus - Douro", price: "6€" }
    ]
  },
  {
    section: "ESPUMANTE (Sparkling Wine)",
    items: [
      { name: "Paço do Duque - Bairrada", price: "9€" },
      { name: "São Domingos - Bairrada", price: "13€" },
      { name: "Fita Azul Doce - Douro", price: "16€" },
      { name: "Soalheiro Bruto - Verde", price: "25€" }
    ]
  },
  {
    section: "SANGRIA",
    items: [
      { name: "Branco", description: "White", price: "10€" },
      { name: "Tinto", description: "Red", price: "10€" },
      { name: "Espumante", description: "Sparkling Wine", price: "11€" },
      { name: "Saké", price: "13€" },
      { name: "Copo Branco/Tinto", description: "A glass of white/red", price: "4€" },
      { name: "Copo Espumante", description: "A glass of sparkling wine", price: "4,3€" },
      { name: "Copo Saké", description: "A glass of sake", price: "4,3€"}
    ]
  },
  {
    section: "GIN",
    items: [
      { name: "Gordon's", price: "5,5€" },
      { name: "Tanqueray", price: "6€" },
      { name: "Bulldog", price: "8€" },
      { name: "Big Boss", price: "8€" },
      { name: "Hendricks", price: "9€" },
      { name: "G'Vine", price: "10€" },
      { name: "Monkey 47", price: "11€" }
    ]
  }
];

const DineInMenu = () => {
  return (
    <div className="menu-container">
        <Navbar />
        <h1>Umi Sushi - Dine In Menu</h1>
        {menuData.map((section, idx) => (
          <div key={idx} className="menu-section">
            <h2>{section.section}</h2>
            {section.items.map((item, i) => (
              <div key={i} className="menu-item">
                <div className="item-name">{item.name}</div>
                {item.description && <div className="item-desc">{item.description}</div>}
                <div className="item-price">{item.price}</div>
              </div>
            ))}
            {section.note && <p className="section-note">{section.note}</p>}
          </div>
        ))}
    </div>
  );
};

export default DineInMenu;
