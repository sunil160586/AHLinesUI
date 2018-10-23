import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'changeNewLineToBreak'
})

export class NewLineToBreak implements PipeTransform {
    transform(content: string): string {
        return content.replace(/\r\n/g, '<br>');
    };
};