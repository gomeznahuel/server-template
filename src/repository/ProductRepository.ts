import GenericRepository from "./GenericRepository";

export default class ProductRepository extends GenericRepository<any> {
  constructor(dao: any) {
    super(dao);
  }
}
