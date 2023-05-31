import greekSalad from "../images/ll-greek-salad.jpg";
import lemonChicken from "../images/ll-lemon-chicken.jpg";
import bruschettaImg from "../images/ll-bruschetta.jpg";

const specials = [
    {
        id: "s01",
        image: lemonChicken,
        alt: "Crispy fried chicken served in a lemon glaze.",
        name: "Lemon Chicken",
        price: "$10.99",
        oPrice: "$24.99",
        description: "Chicken breast generously coated in parmesan and pan-fried. It is then smothered in a lemon butter sauce with garlic."
    },
    {
        id: "s02",
        image: greekSalad,
        alt: "Greek salad made of cucumbers, feta, tomatoes, and olive oil.",
        name: "Greek Salad",
        price: "$12.98",
        oPrice: "$18.00",
        description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese."
    },
    {
        id: "s03",
        image: bruschettaImg,
        alt: "Toast covered in tomato, mozzarella, and basil.",
        name: "Bruschetta",
        price: "$5.99",
        oPrice: "$9.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    }
]

export default specials;