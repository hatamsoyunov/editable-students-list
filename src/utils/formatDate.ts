function formatDate(dateStr: string) {
    if (dateStr === '') {
        return '';
    }

    const date: Date = new Date(dateStr);

    let dd: number | string = date.getDate();
    if (dd < 10) dd = `0${dd}`;

    let mm: number | string = date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;

    let yyyy: number | string = date.getFullYear();
    if (yyyy < 10) yyyy = `0${yyyy}`;

    return `${dd}.${mm}.${yyyy}`;
}

export default formatDate;
