interface GenericRepositoryDao<T> {
  get(params: any): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  save(doc: T): Promise<T>;
  update(id: string, doc: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<T | null>;
}

export default class GenericRepository<T> {
  private dao: GenericRepositoryDao<T>;

  constructor(dao: GenericRepositoryDao<T>) {
    this.dao = dao;
  }

  getAll(params: any): Promise<T[]> {
    return this.dao.get(params);
  }

  getById(params: any): Promise<T | null> {
    return this.dao.getById(params);
  }

  create(doc: T): Promise<T> {
    return this.dao.save(doc);
  }

  update(id: string, doc: Partial<T>): Promise<T | null> {
    return this.dao.update(id, doc);
  }

  delete(id: string): Promise<T | null> {
    return this.dao.delete(id);
  }
}
