type User = {
  name: string;
  lastname: string;
  email: string;
  id: string;
  actualPlan: "free" | "Plus" | "Max";
  lastPaymentDate?: string;
};

type Store = {
  id: StoreId;
  name: string;
  ownerId: string;
  createdAt: string;
  statusActive: boolean;
  maxProducts: number;
  currentProducts: number;
};

type Product = {
  id: ProductId;
  name: string;
  details: string;
  price: number;
  picturesUrl: string[];
  stock: number;
  statusVisible: boolean;
  storeId: StoreId;
};

type ServerResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
};

type ProductAtCart = {
  product: Product;
  count: number;
};

type Cart = {
  storeId: string;
  products: ProductAtCart[];
};
