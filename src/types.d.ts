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