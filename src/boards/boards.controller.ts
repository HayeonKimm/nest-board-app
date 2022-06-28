import { BoardstatusValidationPipe } from './../pipes/board-status-validation';
import { CreateBoardDto } from './dto/create-board-dto';
import { BoardsService } from './boards.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board } from './boards.model';
import { BoardStatus } from './boards.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe) //핸들러 레벨 파이프
  createBoard(@Body() createBoarDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoarDto);
  }
  @Get('/:id')
  getBoardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardstatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
