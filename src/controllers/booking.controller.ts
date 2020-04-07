import { Request, Response } from 'express';
import { Book, BookingResponse } from '../models';
import { books } from '../data/books';

export const bookingData: Book[] = [...books];

/**
 * /v1/booking/apply
 */
export const apply = (req: Request, res: Response) => {
  const { body } = req;
  const bookingId = bookingData.length + 1;
  const bookingResponse: BookingResponse = { bookingId };

  bookingData.push({ ...body, bookingId });

  return res.json(bookingResponse);
};

/**
 * /v1/booking/books
 */
export const getAll = (req: Request, res: Response) => {
  return res.json(bookingData);
};

/**
 * /v1/booking/book/:id
 */
export const getById = (req: Request, res: Response) => {
  const { id } = req.params;
  const book: Book = bookingData.find(book => book.bookingId === Number(id));
  return res.json(book);
};
