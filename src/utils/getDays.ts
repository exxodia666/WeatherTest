export default function getDays(selected: number) {
    let i = 0;
    let days = new Array(5).fill(0);
    days = days.map((e, index) => {
        const date = new Date(new Date().getTime() + (i++) * 24 * 3600000).getDate();
        if (index === selected)
            return { date: date, selected: true }
        return { date: date, selected: false }

    });
    return days;
}