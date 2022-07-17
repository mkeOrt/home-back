import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let productsService: ProductsService;
  const productsRepository = {
    find: jest.fn().mockResolvedValue([{ id: 1, name: 'Coca', price: 18 }]),
    findOneBy: jest.fn().mockResolvedValue({ id: 1, name: 'Coca', price: 18 }),
    save: jest.fn().mockResolvedValue({ id: 1, name: 'Coca', price: 18 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: productsRepository,
        },
      ],
    }).compile();

    productsService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productsService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result: Product[] = [{ id: 1, name: 'Coca', price: 18 }];
      expect(await productsService.findAll()).toStrictEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a product if exists', async () => {
      const result: Product = { id: 1, name: 'Coca', price: 18 };
      expect(await productsService.findOne(1)).toStrictEqual(result);
    });

    it('should return a null if exists', async () => {
      const result = null;
      jest.spyOn(productsService, 'findOne').mockImplementation(() => result);
      expect(await productsService.findOne(1)).toStrictEqual(result);
    });
  });

  describe('create', () => {
    it('should return a created product', async () => {
      const result: Product = { id: 1, name: 'Coca', price: 19 };
      expect(
        await productsService.create({ name: 'Coca', price: 19 }),
      ).toStrictEqual(result);
    });
  });
});
