import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      rating: 4,
    },
    {
      id: 2,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      rating: 3,
    },
    {
      id: 3,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      rating: 5,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    };

    this.books.push(newBook);

    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const bookToUpdate = this.books.find((book) => book.id === id);

    if (!bookToUpdate) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    this.books.map((book) => {
      if (book.id === id) {
        book.title = updateBookDto.title || book.title;
        book.author = updateBookDto.author || book.author;
        book.rating = updateBookDto.rating || book.rating;
      }
    });

    return `Book with id ${id} updated successfully`;
  }

  remove(id: number) {
    this.books = this.books.filter((book) => book.id !== id);

    return `This action removes a #${id} book`;
  }
}
