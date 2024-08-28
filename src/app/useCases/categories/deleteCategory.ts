import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // Find the product by ID and delete it
    const product = await Category.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully' });

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
