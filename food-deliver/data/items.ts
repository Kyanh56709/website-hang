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
    image: "https://images.unsplash.com/photo-1582878826618-c05326effd8b?auto=format&fit=crop&w=600&q=80", 
    desc: "Đậm đà hương vị cố đô, đầy đủ mọc, thịt bò.",
  },
  {
    id: 2,
    name: "Bún đậu mắm tôm",
    category: "Món Chính",
    price: 30000,
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=600&q=80",
    desc: "Đậu rán giòn nóng hổi, chả cốm, mắm tôm pha ngon.",
  },
  {
    id: 3,
    name: "Bún trộn",
    category: "Món Chính",
    price: 30000,
    image: "https://images.unsplash.com/photo-1616429384534-19ec80112469?auto=format&fit=crop&w=600&q=80",
    desc: "Bún trộn chua ngọt thanh mát, nhiều topping.",
  },
  {
    id: 4,
    name: "Cơm rang dưa bò",
    category: "Món Chính",
    price: 30000,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb74b?auto=format&fit=crop&w=600&q=80",
    desc: "Cơm rang vàng giòn với dưa chua và thịt bò.",
  },
  {
    id: 5,
    name: "Cơm rang thập cẩm",
    category: "Món Chính",
    price: 30000,
    image: "https://images.unsplash.com/photo-1536304993881-ff3c9e3f42fa?auto=format&fit=crop&w=600&q=80",
    desc: "Đầy đủ dinh dưỡng với rau củ, giò, trứng.",
  },

  // --- ĂN VẶT ---
  {
    id: 6,
    name: "Bánh bao gà",
    category: "Ăn Vặt",
    price: 15000,
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80",
    desc: "Vỏ mềm xốp, nhân gà nấm nướng thơm ngon.",
  },
  {
    id: 7,
    name: "Bánh bao thịt",
    category: "Ăn Vặt",
    price: 12000,
    image: "https://images.unsplash.com/photo-1630129768266-99646c26535f?auto=format&fit=crop&w=600&q=80",
    desc: "Nhân thịt trứng cút truyền thống đậm đà.",
  },
  {
    id: 8,
    name: "Bánh bao chay",
    category: "Ăn Vặt",
    price: 6000,
    image: "https://images.unsplash.com/photo-1541746274-1246c76cb3a7?auto=format&fit=crop&w=600&q=80",
    desc: "Thanh đạm, nhẹ nhàng cho bữa phụ.",
  },
  {
    id: 9,
    name: "Kimbap thường",
    category: "Ăn Vặt",
    price: 20000,
    image: "https://images.unsplash.com/photo-1610419827402-23c2a6327376?auto=format&fit=crop&w=600&q=80",
    desc: "Cơm cuộn rong biển Hàn Quốc chuẩn vị.",
  },
  {
    id: 10,
    name: "Kimbap chiên",
    category: "Ăn Vặt",
    price: 22300,
    image: "https://images.unsplash.com/photo-1603245460565-5a7b42a6a6f4?auto=format&fit=crop&w=600&q=80",
    desc: "Vỏ ngoài giòn rụm, bên trong mềm dẻo (22k3).",
  },

  // --- ĐỒ UỐNG ---
  {
    id: 11,
    name: "Nước chanh leo",
    category: "Đồ Uống",
    price: 5000,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    desc: "Giải khát, bổ sung vitamin C tự nhiên.",
  },
  {
    id: 12,
    name: "Trà đào cam sả",
    category: "Đồ Uống",
    price: 5000,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    desc: "Thơm ngon mát lạnh, có miếng đào giòn.",
  },
  {
    id: 13,
    name: "Trà chanh / Trà dâu",
    category: "Đồ Uống",
    price: 5000,
    image: "https://images.unsplash.com/photo-1519226612673-73c0234437ef?auto=format&fit=crop&w=600&q=80",
    desc: "Vui lòng ghi chú vị bạn chọn (Chanh hoặc Dâu).",
  },
  {
    id: 14,
    name: "Sữa đậu nành",
    category: "Đồ Uống",
    price: 5000,
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=600&q=80",
    desc: "Thơm ngon, bổ dưỡng, nấu trong ngày.",
  },
  {
    id: 15,
    name: "Nước ngọt đóng chai",
    category: "Đồ Uống",
    price: 10000,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    desc: "Coca, Pepsi, 7Up"
  },
];