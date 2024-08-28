import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // Find the product by ID and delete it
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
