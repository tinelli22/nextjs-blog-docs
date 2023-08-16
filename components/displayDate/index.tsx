import { parseISO, format as parseFormat } from 'date-fns';
import { IDisplayDateComponentProps } from '../../interfaces/components/displayDate';

export function DisplayDate({ date, format = 'LLLL d, yyyy' }: IDisplayDateComponentProps) {
    const formated = parseISO(date);

    return <time dateTime={date}>{parseFormat(formated, format)}</time>
}