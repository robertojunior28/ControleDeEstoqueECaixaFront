import ApiService from "./ApiService";

export default class ProdutosApiServico extends ApiService{
    constructor(){
        super('/v1/produtos');
    }

    create(object){
        return this.post('', object);
    }

    update(id, object){
        return this.put(`/${id}`, object);
    }

    delete(id){
        return super.delete(`/${id}`);
    }

    find(params){
        return this.get(`${params}`);
    }
}