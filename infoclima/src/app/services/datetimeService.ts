
export function formatDateString(date: string) {
    date = date.split("T")[0];
    var date_part = date.split('-');
    return date_part[2] + "/" + date_part[1] + "/" + date_part[0];
}