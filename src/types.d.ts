type ServerResponse<T> = {
    success: boolean;
    message: string;
    data?: T;
}

type Usuario = {
    name:string;
    lastname:string;
    email:string;
    id:string;
}

type Store = {
  id: StoreId;
  name: string;
  ownerId: string;
  createdAt: string;
  statusActive: boolean;
  maxProducts: number;
  currentProducts: number;
};