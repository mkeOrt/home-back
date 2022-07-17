import { Test, TestingModule } from '@nestjs/testing';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let productsController: ProductsController;
  const productsService = {
    findAll: jest.fn().mockResolvedValue([{ id: 1, name: 'Coca', price: 18 }]),
    findOne: jest.fn().mockResolvedValue({ id: 1, name: 'Coca', price: 18 }),
    create: jest.fn().mockResolvedValue({ id: 1, name: 'Coca', price: 18 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: productsService,
        },
      ],
    }).compile();

    productsController = await module.resolve<ProductsController>(
      ProductsController,
    );
  });

  it('should be defined', () => {
    expect(productsController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result: Product[] = [{ id: 1, name: 'Coca', price: 18 }];
      expect(await productsController.findAll()).toStrictEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a product if exists', async () => {
      const result: Product = { id: 1, name: 'Coca', price: 18 };
      expect(await productsController.findOne(1)).toStrictEqual(result);
    });

    it('should return a null if exists', async () => {
      const result = null;
      jest.spyOn(productsService, 'findOne').mockImplementation(() => result);
      expect(await productsController.findOne(1)).toStrictEqual(result);
    });
  });

  describe('create', () => {
    it('should return a created product', async () => {
      const result: Product = { id: 1, name: 'Coca', price: 18 };
      expect(
        await productsController.create({ name: 'Coca', price: 18 }),
      ).toStrictEqual(result);
    });
  });
});
