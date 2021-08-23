import { Injectable } from '@angular/core';
import {
  addDays, addHours, addMinutes,
  addMonths, addSeconds,
  addYears,
  differenceInDays,
  differenceInHours, differenceInMinutes,
  differenceInMonths, differenceInSeconds,
  differenceInYears
} from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }
  getDiffToNow(diff:string|number|Date){
    const result:string[]=[];
    const now = new Date();
    diff = new Date(diff);
    const years = differenceInYears(now,diff);
    if (years>0){
      result.push(`${years} years`);
      diff = addYears(diff,years);
    }

    const months = differenceInMonths(now,diff);
    result.push(`${months} months`);
    if (months>0){
      diff = addMonths(diff,months);
    }

    const days = differenceInDays(now,diff);
    result.push(`${days} days`);
    if (days>0){
      diff = addDays(diff,days);
    }
    const hours = differenceInHours(now,diff);
    result.push(`${hours} hours`);
    if (hours>0){
      diff = addHours(diff,hours);
    }
    const minutes = differenceInMinutes(now,diff);
    result.push(`${minutes} minutes`);
    if (minutes>0){
      diff = addMinutes(diff,minutes);
    }
    const seconds = differenceInSeconds(now,diff);
    result.push(`${seconds} seconds`);
    if (seconds>0){
      diff = addSeconds(diff,seconds);
    }
    return result.join(' ');
  }
}
