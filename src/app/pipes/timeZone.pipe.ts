import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateTimeBasedOnTimeZone'
})

export class DateTimeBasedOnTimeZone implements PipeTransform {
    transform(date: string): string {
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[new Date(date).getMonth()] + ' ' + new Date(date).getDate() + ', ' + new Date(date).getFullYear();
    };
};