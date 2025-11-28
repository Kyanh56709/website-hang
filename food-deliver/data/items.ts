export interface FoodItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  desc: string;
}


export const categories = ["All", "Món Chính", "Ăn Vặt", "Đồ Uống"];

export const foodItems: FoodItem[] = [
  // --- MÓN CHÍNH ---
  {
    id: 1,
    name: "Bún bò Huế",
    category: "Món Chính",
    price: 30000,
    image: "/images/Menu CampusGo/Bún bò Huế.jpg", 
    desc: "Đậm đà hương vị cố đô, đầy đủ mọc, thịt bò.",
  },
  {
    id: 2,
    name: "Bún đậu mắm tôm",
    category: "Món Chính",
    price: 30000,
    image: "/images/Menu CampusGo/Bún đậu mắm tôm.jpg",
    desc: "Đậu rán giòn nóng hổi, chả cốm, mắm tôm pha ngon.",
  },
  {
    id: 3,
    name: "Bún trộn",
    category: "Món Chính",
    price: 30000,
    image: "/images/Menu CampusGo/Bún trộn.webp",
    desc: "Bún trộn chua ngọt thanh mát, nhiều topping.",
  },
  {
    id: 4,
    name: "Cơm rang dưa bò",
    category: "Món Chính",
    price: 30000,
    image: "/images/Menu CampusGo/Cơm rang dưa bò.webp",
    desc: "Cơm rang vàng giòn với dưa chua và thịt bò.",
  },
  {
    id: 5,
    name: "Cơm rang thập cẩm",
    category: "Món Chính",
    price: 30000,
    image: "/images/Menu CampusGo/Cơm rang thập cẩm.jpg",
    desc: "Đầy đủ dinh dưỡng với rau củ, giò, trứng.",
  },

  // --- ĂN VẶT ---
  {
    id: 6,
    name: "Bánh bao gà",
    category: "Ăn Vặt",
    price: 15000,
    image: "/images/Menu CampusGo/Bánh bao gà.webp",
    desc: "Vỏ mềm xốp, nhân gà nấm nướng thơm ngon.",
  },
  {
    id: 7,
    name: "Bánh bao thịt",
    category: "Ăn Vặt",
    price: 12000,
    image: "images/Menu CampusGo/Bánh bao thịt.jpg",
    desc: "Nhân thịt trứng cút truyền thống đậm đà.",
  },
  {
    id: 8,
    name: "Bánh bao chay",
    category: "Ăn Vặt",
    price: 6000,
    image: "images/Menu CampusGo/Bánh bao chay.jpg",
    desc: "Thanh đạm, nhẹ nhàng cho bữa phụ.",
  },
  {
    id: 9,
    name: "Kimbap thường",
    category: "Ăn Vặt",
    price: 20000,
    image: "images/Menu CampusGo/Kimbap thường.jpg",
    desc: "Cơm cuộn rong biển Hàn Quốc chuẩn vị.",
  },
  {
    id: 10,
    name: "Kimbap chiên",
    category: "Ăn Vặt",
    price: 22000,
    image: "images/Menu CampusGo/Kimbap chiên.jpg",
    desc: "Vỏ ngoài giòn rụm, bên trong mềm.",
  },

  // --- ĐỒ UỐNG ---
  {
    id: 11,
    name: "Nước chanh leo",
    category: "Đồ Uống",
    price: 5000,
    image: "images/Menu CampusGo/Chanh leo.webp",
    desc: "Giải khát, bổ sung vitamin C tự nhiên.",
  },
  {
    id: 12,
    name: "Trà đào",
    category: "Đồ Uống",
    price: 5000,
    image: "images/Menu CampusGo/Trà đào.webp",
    desc: "Thơm ngon mát lạnh, có miếng đào giòn.",
  },
  {
    id: 13,
    name: "Trà chanh",
    category: "Đồ Uống",
    price: 5000,
    image: "images/Menu CampusGo/Trà chanh.avif",
    desc: "Trà tươi pha với chanh tươi, đá mát lạnh.",
  },
  {
    id: 14,
    name: "Sữa đậu nành",
    category: "Đồ Uống",
    price: 5000,
    image: "images/Menu CampusGo/Sữa đậu nành.jpg",
    desc: "Thơm ngon, bổ dưỡng, nấu trong ngày.",
  },
  {
    id: 15,
    name: "Nước ngọt đóng chai",
    category: "Đồ Uống",
    price: 10000,
    image: "images/Menu CampusGo/Nước ngọt đóng chai.jpg",
    desc: "Vui lòng ghi loại nước bạn chọn khi đặt hàng.",
  },
  {
    id: 16,
    name: "Trà dâu",
    category: "Đồ Uống",
    price: 5000,
    image: "images/Menu CampusGo/Trà dâu.jpg",
    desc: "Trà tươi pha với siro dâu ngọt mát.",
  }
];