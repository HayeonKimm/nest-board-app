import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board-dto';
import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { NotFoundError } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private BoardRepository: BoardRepository,
  ) {}
  // private boards: Board[] = [];
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException('못찾겠다 니가 적은 메세지!!');
  //   }
  //   return found;
  // }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id === found.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
