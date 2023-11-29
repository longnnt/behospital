import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable, map } from 'rxjs';

interface ClassContructor {
  new (...args: any[]): object;
}

export function Serialize(dto: ClassContructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  //short hand syntax in Typescript
  constructor(private dto: ClassContructor) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // run something before a request is handled
    // by the request handler
    // console.log('Im running before the handler', context);

    return next.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        // console.log('Im running before the response is sent out');
        return plainToClass(this.dto, data, {
          // Những thằng expose trong user.dto.ts sẽ được response
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
