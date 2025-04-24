import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOKS_CLIENT') private readonly usersClient: ClientProxy,
  ) {}

  create(createBookDto: CreateBookDto) {
    return this.usersClient.send('books.createBook', createBookDto);
  }

  findAll() {
    return this.usersClient.send('books.findAllBooks', {});
  }

  findOne(id: number) {
    return this.usersClient.send('books.findOneBook', { id });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.usersClient.send('books.updateBook', { id, updateBookDto });
  }

  remove(id: number) {
    return this.usersClient.send('books.removeBook', { id });
  }
}
